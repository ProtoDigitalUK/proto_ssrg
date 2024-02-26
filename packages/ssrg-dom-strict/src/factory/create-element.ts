import type { ElementTag, Props, Children } from "../types/index.js";
import Fragment from "./fragment.js";
import elements from "../elements/index.js";

const createElement = (
	tag: ElementTag,
	props?: Props,
	...children: Children[]
): string | null => {
	// Stringify children
	const childrenStr = children
		.map((child) => {
			if (Array.isArray(child)) return child.join("");
			if (typeof child === "string") return child;
			return String(child);
		})
		.join("");

	// If tag is Fragment, return children
	if (tag === Fragment) return childrenStr;

	// If tag is a function, call it (another component)
	if (typeof tag === "function")
		return props?.children ? tag(props) : tag({ ...props, children });

	const elementConfig = {
		children: childrenStr,
		props,
		tag,
	};

	// Parse the element based on the tag
	switch (tag) {
		case "img":
			return elements.img(elementConfig);
		default: {
			return elements.default(elementConfig);
		}
	}
};

export default createElement;
