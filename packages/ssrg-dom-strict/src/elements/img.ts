import type { ElementHandlerT } from "../types/index.js";
import type { DefaultPropsT } from "./default.js";
import transformProps from "../helpers/transform-props.js";

export interface ImgPropsT extends DefaultPropsT {
	src: string;
	alt: string;
	loading?: "lazy" | "eager" | "auto";
}

const img: ElementHandlerT = ({ props }) =>
	`<img ${transformProps({
		default: {
			loading: "lazy",
			alt: "",
		},
		props: props,
		required: ["alt"],
		tag: "img",
	})} />`;

export default img;
