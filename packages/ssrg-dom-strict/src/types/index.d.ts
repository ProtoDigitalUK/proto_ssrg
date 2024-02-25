export type ElementType = "section" | "div" | "h1" | FC<Props> | "button";
export type Props = Record<string, unknown> | null;
export type Child =
	| HTMLElement
	| Text
	| string
	| number
	| null
	| boolean
	| Child[];

export declare namespace JSX {
	interface IntrinsicElements {
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
		};
		a: {
			class?: string;
			href: string;
			target: string;
			rel: string;
		};
		[elemName: string]: {
			[key: string]: string;
		};
		// exclude default elements
		canvas: never;
	}
}

export type FC<P> = (props: P) => string | null;
