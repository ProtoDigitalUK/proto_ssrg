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
export interface DdElement extends Ommit<Partial<HTMLElement>, "role"> {}
export interface DivElement extends Partial<HTMLDivElement> {
	role?: AriaRole;
}
export interface DlElement extends Partial<HTMLDListElement> {
	role?: "group" | "list" | "none" | "presentation";
}
export interface DtElement extends Partial<HTMLElement> {
	role?: "listitem";
}
export interface FigCaptionElement extends Partial<HTMLElement> {
	role?: "group" | "none" | "presentation";
}
export interface FigureElement extends Partial<HTMLElement> {
	role?: AriaRole;
}
export interface HrElement extends Partial<HTMLHRElement> {
	role?: "seperator" | "presentation" | "none";
}
export interface LiElement extends Partial<HTMLLIElement> {
	value?: number;
	role?:
		| "listitem"
		| "menuitem"
		| "menuitemcheckbox"
		| "menuitemradio"
		| "option"
		| "none"
		| "presentation"
		| "radio"
		| "separator"
		| "tab"
		| "treeitem";
}
export interface MenuElement extends Partial<HTMLMenuElement> {
	role?:
		| "list"
		| "directory"
		| "group"
		| "listbox"
		| "menu"
		| "menubar"
		| "none"
		| "presentation"
		| "radiogroup"
		| "tablist"
		| "toolbar"
		| "tree";
}
export interface OlElement extends Partial<HTMLOListElement> {
	reversed?: boolean;
	start?: number;
	type?: "1" | "a" | "A" | "i" | "I";
	role?:
		| "list"
		| "directory"
		| "group"
		| "listbox"
		| "menu"
		| "menubar"
		| "none"
		| "presentation"
		| "radiogroup"
		| "tablist"
		| "toolbar"
		| "tree";
}
export interface PElement extends Partial<HTMLParagraphElement> {
	role?: AriaRole;
}
export interface PreElement extends Partial<HTMLPreElement> {
	role?: AriaRole;
}
export interface UlElement extends Partial<HTMLUListElement> {
	role?:
		| "list"
		| "directory"
		| "group"
		| "listbox"
		| "menu"
		| "menubar"
		| "none"
		| "presentation"
		| "radiogroup"
		| "tablist"
		| "toolbar"
		| "tree";
}
export interface AElement extends Partial<HTMLAnchorElement> {
	href: string;
	target: "_blank" | "_self" | "_parent" | "_top";
	// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#security_and_privacy
	rel: string;
	download?: string;
	hreflang?: string;
	ping?: string;
	referrerpolicy?:
		| "no-referrer"
		| "no-referrer-when-downgrade"
		| "origin"
		| "origin-when-cross-origin"
		| "same-origin"
		| "strict-origin"
		| "strict-origin-when-cross-origin"
		| "unsafe-url";
	type?: string;
	role?:
		| "link"
		| "button"
		| "checkbox"
		| "menuitem"
		| "menuitemcheckbox"
		| "menuitemradio"
		| "option"
		| "radio"
		| "switch"
		| "tab"
		| "treeitem";
}
export interface AbbrElement extends Partial<HTMLElement> {
	/**
	 * Adding a title attribute lets you provide an expansion or definition.
	 */
	title: string;
	role?: AriaRole;
}
export interface BdiElement extends Partial<HTMLElement> {
	role?: AriaRole;
}
export interface BdoElement extends Partial<HTMLElement> {
	dir: "ltr" | "rtl";
	role?: AriaRole;
}
export interface BrElement extends Partial<HTMLBRElement> {
	role?: "none" | "presentation";
}
export interface CiteElement extends Partial<HTMLElement> {
	role?: AriaRole;
}
export interface DataElement extends Partial<HTMLElement> {
	value: string;
	role?: AriaRole;
}
export interface DfnElement extends Partial<HTMLElement> {
	title?: string;
	role?: AriaRole;
}
export interface EmElement extends Partial<HTMLElement> {
	role?: AriaRole;
}
export interface IElement extends Partial<HTMLElement> {
	role?: AriaRole;
}
export interface KbdElement extends Partial<HTMLElement> {
	role?: AriaRole;
}
export interface MarkElement extends Partial<HTMLElement> {
	role?: AriaRole;
}
export interface QElement extends Partial<HTMLQuoteElement> {
	cite: string;
	role?: AriaRole;
}
export interface RpElement extends Partial<HTMLElement> {
	role?: AriaRole;
}
export interface RtElement extends Partial<HTMLElement> {
	role?: AriaRole;
}
export interface RubyElement extends Partial<HTMLElement> {
	role?: AriaRole;
}
export interface SElement extends Partial<HTMLElement> {
	role?: AriaRole;
}
export interface SampElement extends Partial<HTMLElement> {
	role?: AriaRole;
}
export interface SmallElement extends Partial<HTMLElement> {
	role?: AriaRole;
}
export interface SpanElement extends Partial<HTMLSpanElement> {
	role?: AriaRole;
}
export interface StrongElement extends Partial<HTMLElement> {
	role?: AriaRole;
}
export interface SubElement extends Partial<HTMLElement> {
	role?: AriaRole;
}
export interface SupElement extends Partial<HTMLElement> {
	role?: AriaRole;
}
export interface TimeElement extends Partial<HTMLElement> {
	datetime: string;
	role?: AriaRole;
}
export interface UElement extends Partial<HTMLElement> {
	role?: AriaRole;
}
export interface VarElement extends Partial<HTMLElement> {
	role?: AriaRole;
}
export interface WbrElement extends Partial<HTMLElement> {
	role?: AriaRole;
}
export interface AreaElement extends Ommit<Partial<HTMLAreaElement>, "role"> {
	alt: AElement["alt"];
	coords: string;
	download?: AElement["download"];
	href: AElement["href"];
	hreflang?: AElement["hreflang"];
	ping?: AElement["ping"];
	referrerpolicy?: AElement["referrerpolicy"];
	rel: AElement["rel"];
	shape: "rect" | "circle" | "poly" | "default";
	target: AElement["target"];
}
export interface AudioElement extends Partial<HTMLAudioElement> {
	autoplay?: boolean;
	controls?: boolean;
	controlslist?: "nodownload" | "nofullscreen" | "noremoteplayback";
	crossorigin?: "anonymous" | "use-credentials";
	disableremoteplayback?: boolean;
	loop?: boolean;
	muted?: boolean;
	preload?: "none" | "metadata" | "auto";
	src?: string;
	role?: "application";
}
export interface ImgElement extends Partial<HTMLImageElement> {
	alt: string;
	loading: "lazy" | "eager" | "auto";
	src: string;
	crossorigin?: "anonymous" | "use-credentials";
	decoding?: "sync" | "async" | "auto";
	elementtiming?: string;
	fetchpriority?: "auto" | "high" | "low";
	height: number;
	width: number;
	ismap?: boolean;
	usemap?: string;
	referrerpolicy?:
		| "no-referrer"
		| "no-referrer-when-downgrade"
		| "origin"
		| "origin-when-cross-origin"
		| "same-origin"
		| "strict-origin"
		| "strict-origin-when-cross-origin"
		| "unsafe-url";
	sizes?: string;
	srcset?: string;
	roles?:
		| "img"
		| "presentation"
		| "button"
		| "checkbox"
		| "link"
		| "menuitem"
		| "menuitemcheckbox"
		| "menuitemradio"
		| "option"
		| "progressbar"
		| "scrollbar"
		| "separator"
		| "slider"
		| "switch"
		| "tab"
		| "treeitem"
		| "none";
}
export interface MapElement extends Ommit<Partial<HTMLMapElement>, "role"> {
	name: string;
}
export interface TrackElement extends Ommit<Partial<HTMLTrackElement>, "role"> {
	default?: boolean;
	kind: "subtitles" | "captions" | "descriptions" | "chapters" | "metadata";
	label?: string;
	src: string;
	srclang: string;
}
export interface VideoElement extends Partial<HTMLVideoElement> {
	autoplay?: boolean;
	controls?: boolean;
	controlslist?: "nodownload" | "nofullscreen" | "noremoteplayback";
	crossorigin?: "anonymous" | "use-credentials";
	disablepictureinpicture?: boolean;
	disableremoteplayback?: boolean;
	height: number;
	loop?: boolean;
	muted?: boolean;
	playsinline?: boolean;
	poster: string;
	preload?: "none" | "metadata" | "auto";
	src?: string;
	width: number;
	role?: "application";
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
		dd: DdElement;
		div: DivElement;
		dl: DlElement;
		dt: DtElement;
		figcaption: FigCaptionElement;
		figure: FigureElement;
		hr: HrElement;
		li: LiElement;
		menu: MenuElement;
		ol: OlElement;
		p: PElement;
		pre: PreElement;
		ul: UlElement;
		// Inline text semantics
		a: AElement;
		abbr: AbbrElement;
		bdi: BdiElement;
		bdo: BdoElement;
		br: BrElement;
		cite: CiteElement;
		data: DataElement;
		dfn: DfnElement;
		em: EmElement;
		i: IElement;
		kbd: KbdElement;
		mark: MarkElement;
		q: QElement;
		rp: RpElement;
		rt: RtElement;
		ruby: RubyElement;
		s: SElement;
		samp: SampElement;
		small: SmallElement;
		span: SpanElement;
		strong: StrongElement;
		sub: SubElement;
		sup: SupElement;
		time: TimeElement;
		u: UElement;
		var: VarElement;
		wbr: WbrElement;
		// Image and multimedia
		area: AreaElement;
		audio: AudioElement;
		img: ImgElement;
		map: MapElement;
		track: TrackElement;
		video: VideoElement;
		// Embedded content
		button: {
			class?: string;
			type: "button" | "submit" | "reset";
			"aria-label": string;
			[key: string]: string;
		};
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
