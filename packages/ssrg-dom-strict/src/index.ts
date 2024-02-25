type ElementType = "section" | "div" | "h1" | FC<Props> | "button";
type Props = Record<string, unknown> | null;
type Child = HTMLElement | Text | string | number | null | boolean | Child[];

export declare namespace JSX {
	interface IntrinsicElements {
		section: {
			class?: string;
		};
		h1: {
			class?: string;
		};
		div: {
			class?: string;
		};
		button: {
			class?: string;
			type: "button" | "submit" | "reset";
			ariaLabel: string;
		};
		[elemName: string]: {
			[key: string]: string;
		};
		// exclude default elements
		canvas: never;
	}
}

export type FC<P> = (props: P) => string | null;

const attributeLookup = {
	ariaLabel: "aria-label",
};

const transformProps = (props: Props): string => {
	if (!props) return "";

	return Object.keys(props || {})
		.map((key) => {
			const value = props[key];
			// @ts-ignore
			const attributeName = attributeLookup[key] || key;
			if (value !== undefined) return `${attributeName}="${value}"`;
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

export { createElement, Fragment };
