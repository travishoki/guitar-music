/*
To build:
run yarn build:bookmarklets
*/

import { UG } from './const';
import { getSongTitle } from './helpers';
import {
	FONT_SIZE,
	NO_PATTERN,
	PAD,
	PAGE_H,
	PAGE_W,
	sectionHeadings,
} from './ultimate-guitar-print.const';
import { escapeRegExp, normalize } from './ultimate-guitar-print.helpers';

// Only keep the body
const keep = document.querySelector<HTMLElement>(UG.mainContent);
if (keep) document.body.replaceChildren(keep.cloneNode(true));

// Remove Elements
[
	UG.floatingControls,
	UG.floatingControlsSecondary,
	UG.comments,
	UG.topMenu,
	UG.ugc,
	UG.songModificationMenu,
	UG.bottomControls,
	UG.songStats,
	UG.authorContributors,
	UG.instrumentMenu,
	UG.playStrumButton,
	UG.strumEditButton,
].forEach((selector) => {
	document.querySelectorAll(selector).forEach((el) => el.remove());
});

// Check Author Line
const elAuthorLine = document.querySelector<HTMLElement>(UG.authorLine);
if (elAuthorLine?.textContent?.includes('Author Unregistered.'))
	elAuthorLine.remove();

// Bump Font Size
const elContent = document.querySelector<HTMLElement>(UG.content);
if (elContent) {
	elContent.style.clear = 'both';
	elContent.style.display = 'block';
	elContent.style.paddingTop = '0';
}

// Inner wrapper has inline font-size that overrides the parent
const elInnerContent = document.querySelector<HTMLElement>(UG.tab);
if (elInnerContent) elInnerContent.style.fontSize = FONT_SIZE;

// Remove all canvas elements inside each chord diagram
document.querySelectorAll<HTMLElement>(UG.chordDiagram).forEach((rzayq) => {
	rzayq.querySelectorAll('canvas').forEach((canvas) => canvas.remove());
});

// Cleanup Chords Section
document
	.querySelectorAll<HTMLElement>(UG.chordDiagram)
	.forEach((el) => el.remove());
document.querySelectorAll<HTMLElement>(UG.chordCard).forEach((el) => {
	el.style.margin = '0 20px 20px 0';
	el.style.padding = '0px';
});
const elChordInnerContainer = document.querySelector<HTMLElement>(
	UG.chordInnerContainer,
);
if (elChordInnerContainer) elChordInnerContainer.style.margin = '0';
const elChordSection = document.querySelector<HTMLElement>(UG.chordSection);
if (elChordSection) elChordSection.style.paddingRight = '0';

// Style top section
document.querySelectorAll<HTMLElement>(UG.topSection).forEach((el) => {
	el.style.padding = '0px';
});

// Wrap section headers in spans
(() => {
	const re = new RegExp(sectionHeadings.map(escapeRegExp).join('|'), 'g');

	// Collect matching text nodes first, since wrapping mutates the tree.
	const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
	const nodes = [];
	let node;
	while ((node = walker.nextNode())) {
		re.lastIndex = 0;
		if (re.test(node.nodeValue)) nodes.push(node);
	}

	nodes.forEach((textNode) => {
		const text = textNode.nodeValue;
		const frag = document.createDocumentFragment();
		let last = 0;
		let match;
		re.lastIndex = 0;

		while ((match = re.exec(text))) {
			if (match.index > last) {
				frag.appendChild(
					document.createTextNode(text.slice(last, match.index)),
				);
			}

			const span = document.createElement('span');
			span.style.marginTop = '0';
			span.style.display = 'inline-block';
			span.textContent = match[0];
			frag.appendChild(span);

			last = match.index + match[0].length;
		}

		if (last < text.length) {
			frag.appendChild(document.createTextNode(text.slice(last)));
		}

		textNode.parentNode.replaceChild(frag, textNode);
	});
})();

