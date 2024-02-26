import type { Props } from "../types/index.js";

interface PropConfigT {
	value: string;
	default: boolean;
	required: boolean;
}

const transformProps = (
	props?: Props,
	config?: Record<string, PropConfigT>,
): string => {
	if (!props) return "";

	return Object.keys(props || {})
		.map((key) => {
			const value = props[key];
			if (value !== undefined) return `${key}="${value}"`;
		})
		.join(" ");
};

export default transformProps;
