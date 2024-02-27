export type ContentCategories =
	| "flow-content"
	| "sectioning-content"
	| "heading-content"
	| "heading-content"
	| "phrasing-content"
	| "embedded-content"
	| "interactive-content"
	| "palpable-content"
	| "form-associated-content"
	| "script-supporting-content"
	| "script-supporting-content"
	| "transparent";

export interface ElementsConfigT {
	enabled: boolean;
	attributes?: {
		default?: Record<string, string>;
		required?: string[];
	};
	tagOmission?: boolean;
	permittedContent?: Partial<Record<ContentCategories, string[] | true>>; // cateogry, excluded elements
	category: ContentCategories[];
}

const elementsConfig: Record<string, ElementsConfigT> = {
	address: {
		enabled: true,
		permittedContent: {
			"flow-content": [
				"address",
				"hgroup",
				"h1",
				"h2",
				"h3",
				"h4",
				"h5",
				"h6",
				"header",
				"footer",
			],
			"sectioning-content": true,
		},
		category: ["flow-content", "palpable-content"],
	},
	// TODO: Add the rest of the elements
	img: {
		enabled: true,
		attributes: {
			default: {
				loading: "lazy",
				alt: "",
			},
			required: ["alt"],
		},
		tagOmission: true,
		category: ["flow-content"],
	},
	// Deprecated elements
	acronym: {
		enabled: false,
		category: [],
	},
	big: {
		enabled: false,
		category: [],
	},
	center: {
		enabled: false,
		category: [],
	},
	dir: {
		enabled: false,
		category: [],
	},
	font: {
		enabled: false,
		category: [],
	},
	frame: {
		enabled: false,
		category: [],
	},
	frameset: {
		enabled: false,
		category: [],
	},
	image: {
		enabled: false,
		category: [],
	},
	marquee: {
		enabled: false,
		category: [],
	},
	menuitem: {
		enabled: false,
		category: [],
	},
	nobr: {
		enabled: false,
		category: [],
	},
	noembed: {
		enabled: false,
		category: [],
	},
	noframes: {
		enabled: false,
		category: [],
	},
	param: {
		enabled: false,
		category: [],
	},
	plaintext: {
		enabled: false,
		category: [],
	},
	rb: {
		enabled: false,
		category: [],
	},
	rtc: {
		enabled: false,
		category: [],
	},
	strike: {
		enabled: false,
		category: [],
	},
	tt: {
		enabled: false,
		category: [],
	},
	xmp: {
		enabled: false,
		category: [],
	},
};

export const defaultConfig: ElementsConfigT = {
	enabled: true,
	category: [],
	tagOmission: false,
};

export default elementsConfig;
