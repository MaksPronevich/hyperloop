export interface TickerPanelProps {
	data: string[];
	rotate: TickerPanelRotate;
	direction: TickerPanelDirection;
}

export enum TickerPanelRotate {
	ToRight,
	ToLeft,
}

export enum TickerPanelDirection {
	Right,
	Left,
	Up,
	Down,
}
