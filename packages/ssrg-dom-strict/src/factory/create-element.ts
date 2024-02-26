import type { ElementTag, Props, Children } from "../types/index.js";
import Fragment from "./fragment.js";
import transformProps from "../helpers/transform-props.js";

const createElement = (
	tag: ElementTag,
	props?: Props,
	...children: Children[]
): string | null => {
	if (tag === Fragment) {
		return children.join("");
	}
	if (typeof tag === "function") {
		if (props?.children) return tag(props);
		return tag({
			...props,
			children,
		});
	}

	const propsString = transformProps(props ?? null);

	const childrenString = children
		.map((child) => {
			if (Array.isArray(child)) return child.join("");
			if (typeof child === "string") return child;
			return String(child);
		})
		.join("");

	if (propsString === "") return `<${tag}>${childrenString}</${tag}>`;
	return `<${tag} ${propsString}>${childrenString}</${tag}>`;
};

export default createElement;
