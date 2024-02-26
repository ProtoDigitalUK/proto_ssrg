import type { RenderFn } from "../types/index.d.js";
import templates from "../templates/index.js";

const render: RenderFn = (tag, props, children) => {
	switch (tag) {
		case "body":
			return templates.body(props, children);
		case "a":
			return templates.a(props, children);
		default: {
			return `<${tag} ${props}>${children}</${tag}>`;
		}
	}
};

export default render;
