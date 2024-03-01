import * as SSRG from "@protodigital/ssrg-dom-strict";
import Hero from "./Hero.js";

const Layout: SSRG.FC = () => {
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
					</main>
				</body>
			</html>
		</SSRG.Fragment>
	);
};

export default Layout;
