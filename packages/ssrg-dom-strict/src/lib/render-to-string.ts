import type { FC } from "../index.js";

const renderToString = <T>(component: FC<T>, props?: T): string | null => {
	return component(props);
};

export default renderToString;
