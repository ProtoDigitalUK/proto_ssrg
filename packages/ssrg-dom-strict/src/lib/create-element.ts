import type { ElementTag, Props, Children } from "../types/index.js";
import Fragment from "./fragment.js";
import renderElement from "../helpers/render-element.js";

const createElement = (
	tag: ElementTag,
	props?: Props,
	...children: Children[]
): string | null => {
	try {
		// Stringify children
		const childrenStr = children
			.map((child) => {
				if (Array.isArray(child)) return child.join("");
				if (child === undefined) return "";
				if (typeof child === "string") return child;
				return String(child);
			})
			.join("");

		// If tag is Fragment, return children
		if (tag === Fragment) return childrenStr;

		// If tag is a function, call it (another component)
		if (typeof tag === "function")
			return props?.children ? tag(props) : tag({ ...props, children });

		// Parse the element based on the tag
		return renderElement({
			children: childrenStr,
			props,
			tag,
		});
	} catch (e) {
		const error = e as Error;
		const red = "\x1b[31m";
		const reset = "\x1b[0m";
		console.error(`${red}Error: ${error.message}${reset}\n${error.stack}`);
		return null;
	}
};

export default createElement;
