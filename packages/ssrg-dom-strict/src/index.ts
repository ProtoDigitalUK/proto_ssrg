import "dotenv/config";
import type { ElementTag, Props, Children, JSX, FC } from "./types/index.js";
import type {
	ContentCategories,
	ElementsConfigT,
} from "./constants/elements-config.js";
import createElement from "./lib/create-element.js";
import Fragment from "./lib/fragment.js";
import renderToString from "./lib/render-to-string.js";

export {
	renderToString,
	createElement,
	Fragment,
	ElementTag,
	Props,
	Children,
	JSX,
	FC,
	ContentCategories,
	ElementsConfigT,
};

export default {
	renderToString,
	createElement,
	Fragment,
};
