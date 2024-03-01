import SSRG from "@protodigital/ssrg-dom-strict";
import Layout from "./components/Layout.jsx";
import Button from "./components/Button.jsx";

// const html = SSRG.renderToString(Layout, {
// 	children: [
// 		SSRG.renderToString(Button, {
// 			data: {
// 				foo: "bar",
// 			},
// 		}),
// 	],
// });

const html = Layout({
	children: [
		Button({
			data: {
				foo: "bar",
			},
		}),
	],
});

console.log(html);
