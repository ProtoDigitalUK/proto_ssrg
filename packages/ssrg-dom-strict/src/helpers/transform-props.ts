import type { Props, JSX } from "../types/index.js";

const transformProps = (data: {
	default?: Props;
	props?: Props;
	required?: string[];
	tag: keyof JSX.IntrinsicElements;
}): string => {
	const props = {
		...data.default,
		...data.props,
	};

	if (data.required && data.props) {
		for (const key of data.required) {
			if (data.props[key] === undefined) {
				throw new Error(`"${key}" is required for <${data.tag}>`);
			}
		}
	}

	return Object.keys(props || {})
		.map((key) => {
			const value = props[key];
			if (value !== undefined) return `${key}="${value}"`;
		})
		.join(" ");
};

export default transformProps;
