import type { TemplateFn } from "../types/index.d.js";

const body: TemplateFn = (props, children) => {
	return `<body ${props}><a href="#content">Skip to main content</a>${children}</body>`;
};

export default body;
