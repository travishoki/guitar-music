/* global document */
import React, { useEffect } from 'react';

import { createPortal } from 'react-dom';

import SvgClose from '~svg/SvgClose';

// A centered modal over a dim backdrop. Closes on backdrop click, the close
// button, or Escape. Rendered through a portal so it isn't trapped inside a
// stacking context (e.g. the sticky top nav) and can cover the whole page.
const Modal = ({ children, onClose, title }: ModalTypes) => {
	useEffect(() => {
		const onKeyDown = (event: KeyboardEvent) => {
			if (event.key === 'Escape') onClose();
		};

		window.addEventListener('keydown', onKeyDown);

		return () => window.removeEventListener('keydown', onKeyDown);
	}, [onClose]);

	return createPortal(
		<div className="modal-overlay" onClick={onClose}>
			<div className="modal-panel" onClick={(event) => event.stopPropagation()}>
				<button
					aria-label="Close"
					className="modal-close"
					onClick={onClose}
					type="button"
				>
					<SvgClose />
				</button>
				{title && <p className="modal-title">{title}</p>}
				{children}
			</div>
		</div>,
		document.body,
	);
};

type ModalTypes = {
	children: React.ReactNode;
	onClose: () => void;
	title?: string;
};

export default Modal;
