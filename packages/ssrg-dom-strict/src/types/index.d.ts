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
// Attributes
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
export type ReferrerPolicy =
	| "no-referrer"
	| "no-referrer-when-downgrade"
	| "origin"
	| "origin-when-cross-origin"
	| "same-origin"
	| "strict-origin"
	| "strict-origin-when-cross-origin"
	| "unsafe-url";

// ------------------------------------------------
// Elements Types
export interface DefaultElement extends Partial<HTMLElement> {
	[key: string]: unknown;
}

export interface HtmlElement
	extends Omit<Partial<HTMLHtmlElement>, "role" | "manifest" | "version"> {
	lang: string;
	dir: string;
	xmlns?: string;
	[key: string]: unknown;
}
export interface BaseElement extends Omit<Partial<HTMLBaseElement>, "role"> {
	href?: string;
	target?: "_blank" | "_self" | "_parent" | "_top";
	[key: string]: unknown;
}
export interface HeadElement
	extends Omit<Partial<HTMLHeadElement>, "role" | "profile"> {
	[key: string]: unknown;
}
export interface LinkElement
	extends Omit<
		Partial<HTMLLinkElement>,
		| "role"
		| "blocking"
		| "disabled"
		| "methods"
		| "target"
		| "charset"
		| "rev"
	> {
	rel?: string;
	href?: string;
	as?: string;
	crossorigin?: "anonymous" | "use-credentials";
	fetchpriority?: "auto" | "high" | "low";
	hreflang?: string;
	imagesizes?: string;
	imagesrcset?: string;
	integrity?: string;
	media?: string;
	referrerpolicy?: ReferrerPolicy;
	sizes?: string;
	title?: string;
	type?: string;
	[key: string]: unknown;
}
export interface MetaElement extends Omit<Partial<HTMLMetaElement>, "role"> {
	charset?: string;
	content?: string;
	"http-equiv"?:
		| "content-security-policy"
		| "content-type"
		| "default-style"
		| "x-ua-compatible"
		| "refresh";
	name?: string;
	[key: string]: unknown;
}
export interface StyleElement
	extends Omit<Partial<HTMLStyleElement>, "role" | "blocking" | "type"> {
	media?: string;
	nonce?: string;
	title?: string;
	[key: string]: unknown;
}
export interface TitleElement extends Omit<Partial<HTMLTitleElement>, "role"> {
	[key: string]: unknown;
}
export interface BodyElement
	extends Omit<
		Partial<HTMLBodyElement>,
		| "role"
		| "alink"
		| "background"
		| "bgcolor"
		| "bottommargin"
		| "leftmargin"
		| "link"
		| "rightmargin"
		| "text"
		| "topmargin"
		| "vlink"
	> {
	[key: string]: unknown;
}
export interface AddressElement extends Partial<HTMLElement> {
	role?: AriaRole;
	[key: string]: unknown;
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
	[key: string]: unknown;
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
	[key: string]: unknown;
}
export interface FooterElement extends Partial<HTMLElement> {
	role?: "contentinfo" | "generic" | "group" | "presentation" | "none";
	[key: string]: unknown;
}
export interface HeaderElement extends Partial<HTMLElement> {
	role?: "banner" | "generic" | "group" | "presentation" | "none";
	[key: string]: unknown;
}
export interface HeadingElement extends Partial<HTMLHeadingElement> {
	role?: "heading" | "tab" | "presentation" | "none";
	[key: string]: unknown;
}
export interface HgroupElement extends Partial<HTMLElement> {
	role?: AriaRole;
	[key: string]: unknown;
}
export interface MainElement extends Omit<Partial<HTMLElement>, "role"> {
	id?: string;
	[key: string]: unknown;
}
export interface NavElement extends Omit<Partial<HTMLElement>, "role"> {
	[key: string]: unknown;
}
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
	[key: string]: unknown;
}
export interface SearchElement extends Partial<HTMLElement> {
	role?: "form" | "group" | "none" | "presentation" | "region" | "search";
	[key: string]: unknown;
}
export interface BlockkQuoteElement extends Partial<HTMLQuoteElement> {
	cite: string;
	role?: AriaRole;
	[key: string]: unknown;
}
export interface DdElement extends Omit<Partial<HTMLElement>, "role"> {
	[key: string]: unknown;
}
export interface DivElement extends Partial<HTMLDivElement> {
	role?: AriaRole;
	[key: string]: unknown;
}
export interface DlElement extends Partial<HTMLDListElement> {
	role?: "group" | "list" | "none" | "presentation";
	[key: string]: unknown;
}
export interface DtElement extends Partial<HTMLElement> {
	role?: "listitem";
	[key: string]: unknown;
}
export interface FigCaptionElement extends Partial<HTMLElement> {
	role?: "group" | "none" | "presentation";
	[key: string]: unknown;
}
export interface FigureElement extends Partial<HTMLElement> {
	role?: AriaRole;
	[key: string]: unknown;
}
export interface HrElement extends Partial<HTMLHRElement> {
	role?: "seperator" | "presentation" | "none";
	[key: string]: unknown;
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
	[key: string]: unknown;
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
	[key: string]: unknown;
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
	[key: string]: unknown;
}
export interface PElement extends Partial<HTMLParagraphElement> {
	role?: AriaRole;
	[key: string]: unknown;
}
export interface PreElement extends Partial<HTMLPreElement> {
	role?: AriaRole;
	[key: string]: unknown;
}
export interface UlElement
	extends Omit<Partial<HTMLUListElement>, "compact" | "type"> {
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
	[key: string]: unknown;
}
export interface AElement
	extends Omit<
		Partial<HTMLAnchorElement>,
		"charset" | "coords" | "name" | "rev" | "shape"
	> {
	href: string;
	target: "_blank" | "_self" | "_parent" | "_top";
	rel?: string;
	download?: string;
	hreflang?: string;
	ping?: string;
	referrerpolicy?: ReferrerPolicy;
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
	[key: string]: unknown;
}
export interface AbbrElement extends Partial<HTMLElement> {
	/**
	 * Adding a title attribute lets you provide an expansion or definition.
	 */
	title: string;
	role?: AriaRole;
	[key: string]: unknown;
}
export interface BdiElement extends Partial<HTMLElement> {
	role?: AriaRole;
	[key: string]: unknown;
}
export interface BdoElement extends Partial<HTMLElement> {
	dir: "ltr" | "rtl";
	role?: AriaRole;
	[key: string]: unknown;
}
export interface BrElement extends Partial<HTMLBRElement> {
	role?: "none" | "presentation";
	[key: string]: unknown;
}
export interface CiteElement extends Partial<HTMLElement> {
	role?: AriaRole;
	[key: string]: unknown;
}
export interface DataElement extends Partial<HTMLElement> {
	value: string;
	role?: AriaRole;
	[key: string]: unknown;
}
export interface DfnElement extends Partial<HTMLElement> {
	title?: string;
	role?: AriaRole;
	[key: string]: unknown;
}
export interface EmElement extends Partial<HTMLElement> {
	role?: AriaRole;
	[key: string]: unknown;
}
export interface IElement extends Partial<HTMLElement> {
	role?: AriaRole;
	[key: string]: unknown;
}
export interface KbdElement extends Partial<HTMLElement> {
	role?: AriaRole;
	[key: string]: unknown;
}
export interface MarkElement extends Partial<HTMLElement> {
	role?: AriaRole;
	[key: string]: unknown;
}
export interface QElement extends Partial<HTMLQuoteElement> {
	cite: string;
	role?: AriaRole;
	[key: string]: unknown;
}
export interface RpElement extends Partial<HTMLElement> {
	role?: AriaRole;
	[key: string]: unknown;
}
export interface RtElement extends Partial<HTMLElement> {
	role?: AriaRole;
	[key: string]: unknown;
}
export interface RubyElement extends Partial<HTMLElement> {
	role?: AriaRole;
	[key: string]: unknown;
}
export interface SElement extends Partial<HTMLElement> {
	role?: AriaRole;
	[key: string]: unknown;
}
export interface SampElement extends Partial<HTMLElement> {
	role?: AriaRole;
	[key: string]: unknown;
}
export interface SmallElement extends Partial<HTMLElement> {
	role?: AriaRole;
	[key: string]: unknown;
}
export interface SpanElement extends Partial<HTMLSpanElement> {
	role?: AriaRole;
	[key: string]: unknown;
}
export interface StrongElement extends Partial<HTMLElement> {
	role?: AriaRole;
	[key: string]: unknown;
}
export interface SubElement extends Partial<HTMLElement> {
	role?: AriaRole;
	[key: string]: unknown;
}
export interface SupElement extends Partial<HTMLElement> {
	role?: AriaRole;
	[key: string]: unknown;
}
export interface TimeElement extends Partial<HTMLElement> {
	datetime: string;
	role?: AriaRole;
	[key: string]: unknown;
}
export interface UElement extends Partial<HTMLElement> {
	role?: AriaRole;
	[key: string]: unknown;
}
export interface VarElement extends Partial<HTMLElement> {
	role?: AriaRole;
	[key: string]: unknown;
}
export interface WbrElement extends Partial<HTMLElement> {
	role?: AriaRole;
	[key: string]: unknown;
}
export interface AreaElement extends Omit<Partial<HTMLAreaElement>, "role"> {
	alt: string;
	coords: string;
	download?: string;
	href: string;
	hreflang?: string;
	ping?: string;
	referrerpolicy?: ReferrerPolicy;
	rel?: string;
	shape: "rect" | "circle" | "poly" | "default";
	target: "_blank" | "_self" | "_parent" | "_top";
	[key: string]: unknown;
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
	[key: string]: unknown;
}
export interface ImgElement
	extends Omit<
		Partial<HTMLImageElement>,
		"align" | "border" | "hspace" | "longdesc" | "name" | "vspace"
	> {
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
	referrerpolicy?: ReferrerPolicy;
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
	[key: string]: unknown;
}
export interface MapElement extends Omit<Partial<HTMLMapElement>, "role"> {
	name: string;
	[key: string]: unknown;
}
export interface TrackElement extends Omit<Partial<HTMLTrackElement>, "role"> {
	default?: boolean;
	kind: "subtitles" | "captions" | "descriptions" | "chapters" | "metadata";
	label?: string;
	src: string;
	srclang: string;
	[key: string]: unknown;
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
	[key: string]: unknown;
}
export interface IframeElement extends Partial<HTMLIFrameElement> {
	title: string;
	src: string;
	height?: number;
	width?: number;
	loading?: "lazy" | "eager";
	name?: string;
	referrerpolicy?: ReferrerPolicy;
	sandbox?:
		| "allow-downloads"
		| "allow-forms"
		| "allow-modals"
		| "allow-orientation-lock"
		| "allow-pointer-lock"
		| "allow-popups"
		| "allow-popups-to-escape-sandbox"
		| "allow-presentation"
		| "allow-same-origin"
		| "allow-scripts"
		| "allow-top-navigation"
		| "allow-top-navigation-by-user-activation"
		| "allow-top-navigation-to-custom-protocols";
	srcdoc?: string;
	role?: "application" | "document" | "img" | "none" | "presentation";
	[key: string]: unknown;
}
export interface ObjectElement extends Partial<HTMLObjectElement> {
	data: string;
	form?: string;
	height?: number;
	name?: string;
	type?: string;
	width?: number;
	roles?: "application" | "document" | "img";
	[key: string]: unknown;
}
export interface PictureElement
	extends Omit<Partial<HTMLPictureElement>, "role"> {
	[key: string]: unknown;
}
export interface SourceElement
	extends Omit<Partial<HTMLSourceElement>, "role"> {
	type?: string;
	src: string;
	srcset?: string;
	sizes?: string;
	media?: string;
	height?: number;
	width?: number;
	[key: string]: unknown;
}
export interface SVGElement extends Partial<HTMLOrSVGElement> {
	role?: "img" | "presentation" | "none";
	height?: number;
	preserveAspectRatio?: string;
	viewBox?: string;
	width?: number;
	x?: number;
	y?: number;
	[key: string]: unknown;
}
export interface MathElement extends Omit<Partial<HTMLElement>, "role"> {
	display: "block" | "inline";
	[key: string]: unknown;
}
export interface CanvasElement extends Partial<HTMLCanvasElement> {
	role?: AriaRole;
	height?: number;
	width?: number;
	[key: string]: unknown;
}
export interface NoScriptElement extends Omit<Partial<HTMLElement>, "role"> {
	[key: string]: unknown;
}
export interface ScriptElement
	extends Omit<Partial<HTMLScriptElement>, "role"> {
	async?: boolean;
	crossorigin?: "anonymous" | "use-credentials";
	defer?: boolean;
	fetchpriority?: "auto" | "high" | "low";
	integrity?: string;
	nomodule?: boolean;
	nonce?: string;
	referrerpolicy?: ReferrerPolicy;
	src?: string;
	type?: string;
	[key: string]: unknown;
}
export interface DelElement extends Partial<HTMLModElement> {
	role?: AriaRole;
	cite?: string;
	datetime?: string;
	[key: string]: unknown;
}
export interface InsElement extends Partial<HTMLModElement> {
	role?: AriaRole;
	cite?: string;
	datetime?: string;
	[key: string]: unknown;
}
export interface CaptionElement
	extends Omit<Partial<HTMLTableCaptionElement>, "role" | "align"> {
	[key: string]: unknown;
}
export interface ColElement
	extends Omit<
		Partial<HTMLTableColElement>,
		"role" | "align" | "bgcolor" | "char" | "charoff" | "valign" | "width"
	> {
	span?: number;
	[key: string]: unknown;
}
export interface ColgroupElement
	extends Omit<
		Partial<HTMLTableColElement>,
		"role" | "align" | "bgcolor" | "char" | "charoff" | "valign" | "width"
	> {
	span?: number;
	[key: string]: unknown;
}
export interface TableElement
	extends Omit<
		Partial<HTMLTableElement>,
		| "align"
		| "bgcolor"
		| "border"
		| "cellpadding"
		| "cellspacing"
		| "frame"
		| "rules"
		| "summary"
		| "width"
	> {
	role?: AriaRole;
	[key: string]: unknown;
}
export interface TBodyElement
	extends Omit<
		Partial<HTMLTableSectionElement>,
		"align" | "bgcolor" | "char" | "charoff" | "valign"
	> {
	role?: AriaRole;
	[key: string]: unknown;
}
export interface TdElement
	extends Omit<
		Partial<HTMLTableCellElement>,
		| "abbr"
		| "align"
		| "axis"
		| "bgcolor"
		| "char"
		| "charoff"
		| "height"
		| "scope"
		| "valign"
		| "width"
	> {
	colspan?: number;
	rowspan?: number;
	headers?: string;
	role?: AriaRole;
	[key: string]: unknown;
}
export interface TFootElement
	extends Omit<
		Partial<HTMLTableSectionElement>,
		"align" | "bgcolor" | "char" | "charoff" | "valign"
	> {
	role?: AriaRole;
	[key: string]: unknown;
}
export interface ThElement
	extends Omit<
		Partial<HTMLTableCellElement>,
		| "align"
		| "axis"
		| "bgcolor"
		| "char"
		| "charoff"
		| "height"
		| "valign"
		| "width"
	> {
	abbr?: string;
	colspan?: number;
	headers?: string;
	rowspan?: number;
	scope?: "col" | "row" | "colgroup" | "rowgroup";
	role?: AriaRole;
	[key: string]: unknown;
}
export interface THeadElement
	extends Omit<
		Partial<HTMLTableSectionElement>,
		"align" | "bgcolor" | "char" | "charoff" | "valign"
	> {
	role?: AriaRole;
	[key: string]: unknown;
}
export interface TrElement
	extends Omit<
		Partial<HTMLTableRowElement>,
		"align" | "bgcolor" | "char" | "charoff" | "valign"
	> {
	role?: AriaRole;
	[key: string]: unknown;
}
export interface ButtonElement extends Partial<HTMLButtonElement> {
	[key: string]: unknown;
	autofocus?: boolean;
	disabled?: boolean;
	form?: string;
	formaction?: string;
	formenctype?:
		| "application/x-www-form-urlencoded"
		| "multipart/form-data"
		| "text/plain";
	formmethod?: "post" | "get" | "dialog";
	formnovalidate?: boolean;
	formtarget?: "_blank" | "_self" | "_parent" | "_top";
	name?: string;
	popovertarget?: string;
	popovertargetaction?: "show" | "hide" | "toggle";
	type: "button" | "submit" | "reset";
	value?: string;
	role?:
		| "button"
		| "checkbox"
		| "combobox"
		| "link"
		| "menuitem"
		| "menuitemcheckbox"
		| "menuitemradio"
		| "option"
		| "radio"
		| "switch"
		| "tab";
	[key: string]: unknown;
}
export interface DataListElement
	extends Omit<Partial<HTMLDataListElement>, "role"> {
	[key: string]: unknown;
}
export interface FieldSetElement extends Partial<HTMLFieldSetElement> {
	disabled?: boolean;
	form?: string;
	name?: string;
	role?: "group" | "radiogroup" | "none" | "presentation";
	[key: string]: unknown;
}
export interface FormElement extends Omit<Partial<HTMLFormElement>, "accept"> {
	"accept-charset"?: string;
	autocapitalize?: string;
	autocomplete?: string;
	name: string;
	rel?: string;
	action?: string;
	enctype?:
		| "application/x-www-form-urlencoded"
		| "multipart/form-data"
		| "text/plain";
	method?: "post" | "get" | "dialog";
	novalidate?: boolean;
	target?: "_blank" | "_self" | "_parent" | "_top";
	role?: "form" | "search" | "none" | "presentation";
	[key: string]: unknown;
}
export interface InputElement extends Partial<HTMLInputElement> {
	role?:
		| "button"
		| "checkbox"
		| "textbox"
		| "combobox"
		| "spinbutton"
		| "radio"
		| "slider"
		| "searchbox"
		| "link"
		| "menuitem"
		| "menuitemcheckbox"
		| "menuitemradio"
		| "option"
		| "switch"
		| "tab";
	type:
		| "button"
		| "checkbox"
		| "color"
		| "date"
		| "datetime-local"
		| "email"
		| "file"
		| "hidden"
		| "image"
		| "month"
		| "number"
		| "password"
		| "radio"
		| "range"
		| "reset"
		| "search"
		| "submit"
		| "tel"
		| "text"
		| "time"
		| "url"
		| "week";
	accept?: string;
	alt?: string;
	autocalpitalize?: string;
	autocomplete?: string;
	capture?: boolean;
	checked?: boolean;
	dirname?: string;
	disabled?: boolean;
	form?: string;
	formaction?: string;
	formenctype?:
		| "application/x-www-form-urlencoded"
		| "multipart/form-data"
		| "text/plain";
	formmethod?: "post" | "get" | "dialog";
	formnovalidate?: boolean;
	formtarget?: "_blank" | "_self" | "_parent" | "_top";
	height?: number;
	list?: string;
	max?: number;
	maxlength?: number;
	min?: number;
	minlength?: number;
	multiple?: boolean;
	name: string;
	pattern?: string;
	placeholder?: string;
	popovertarget?: string;
	popovertargetaction?: string;
	readonly?: boolean;
	required: boolean;
	size?: number;
	src?: string;
	step?: number;
	value?: string;
	width?: number;
	[key: string]: unknown;
}
export interface LabelElement extends Omit<Partial<HTMLLabelElement>, "role"> {
	for: string;
	[key: string]: unknown;
}
export interface LegendElement
	extends Omit<Partial<HTMLLegendElement>, "role"> {
	[key: string]: unknown;
}
export interface MeterElement extends Omit<Partial<HTMLMeterElement>, "role"> {
	value: number;
	min: number;
	max: number;
	low: number;
	high: number;
	optimum: number;
	form?: string;
	[key: string]: unknown;
}
export interface OptGroupElement
	extends Omit<Partial<HTMLOptGroupElement>, "role"> {
	disabled?: boolean;
	label: string;
	[key: string]: unknown;
}
export interface OptionElement
	extends Omit<Partial<HTMLOptionElement>, "role"> {
	disabled?: boolean;
	label: string;
	selected?: boolean;
	value: string;
	[key: string]: unknown;
}
export interface OutPutElement extends Partial<HTMLOutputElement> {
	for: string;
	form?: string;
	name: string;
	role?: AriaRole;
	[key: string]: unknown;
}
export interface ProgressElement
	extends Omit<Partial<HTMLProgressElement>, "role"> {
	"aria-describedby"?: string;
	"aria-busy"?: boolean;
	max: number;
	value: number;
	[key: string]: unknown;
}
export interface SelectElement extends Partial<HTMLSelectElement> {
	role?: "combobox" | "listbox" | "menu";
	autocomplete?: string;
	autofocus?: boolean;
	disabled?: boolean;
	form?: string;
	multiple?: boolean;
	name: string;
	required: boolean;
	size?: number;
	[key: string]: unknown;
}
export interface TextAreaElement
	extends Omit<Partial<HTMLTextAreaElement>, "role"> {
	autocapitalize?: string;
	autocomplete?: string;
	autofocus?: boolean;
	cols?: number;
	dirname?: string;
	disabled?: boolean;
	form?: string;
	maxlength?: number;
	minlength?: number;
	name: string;
	placeholder?: string;
	readonly?: boolean;
	required: boolean;
	rows?: number;
	spellcheck?: boolean | "default";
	wrap?: "hard" | "soft";
	[key: string]: unknown;
}
export interface DetailsElement
	extends Omit<Partial<HTMLDetailsElement>, "role"> {
	open?: boolean;
	[key: string]: unknown;
}
export interface DialogElement
	extends Omit<Partial<HTMLDialogElement>, "tabindex"> {
	role?: "dialog" | "alertdialog";
	[key: string]: unknown;
}
export interface SummaryElement extends Omit<Partial<HTMLElement>, "role"> {
	[key: string]: unknown;
}
export interface SlotElement extends Omit<Partial<HTMLSlotElement>, "role"> {
	name?: string;
	[key: string]: unknown;
}
export interface TemplateElement
	extends Omit<Partial<HTMLTemplateElement>, "role"> {
	shadowrootmode?: "open" | "closed";
	[key: string]: unknown;
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
		iframe: IframeElement;
		object: ObjectElement;
		picture: PictureElement;
		portal: never; // experimental feature
		source: SourceElement;
		// SVG and MathML
		svg: SVGElement;
		math: MathElement;
		// Scripting
		canvas: CanvasElement;
		noscript: NoScriptElement;
		script: ScriptElement;
		// Demarcating edits
		del: DelElement;
		ins: InsElement;
		// Table content
		caption: CaptionElement;
		col: ColElement;
		colgroup: ColgroupElement;
		table: TableElement;
		tbody: TBodyElement;
		td: TdElement;
		tfoot: TFootElement;
		th: ThElement;
		thead: THeadElement;
		tr: TrElement;
		// Forms
		button: ButtonElement;
		datalist: DataListElement;
		fieldset: FieldSetElement;
		form: FormElement;
		input: InputElement;
		label: LabelElement;
		legend: LegendElement;
		meter: MeterElement;
		optgroup: OptGroupElement;
		option: OptionElement;
		output: OutPutElement;
		progress: ProgressElement;
		select: SelectElement;
		textarea: TextAreaElement;
		// Interactive elements
		details: DetailsElement;
		dialog: DialogElement;
		summary: SummaryElement;
		// Web Components
		slot: SlotElement;
		template: TemplateElement;
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
		embed: never;
	}
}

export type ElementHandlerT = (config: {
	children?: string;
	props?: Props;
	tag: keyof JSX.IntrinsicElements;
}) => string;
