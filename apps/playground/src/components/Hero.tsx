import * as SSRG from "@protodigital/ssrg-dom-strict";
import Button from "./Button.js";

const SpanTest: SSRG.FC = () => {
	return <span>hello world</span>;
};

const Hero: SSRG.FC = () => {
	return (
		<>
			<section>
				<div>
					<h1>Hero</h1>
					<Button
						data={{
							foo: "bar",
						}}
					>
						<SpanTest />
						<SpanTest />
						<SpanTest />
					</Button>
					<wc-proto-digital hello={"string"} />
				</div>
			</section>
			<div>hello</div>
		</>
	);
};

export default Hero;
