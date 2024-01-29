import cn from "classnames";

import { ButtonAppearance, ButtonProps, ButtonSize, ButtonVariant } from "./Button.props.ts";

export const Button = ({
	variant,
	link,
	size,
	appearance,
	children,
	className,
	...props
}: ButtonProps): JSX.Element => {
	if (variant === ButtonVariant.Link) {
		return (
			<a
				href={link}
				className={cn(
					className,
					`inline-flex transform items-center justify-center whitespace-nowrap transition-all`,
					{
						"primary-button text-[rgba(16,24,40,0.80)] shadow-[10px_5px_5px_red] [text-shadow:_0_1px_0_rgb(255_255_255_/_40%)]":
							appearance == ButtonAppearance.Primary,
						"ghost-button": appearance == ButtonAppearance.Ghost,
						"h-[50px] w-[316px]": size == ButtonSize.Large,
						"h-[45px] px-3": size == ButtonSize.Small,
					},
				)}
			>
				{children}
			</a>
		);
	} else {
		return (
			<button
				className={cn(
					className,
					`inline-flex transform items-center justify-center whitespace-nowrap transition-all`,
					{
						"primary-button text-[rgba(16,24,40,0.80)] shadow-[10px_5px_5px_red] [text-shadow:_0_1px_0_rgb(255_255_255_/_40%)]":
							appearance == ButtonAppearance.Primary,
						"ghost-button": appearance == ButtonAppearance.Ghost,
						"h-[50px] w-[316px]": size == ButtonSize.Large,
						"h-[45px] px-3": size == ButtonSize.Small,
					},
				)}
				{...props}
			>
				{children}
			</button>
		);
	}
};
