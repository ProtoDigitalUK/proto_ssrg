export type FC<P = Record<unknown, unknown>> = (props?: P) => string | null;

export type ElementTag = FC<Props> | keyof JSX.IntrinsicElements;
export type Props = Record<string, unknown> | null;
export type Children =
	| string
	| number
	| null
	| boolean
	| undefined
	| Children[];

// ------------------------------------------------
// Elements Types
export interface DefaultElement extends Partial<HTMLElement> {
	[key: string]: unknown;
}
export interface ImgElement extends Partial<HTMLImageElement> {
	src: ImgElement["src"];
	alt: ImgElement["alt"];
}
export interface HtmlElement extends Partial<HTMLHtmlElement> {
	lang: HTMLPropsT["lang"];
	dir: HTMLPropsT["dir"];
}
export interface HeadElement extends Partial<HTMLHeadElement> {}
export interface LinkElement extends Partial<HTMLLinkElement> {
	rel: LinkPropsT["rel"];
	href: LinkPropsT["href"];
}
export interface MetaElement extends Partial<HTMLMetaElement> {}
export interface StyleElement extends Partial<HTMLStyleElement> {}
export interface TitleElement extends Partial<HTMLTitleElement> {}
export interface BodyElement extends Partial<HTMLBodyElement> {}
export interface AddressElement extends Partial<HTMLBodyElement> {}
// TODO: Add the rest of the elements

// ------------------------------------------------
// JSX
export declare namespace JSX {
	interface IntrinsicElements {
		// catch all & web component support
		[ele: string]: DefaultElement;
		// Document Metadata
		html: HtmlElement;
		head: HeadElement;
		link: LinkElement;
		meta: MetaElement;
		style: StyleElement;
		title: TitleElement;
		// Sectioning root
		body: BodyElement;
		// Content sectioning

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
		base: never;
	}
}

export type ElementHandlerT = (config: {
	children?: string;
	props?: Props;
	tag: keyof JSX.IntrinsicElements;
}) => string;
