import * as SSRG from "@protodigital/ssrg-dom-strict";

interface ButtonProps {
	data: {
		foo: string;
	};
	children?: SSRG.Children;
}

const Button: SSRG.FC<ButtonProps> = (props) => {
	return (
		<button type="button" aria-label={`Open ${props?.data.foo} modal`}>
			Click me - {props?.data.foo}
			{props?.children}
		</button>
	);
};

export default Button;
