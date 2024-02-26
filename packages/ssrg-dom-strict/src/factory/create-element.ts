import type { ElementTag, Props, Child } from "../types/index.js";
import Fragment from "./fragment.js";
import transformProps from "../helpers/transform-props.js";

const createElement = (
	tag: ElementTag,
	props?: Props,
	...children: Child[]
): string | null => {
	if (tag === Fragment) {
		return children.join("");
	}
	if (typeof tag === "function") {
		return tag({
			...props,
			children,
		});
	}

	const propsString = transformProps(props ?? null);

	const childrenString = children
		.map((child) => (typeof child === "string" ? child : String(child)))
		.join("");

	if (propsString === "") return `<${tag}>${childrenString}</${tag}>`;
	return `<${tag} ${propsString}>${childrenString}</${tag}>`;
};

export default createElement;
