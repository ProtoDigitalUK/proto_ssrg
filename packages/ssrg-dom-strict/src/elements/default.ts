import type { ElementHandlerT } from "../types/index.js";
import transformProps from "../helpers/transform-props.js";

export interface DefaultPropsT {
	class?: string;
	[key: string]: unknown;
}

const DefaultElement: ElementHandlerT = ({ children, props, tag }) =>
	`<${tag} ${transformProps({
		default: {},
		props: props,
		tag: tag,
	})}>${children}</${tag}>`;

export default DefaultElement;
