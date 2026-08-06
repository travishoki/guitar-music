// Allow importing stylesheet side-effect modules (e.g. `import './styles/index.less'`)
// which have no runtime bindings, so TypeScript does not report them as missing modules.
declare module '*.less';
declare module '*.css';

declare module '*.png' {
	const src: string;
	export default src;
}

// Augment the Node `require` typing with webpack's `require.context`, used to
// glob a directory of assets at build time.
interface NodeRequire {
	context(
		directory: string,
		useSubdirectories?: boolean,
		regExp?: RegExp,
	): {
		keys(): string[];
		<T = { default: string }>(id: string): T;
	};
}
