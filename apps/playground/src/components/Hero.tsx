import * as SSRG from "@protodigital/ssrg-dom-strict";

interface ButtonProps {
	data: {
		foo: string;
	};
}

const Button: SSRG.FC<ButtonProps> = ({ data }) => {
	return (
		<button type="button" aria-label={`Open ${data.foo} modal`}>
			Click me - {data.foo}
		</button>
	);
};
const Hero = () => {
	return (
		<>
			<section>
				<div>
					<h1>Hero</h1>
					<Button
						data={{
							foo: "bar",
						}}
					/>
					<wc-proto-digital hello={"string"} />
				</div>
			</section>
			<div>hello</div>
		</>
	);
};

export default Hero;
