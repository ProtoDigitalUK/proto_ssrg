export type FC<P = {}> = (props?: P) => string | null;

export type ElementTag = FC<Props> | keyof JSX.IntrinsicElements;
export type Props = Record<string, unknown> | null;
export type Children =
	| string
	| number
	| null
	| boolean
	| undefined
	| Children[];

export interface DefaultPropsT {
	class?: string;
	[key: string]: unknown;
}
export interface ImgPropsT extends DefaultPropsT {
	src: string;
	alt: string;
	loading?: "lazy" | "eager" | "auto";
}

export declare namespace JSX {
	interface IntrinsicElements {
		// catch all & web component support
		[ele: string]: DefaultPropsT;
		// strict elements
		html: {
			lang: string;
			dir: string;
		};
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
			"aria-label": string;
			[key: string]: string;
		};
		img: ImgElement;
		a: {
			class?: string;
			href: string;
			target: string;
			rel: string;
		};
		span: {
			class?: string;
		};
		// custom elements
		// depreciated elements
		acronym: never;
		big: never;
		center: never;
		dir: never;
		font: never;
		frame: never;
		frameset: never;
		image: never;
		marquee: never;
		menuitem: never;
		nobr: never;
		noembed: never;
		noframes: never;
		param: never;
		plaintext: never;
		rb: never;
		rtc: never;
		strike: never;
		tt: never;
		xmp: never;
		// elements we dont want to support
	}
}

export type ElementHandlerT = (config: {
	children?: string;
	props?: Props;
	tag: keyof JSX.IntrinsicElements;
}) => string;
