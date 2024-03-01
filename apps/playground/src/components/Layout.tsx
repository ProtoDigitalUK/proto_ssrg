import * as SSRG from "@protodigital/ssrg-dom-strict";
import Hero from "./Hero.js";

interface LayoutProps {
	children?: SSRG.Children;
}

const Layout: SSRG.FC<LayoutProps> = (props) => {
	return (
		<SSRG.Fragment>
			<html lang="en" dir="ltr">
				<head>
					<title>My First SSRG App</title>
				</head>
				<body>
					<main id={"undefined"}>
						<Hero />
						<img
							src="https://picsum.photos/200"
							alt=""
							loading="eager"
							height={200}
							width={200}
						/>
						<abbr title="HyperText Markup Language">HTML</abbr>
						{props?.children}
					</main>
				</body>
			</html>
		</SSRG.Fragment>
	);
};

export default Layout;