// Collapse repeated sections: keep the heading, drop content that already appeared
(() => {
	// Key sections by their heading only, so EVERY repeat of a heading (e.g.
	// [Chorus]) collapses - even if a later one has a minor content difference.
	const dedupe = (container: HTMLElement | null) => {
		if (!container) return;

		// Heading spans at ANY depth, in document order.
		const headings = Array.from(container.querySelectorAll('span')).filter(
			(el) => sectionHeadings.includes((el.textContent ?? '').trim()),
		);
		if (headings.length === 0) return;

		const seen = new Set<string>();
		headings.forEach((heading, i) => {
			// Only collapse repeated [Chorus] sections.
			if ((heading.textContent ?? '').trim() !== '[Chorus]') return;

			const next = headings[i + 1];

			// The section body = everything between this heading and the next one.
			const range = document.createRange();
			range.setStartAfter(heading);
			if (next) {
				range.setEndBefore(next);
			} else if (container.lastChild) {
				range.setEndAfter(container.lastChild);
			}

			const key = normalize(heading.textContent ?? '');

			if (seen.has(key)) {
				range.deleteContents();
				const label = (heading.textContent ?? '')
					.trim()
					.replace(/^\[|\]$/g, '');
				const repeat = document.createElement('span');
				repeat.textContent = `Repeat ${label}`;
				repeat.style.marginLeft = '10px';
				repeat.style.color = '#666';
				heading.after(repeat);
			} else {
				seen.add(key);
			}
		});
	};

	dedupe(document.querySelector<HTMLElement>(UG.tab));
	dedupe(document.querySelector<HTMLElement>(UG.content));
})();

// Wrap each section (heading + its content) in a bordered div
(() => {
	const wrapSections = (container: HTMLElement | null) => {
		if (!container) return;

		// Heading spans at ANY depth, in document order.
		const headings = Array.from(container.querySelectorAll('span')).filter(
			(el) => sectionHeadings.includes((el.textContent ?? '').trim()),
		);

		headings.forEach((heading, i) => {
			const next = headings[i + 1];

			// Select from this heading through everything up to the next heading.
			const range = document.createRange();
			range.setStartBefore(heading);
			if (next) {
				range.setEndBefore(next);
			} else if (container.lastChild) {
				range.setEndAfter(container.lastChild);
			}

			const div = document.createElement('div');
			div.style.borderTop = '1px solid #ccc';
			div.style.paddingTop = '8px';
			div.style.marginBottom = '8px';
			// extractContents + insertNode instead of surroundContents, which
			// throws if the range boundaries don't sit on clean node edges.
			div.appendChild(range.extractContents());
			range.insertNode(div);
		});
	};

	// Only the inner <pre> holds the section text; wrapping a parent too would
	// double-wrap the same headings and leave stray empty borders.
	wrapSections(document.querySelector<HTMLElement>(UG.tab));
})();

// Drop the strumming section when there's no pattern for this song
(() => {
	document.querySelectorAll<HTMLElement>(UG.strummingText).forEach((el) => {
		if (el.textContent.includes(NO_PATTERN)) {
			el.closest(UG.strummingSection)?.remove();
		}
	});
})();

// Put the two lead sections side by side, 50% each
(() => {
	const sections = document.querySelectorAll<HTMLElement>(UG.leadSection);
	if (sections.length < 2) {
		sections[0].style.margin = '0px';
		sections[0].style.paddingBottom = '0px';
		return;
	}

	const [first, second] = Array.from(sections);
	const parent = first.parentElement as HTMLElement;

	const row = document.createElement('div');
	row.classList.add('print-lead-sections');
	row.style.display = 'flex';
	row.style.alignItems = 'flex-start';
	row.style.gap = '20px';
	row.style.width = '100%';

	// Drop the row where the first section is, then move both sections into it.
	parent.insertBefore(row, first);
	[first, second].forEach((section) => {
		section.style.width = '50%';
		section.style.paddingBottom = '0px';
		section.style.margin = '0px';
		section.style.boxSizing = 'border-box';
		row.appendChild(section);
	});

	// If the parent is itself a flex container, the row would sit *beside* the
	// following content (e.g. the tab content) instead of above it. Force it to block so
	// the two-column row and everything after it stack vertically.
	parent.style.display = 'block';
})();

// Put the strumming-pattern articles side by side, 50% each
(() => {
	// The two strumming articles already share a strumming-row
	// parent, so just make that parent a flex row and size each article to half.
	const container = document.querySelector<HTMLElement>(UG.strummingRow);
	if (!container) return;

	container.style.display = 'flex';
	container.style.alignItems = 'flex-start';
	container.style.width = '100%';

	container
		.querySelectorAll<HTMLElement>(UG.strummingArticle)
		.forEach((article) => {
			article.style.flex = '1';
			article.style.width = '50%';
			article.style.boxSizing = 'border-box';
		});
})();

