import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export interface ButtonProps
	extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	variant: ButtonVariant;
	appearance: ButtonAppearance;
	size: ButtonSize;
	link?: string;
	className?: string;
	children: ReactNode;
}

export enum ButtonVariant {
	Button,
	Link,
}

export enum ButtonAppearance {
	Primary,
	Ghost,
}

export enum ButtonSize {
	Large,
	Small,
}
