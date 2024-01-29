import cn from "classnames";
import Marquee from "react-fast-marquee";

import starImg from "../../assets/img/star.svg";
import { TickerPanelDirection, TickerPanelProps, TickerPanelRotate } from "./TickerPanel.props";

export const TickerPanel = ({ data, rotate, direction }: TickerPanelProps): JSX.Element => {
	const panelDirectionMap = {
		[TickerPanelDirection.Left]: "left",
		[TickerPanelDirection.Right]: "right",
		[TickerPanelDirection.Up]: "up",
		[TickerPanelDirection.Down]: "down",
	};

	const panelDirection = panelDirectionMap[direction] as
		| "left"
		| "right"
		| "up"
		| "down"
		| undefined;

	return (
		<div
			className={cn("main-gradient -translate-y-[30px] transform py-[2px]", {
				"-rotate-2": rotate === TickerPanelRotate.ToLeft,
				"rotate-2": rotate === TickerPanelRotate.ToRight,
			})}
		>
			<Marquee pauseOnHover autoFill direction={panelDirection} className="bg-[#1B2A48] py-5">
				{data.map((elem, key) => (
					<div className="mr-12 flex gap-12" key={key}>
						<span className="text-3xl">{elem}</span>
						<img src={starImg} width={36} height={36} alt="star" />
					</div>
				))}
			</Marquee>
		</div>
	);
};
