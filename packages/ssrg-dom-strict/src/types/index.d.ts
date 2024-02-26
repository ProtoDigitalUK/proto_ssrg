export interface DefaultProps {
	children?: Child;
}

export type FC<P = {}> = (props?: P) => string | null;

export type ElementTag = FC<Props> | keyof JSX.IntrinsicElements;
export type Props = Record<string, unknown> | null;
export type Child = string | number | null | boolean | Child[];

export declare namespace JSX {
	interface IntrinsicElements {
		// catch all & web component support
		[ele: string]: {
			[key: string]: string;
		};
		// strict elements
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
