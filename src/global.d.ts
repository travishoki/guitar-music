// Allow importing stylesheet side-effect modules (e.g. `import './styles/index.less'`)
// which have no runtime bindings, so TypeScript does not report them as missing modules.
declare module '*.less';
declare module '*.css';
