import { About } from "./blocks/About/About.tsx";
import { Collection } from "./blocks/Collection/Collection.tsx";
import { Community } from "./blocks/Community/Community.tsx";
import { Earn } from "./blocks/Earn/Earn.tsx";
import { Feedback } from "./blocks/Feedback/Feedback.tsx";
import { Footer } from "./blocks/Footer/Footer.tsx";
import { Header } from "./blocks/Header/Header.tsx";
import { Instructions } from "./blocks/Instructions/Instructions.tsx";
import { Intro } from "./blocks/Intro/Intro.tsx";
import {
	TickerPanelDirection,
	TickerPanelRotate,
} from "./components/TickerPanel/TickerPanel.props.ts";
import { TickerPanel } from "./components/TickerPanel/TickerPanel.tsx";
import { projectConfig } from "./projectConfig.ts";

export const App = (): JSX.Element => {
	return (
		<div className="relative overflow-hidden">
			<Header />
			<main>
				<Intro />
				<TickerPanel
					data={projectConfig.tickerPanelData}
					rotate={TickerPanelRotate.ToLeft}
					direction={TickerPanelDirection.Right}
				/>
				<Earn />
				<Collection />
				<Instructions />
				<TickerPanel
					data={projectConfig.tickerPanelData}
					rotate={TickerPanelRotate.ToRight}
					direction={TickerPanelDirection.Left}
				/>
				<About />
				<Community />
				<Feedback />
			</main>
			<Footer />
		</div>
	);
};