// Paginate the tab into 8.5 x 11 pages (print at 100% scale for a
// 1:1 match). Blocks that would overflow a page get pushed to the next one.
(() => {
	const source = document.querySelector<HTMLElement>(UG.tab);
	if (!source) return;

	// HTML content that leads the first page, in order: the title/info header,
	// then the Chords + Strumming row (or the lone Chords section if there's no
	// strumming paired with it).
	const leadBlocks = [
		document.querySelector<HTMLElement>(UG.songHeader),
		document.querySelector<HTMLElement>('.print-lead-sections') ||
			document.querySelector<HTMLElement>(UG.chordSection),
	].filter(Boolean);

	// The monospace tab blocks: the pre's children (title text + section divs).
	const tabBlocks = Array.from(source.childNodes);

	const pages = document.createElement('div');
	source.replaceWith(pages);

	const makePage = () => {
		const page = document.createElement('div');
		page.classList.add('print-page');
		Object.assign(page.style, {
			boxSizing: 'border-box',
			position: 'relative',
			width: `${PAGE_W}px`,
			height: `${PAGE_H}px`,
			padding: `${PAD}px ${PAD}px`,
			margin: '0 auto 16px',
			overflow: 'hidden',
			background: '#fff',
			color: '#000',
			breakAfter: 'page',
		});
		pages.appendChild(page);
		return page;
	};

	// Pre-styled wrapper so tab content keeps its monospace alignment once it's
	// out of the original <pre>. Lead (HTML) content is NOT put in one of these.
	const makeFlow = () => {
		const flow = document.createElement('div');
		Object.assign(flow.style, {
			whiteSpace: 'pre',
			fontFamily: "'Roboto Mono', 'Courier New', monospace",
			fontSize: FONT_SIZE,
		});
		return flow;
	};

	let page = makePage();

	// 1) Lead HTML blocks (header/info) go on the first page, unstyled.
	leadBlocks.forEach((block) => {
		page.appendChild(block);
		if (page.scrollHeight > page.clientHeight && page.childNodes.length > 1) {
			page = makePage();
			page.appendChild(block);
		}
	});

	// 2) Tab blocks flow into pre-styled wrappers, breaking to a new page on overflow.
	let flow = makeFlow();
	page.appendChild(flow);
	tabBlocks.forEach((block) => {
		flow.appendChild(block);

		const overflowed = page.scrollHeight > page.clientHeight;
		const pageHasOther =
			page.childNodes.length > 1 || flow.childNodes.length > 1;
		if (overflowed && pageHasOther) {
			page = makePage();
			flow = makeFlow();
			page.appendChild(flow);
			flow.appendChild(block);
		}
	});

	// Page numbers — bottom right, outside the content flow.
	const songTitle = getSongTitle();
	const pageEls = pages.querySelectorAll<HTMLElement>('.print-page');
	const pageTotal = pageEls.length;
	pageEls.forEach((page, i) => {
		const num = document.createElement('div');
		num.classList.add('print-page-number');
		const pagination = `${i + 1}/${pageTotal}`;
		num.textContent = songTitle ? `${songTitle} (${pagination})` : pagination;
		Object.assign(num.style, {
			position: 'absolute',
			right: `${PAD}px`,
			bottom: `${PAD}px`,
			fontSize: '14px',
			fontFamily: 'sans-serif',
			color: '#999',
			lineHeight: '1',
		});
		page.appendChild(num);
	});

	// Hoist the pages to the document root so ancestor padding/indent can't
	// offset them, and drop the now-empty leftover containers.
	document.body.replaceChildren(pages);

	// Kill the browser's print margins so each red page fills the sheet 1:1
	// (print at 100% scale, "Headers and footers" off).
	const printStyle = document.createElement('style');
	printStyle.textContent = `
		@page { margin: 0; }
		@media print {
			html, body { margin: 0; }
			.print-page { margin: 0 auto !important; }
		}
	`;
	document.head.appendChild(printStyle);
})();
