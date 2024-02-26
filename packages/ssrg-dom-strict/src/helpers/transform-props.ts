import type { Props } from "../types/index.js";

const transformProps = (props: Props): string => {
	if (!props) return "";

	return Object.keys(props || {})
		.map((key) => {
			const value = props[key];
			if (value !== undefined) return `${key}="${value}"`;
		})
		.join(" ");
};

export default transformProps;
