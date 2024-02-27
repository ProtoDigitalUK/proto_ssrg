import type { ElementTag, Props, Children, JSX, FC } from "./types/index.js";
import type {
	ContentCategories,
	ElementsConfigT,
} from "./constants/elements-config.js";
import createElement from "./factory/create-element.js";
import Fragment from "./factory/fragment.js";

export {
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
