export interface ElementsConfigT {
	enabled: boolean;
	attributes?: {
		default?: Record<string, string>;
		required?: string[];
	};
	selfClosing?: boolean;
}

const elementsConfig: Record<string, ElementsConfigT> = {
	img: {
		enabled: true,
		attributes: {
			default: {
				loading: "lazy",
				alt: "",
			},
			required: ["alt"],
		},
		selfClosing: true,
	},
	// Deprecated elements
	acronym: {
		enabled: false,
	},
	big: {
		enabled: false,
	},
	center: {
		enabled: false,
	},
	dir: {
		enabled: false,
	},
	font: {
		enabled: false,
	},
	frame: {
		enabled: false,
	},
	frameset: {
		enabled: false,
	},
	image: {
		enabled: false,
	},
	marquee: {
		enabled: false,
	},
	menuitem: {
		enabled: false,
	},
	nobr: {
		enabled: false,
	},
	noembed: {
		enabled: false,
	},
	noframes: {
		enabled: false,
	},
	param: {
		enabled: false,
	},
	plaintext: {
		enabled: false,
	},
	rb: {
		enabled: false,
	},
	rtc: {
		enabled: false,
	},
	strike: {
		enabled: false,
	},
	tt: {
		enabled: false,
	},
	xmp: {
		enabled: false,
	},
};

export const defaultConfig: ElementsConfigT = {
	enabled: true,
	selfClosing: false,
};

export default elementsConfig;
