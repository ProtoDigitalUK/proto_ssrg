import type { Props, JSX } from "../types/index.js";
import elementsConfig, { defaultConfig } from "../constants/elements-config.js";
import transformProps from "./transform-props.js";

const renderElement = (config: {
	children?: string;
	props?: Props;
	tag: keyof JSX.IntrinsicElements;
}): string => {
	const elemConfig = elementsConfig[config.tag] ?? defaultConfig;

	if (!elemConfig.enabled) {
		throw new Error(`Element <${config.tag}> is not supported`);
	}

	if (elemConfig.selfClosing) {
		return `<${config.tag} ${transformProps({
			default: elemConfig.attributes?.default,
			required: elemConfig.attributes?.required,
			props: config.props ?? {},
			tag: config.tag,
		})} />`;
	}

	return `<${config.tag} ${transformProps({
		default: elemConfig.attributes?.default,
		required: elemConfig.attributes?.required,
		props: config.props ?? {},
		tag: config.tag,
	})}>${config.children}</${config.tag}>`;
};

export default renderElement;
