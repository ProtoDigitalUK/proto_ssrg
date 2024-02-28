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
// Aria Attributes
export type AriaRole =
	| "generic"
	| "toolbar"
	| "tooptip"
	| "feed"
	| "math"
	| "presentation"
	| "none"
	| "note"
	| "application"
	| "article"
	| "cell"
	| "columnheader"
	| "definition"
	| "directory"
	| "document"
	| "figure"
	| "group"
	| "heading"
	| "img"
	| "list"
	| "listitem"
	| "meter"
	| "row"
	| "rowgroup"
	| "rowheader"
	| "seperator"
	| "table"
	| "term"
	| "associationlist"
	| "associationlistitemkey"
	| "associationlistitemvalue"
	| "blockquote"
	| "caption"
	| "code"
	| "deletion"
	| "emphasis"
	| "insertion"
	| "paragraph"
	| "strong"
	| "subscript"
	| "superscript"
	| "time"
	| "scrollbar"
	| "searchbox"
	| "seperator"
	| "slider"
	| "spinbutton"
	| "switch"
	| "tab"
	| "tabpanel"
	| "treeitem"
	| "combobox"
	| "menu"
	| "menubar"
	| "tablist"
	| "tree"
	| "treegrid"
	| "banner"
	| "complementary"
	| "contentinfo"
	| "form"
	| "main"
	| "navigation"
	| "region"
	| "search"
	| "alert"
	| "log"
	| "marquee"
	| "status"
	| "timer"
	| "alertdialog"
	| "dialog";

// ------------------------------------------------
// Elements Types
export interface DefaultElement extends Partial<HTMLElement> {
	[key: string]: unknown;
}

export interface HtmlElement extends Omit<Partial<HTMLHtmlElement>, "role"> {
	lang: string;
	dir: string;
}
export interface BaseElement extends Omit<Partial<HTMLBaseElement>, "role"> {}
export interface HeadElement extends Omit<Partial<HTMLHeadElement>, "role"> {}
export interface LinkElement extends Omit<Partial<HTMLLinkElement>, "role"> {
	rel: string;
	href: string;
}
export interface MetaElement extends Omit<Partial<HTMLMetaElement>, "role"> {}
export interface StyleElement extends Omit<Partial<HTMLStyleElement>, "role"> {}
export interface TitleElement extends Omit<Partial<HTMLTitleElement>, "role"> {}
export interface BodyElement extends Omit<Partial<HTMLBodyElement>, "role"> {}
export interface AddressElement extends Partial<HTMLElement> {
	role?: AriaRole;
}
export interface ArticleElement extends Partial<HTMLElement> {
	role?:
		| "article"
		| "application"
		| "document"
		| "feed"
		| "main"
		| "none"
		| "presentation"
		| "region";
}
export interface AsideElement extends Partial<HTMLElement> {
	role?:
		| "complementary"
		| "feed"
		| "none"
		| "note"
		| "presentation"
		| "region"
		| "search";
}
export interface FooterElement extends Partial<HTMLElement> {
	role?: "contentinfo" | "generic" | "group" | "presentation" | "none";
}
export interface HeaderElement extends Partial<HTMLElement> {
	role?: "banner" | "generic" | "group" | "presentation" | "none";
}
export interface HeadingElement extends Partial<HTMLHeadingElement> {
	role?: "heading" | "tab" | "presentation" | "none";
}
export interface HgroupElement extends Partial<HTMLElement> {
	role?: AriaRole;
}
export interface MainElement extends Omit<Partial<HTMLElement>, "role"> {
	// Added to nudge you to add skip to content link - needs clearer guidance
	id: string;
}
export interface NavElement extends Omit<Partial<HTMLElement>, "role"> {}
export interface SectionElement extends Partial<HTMLElement> {
	role?:
		| "alert"
		| "alertdialog"
		| "application"
		| "banner"
		| "complementary"
		| "contentinfo"
		| "dialog"
		| "document"
		| "feed"
		| "log"
		| "main"
		| "marquee"
		| "navigation"
		| "none"
		| "note"
		| "presentation"
		| "search"
		| "status"
		| "tabpanel";
}
export interface SearchElement extends Partial<HTMLElement> {
	role?: "form" | "group" | "none" | "presentation" | "region" | "search";
}
export interface BlockkQuoteElement extends Partial<HTMLQuoteElement> {
	cite: string;
	role?: ArialRole;
}
export interface DDElement extends Ommit<Partial<HTMLElement>, "role"> {}
export interface DivElement extends Partial<HTMLDivElement> {
	role?: AriaRole;
}

// ------------------------------------------------
// JSX
export declare namespace JSX {
	interface IntrinsicElements {
		// catch all & web component support
		[ele: string]: DefaultElement;
		// Document Metadata
		html: HtmlElement;
		base: BaseElement;
		head: HeadElement;
		link: LinkElement;
		meta: MetaElement;
		style: StyleElement;
		title: TitleElement;
		// Sectioning root
		body: BodyElement;
		// Content sectioning
		address: AddressElement;
		article: ArticleElement;
		aside: AsideElement;
		footer: FooterElement;
		header: HeaderElement;
		h1: HeadingElement;
		h2: HeadingElement;
		h3: HeadingElement;
		h4: HeadingElement;
		h5: HeadingElement;
		h6: HeadingElement;
		hgroup: HgroupElement;
		main: MainElement;
		nav: NavElement;
		section: SectionElement;
		search: SearchElement;
		// Text content
		blockquote: BlockkQuoteElement;
		dd: DDElement;
		div: DivElement;

		button: {
			class?: string;
			type: "button" | "submit" | "reset";
			"aria-label": string;
			[key: string]: string;
		};
		img: {
			src: string;
			alt: string;
		};
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
