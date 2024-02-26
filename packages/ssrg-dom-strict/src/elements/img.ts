import type { ElementHandlerT } from "../types/index.js";
import transformProps from "../helpers/transform-props.js";

const img: ElementHandlerT = ({ props }) =>
	`<img ${transformProps(props, {
		loading: {
			value: "lazy",
			default: true,
			required: false,
		},
		alt: {
			value: "",
			default: true,
			required: true,
		},
	})} />`;

export default img;
