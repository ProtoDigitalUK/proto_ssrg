import type { ElementHandlerT } from "../types/index.js";
import transformProps from "../helpers/transform-props.js";

const defaultEle: ElementHandlerT = ({ children, props, tag }) =>
	`<${tag} ${transformProps(props)}>${children}</${tag}>`;

export default defaultEle;
