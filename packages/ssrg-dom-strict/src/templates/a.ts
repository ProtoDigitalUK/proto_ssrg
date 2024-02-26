import type { TemplateFn } from "../types/index.d.js";

const a: TemplateFn = (props, children) => {
	return `<a ${props}>${children}</a>`;
};

export default a;
