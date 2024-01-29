import { MouseParallaxChild, MouseParallaxContainer } from "react-parallax-mouse";

import coinImage from "../../assets/img/coin.png";
import coinLgImg from "../../assets/img/coin-lg.png";
import coinSmImage from "../../assets/img/coin-sm.png";
import phoneImage from "../../assets/img/phone-vertical.png";
import platformImg from "../../assets/img/platform-sm.png";
import { Button } from "../../components/Button/Button";
import { ButtonAppearance, ButtonSize, ButtonVariant } from "../../components/Button/Button.props";

export const Earn = (): JSX.Element => {
	return (
		<section className="pt-[50px] sm:pt-[70px] lg:pt-[130px]">
			<div className="mx-auto max-w-[1377px] px-7 lg:px-4">
				<div className="mb-[72px] flex flex-col-reverse items-center gap-4 sm:mb-[90px] lg:mb-[116px] lg:grid lg:grid-cols-2">
					<div className="relative flex h-[230px] w-[320px] flex-col justify-end sm:h-[500px] sm:w-auto lg:h-[400px]">
						<img
							src={coinLgImg}
							className="jump-animation absolute bottom-[15%] left-[19%] w-[60%] sm:bottom-[25%]"
							alt="coin"
						/>
						<img src={platformImg} alt="Earn Hyperloops" />
					</div>
					<div className="text-center lg:text-left">
						<h2 className="title-gradient mb-6 text-[32px]/[30px] sm:text-[45px]/[40px] md:mb-12 md:text-[64px]/[60px]">
							Earn
							<br /> Hyperloops:
						</h2>
						<p className="font-actay-wide-italic text-xs sm:text-base md:mb-12 md:text-2xl">
							Players can earn Hyperloops (the native in-game currency) by nailing those runs. The
							better you play, the more you earn.
						</p>
					</div>
				</div>
			</div>
			<MouseParallaxContainer globalFactorX={0.1} globalFactorY={0.1}>
				<div className="mx-auto max-w-[1377px] px-7 lg:px-4">
					<div className="flex flex-col items-center gap-8 md:gap-12 lg:grid lg:grid-cols-2 lg:gap-2">
						<div className="text-center lg:text-left">
							<h2 className="title-gradient mb-6 text-[32px]/[30px] sm:text-[45px]/[40px] md:mb-12 md:text-[64px]/[60px]">
								Hyperloop
								<br /> Marketplace:
							</h2>
							<p className="mb-6 font-actay-wide-italic text-xs sm:text-base md:mb-12 md:text-2xl">
								Got extra Hyperloops? Utilize the Hyperloop NFT Marketplace, a hub where skins,
								cosmetics, and Hyperloops can be sold or new ones bought. Engage in a vibrant
								economy driven by player demand.
							</p>
							<Button
								variant={ButtonVariant.Button}
								size={ButtonSize.Large}
								appearance={ButtonAppearance.Ghost}
							>
								MARKETPLACE
							</Button>
						</div>
						<div className="relative flex  justify-center">
							<MouseParallaxChild
								factorX={-0.4}
								factorY={-0.1}
								className="absolute -bottom-[10%] -left-[40%] z-10 w-[70%] lg:-left-[15%]"
							>
								<img src={coinSmImage} alt="Coin" />
							</MouseParallaxChild>
							<MouseParallaxChild
								factorX={0.5}
								factorY={0.8}
								className="absolute -bottom-[4%] -right-[40%] z-30 w-[70%] lg:-right-[30%]"
							>
								<img src={coinImage} alt="Coin" />
							</MouseParallaxChild>
							<img src={phoneImage} className="relative z-20" alt="Hyperloop Marketplace" />
						</div>
					</div>
				</div>
			</MouseParallaxContainer>
		</section>
	);
};
