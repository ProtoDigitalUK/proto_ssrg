import type { ElementType, Props, Child, JSX, FC } from "./types/index.js";

const transformProps = (props: Props): string => {
	if (!props) return "";

	return Object.keys(props || {})
		.map((key) => {
			const value = props[key];
			if (value !== undefined) return `${key}="${value}"`;
		})
		.join(" ");
};

const createElement = (
	type: ElementType,
	props?: Props,
	...children: Child[]
): string | null => {
	if (type === Fragment) {
		return children.join("");
	}

	const propsString = transformProps(props ?? null);

	const childrenString = children
		.map((child) => (typeof child === "string" ? child : String(child)))
		.join("");

	if (typeof type === "function") {
		return type(props || {});
	}

	return `<${type} ${propsString}>${childrenString}</${type}>`;
};

const Fragment = {};

export { createElement, Fragment, ElementType, Props, Child, JSX, FC };
