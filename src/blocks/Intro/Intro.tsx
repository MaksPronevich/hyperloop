import { useState } from "react";
import { MouseParallaxChild, MouseParallaxContainer } from "react-parallax-mouse";

import appStoreDowloadImage from "../../assets/img/app-store-download.svg";
import copyImage from "../../assets/img/copy.svg";
import googlePlayDowloadImage from "../../assets/img/google-play-download.svg";
import gradientImage from "../../assets/img/gradient.png";
import lightningLeftImage from "../../assets/img/lightning-left-sm.png";
import lightningRightImage from "../../assets/img/lightning-right-sm.png";
import phoneImage from "../../assets/img/phone-horizontal.png";
import { Button } from "../../components/Button/Button";
import { ButtonAppearance, ButtonSize, ButtonVariant } from "../../components/Button/Button.props";
import { projectConfig } from "../../projectConfig";

export const Intro = (): JSX.Element => {
	const [isNotificationVisible, setIsNotificationVisible] = useState<boolean>(false);

	const copyHandler = (copiedText: string): void => {
		navigator.clipboard.writeText(copiedText);
		setIsNotificationVisible(true);
		setTimeout(() => {
			setIsNotificationVisible(false);
		}, 500);
	};

	return (
		<section>
			<MouseParallaxContainer>
				<div className="relative bg-[url('./assets/img/intro-bg.png')] bg-cover bg-center pb-[113px] pt-[273px] sm:pt-[320px] lg:pt-[183px]">
					<div className="relative z-30 mx-auto max-w-[1377px] px-7 lg:px-4">
						<div className="relative z-20 text-center">
							<h1 className="title-gradient mb-6 text-4xl sm:text-6xl md:text-7xl lg:text-8xl">
								Join the <br />
								HYPERLOOP Rush:
							</h1>
							<div className="mb-12 font-actay-wide-italic text-xs sm:text-base md:text-xl lg:text-2xl">
								Experience the ultimate blockchain runner game.
								<br /> Choose your favorite meme, race for a lifetime!
							</div>
							<div className="relative z-10 mx-auto mb-6 block max-w-[660px] pb-[45%] md:mb-12 lg:hidden">
								<img
									src={phoneImage}
									className="absolute left-0 top-0 h-full w-full object-contain"
									alt="Play Free"
								/>
								<Button
									variant={ButtonVariant.Button}
									size={ButtonSize.Large}
									appearance={ButtonAppearance.Primary}
									className="!sm:w-[316px] !sm:text-2xl absolute left-1/2 top-1/2 z-10 -mt-[15px] !h-8 !w-[250px] -translate-x-1/2 -translate-y-1/2 text-sm sm:h-[50px]"
								>
									PLAY FOR FREE
								</Button>
							</div>
							<div>
								<Button
									variant={ButtonVariant.Button}
									size={ButtonSize.Large}
									appearance={ButtonAppearance.Primary}
								>
									buy $HOOP
								</Button>
								<div className="mb-[50px] mt-4 flex items-center justify-center">
									<div className="main-gradient relative z-[10] inline-flex h-[45px] items-center truncate py-[10px] pl-3 pr-5 after:absolute after:inset-[1px] after:z-0 after:bg-black md:pl-6 md:pr-12">
										<span className="relative z-[10] hidden font-actay-wide text-base md:inline-block">
											{projectConfig.address}
										</span>
										<div className="relative z-[10] block font-actay-wide text-sm md:hidden">
											<span>{projectConfig.address.slice(0, -20)}</span>
											<span>...</span>
											<span>{projectConfig.address.slice(-4)}</span>
										</div>
									</div>
									<div className="relative">
										<Button
											variant={ButtonVariant.Button}
											size={ButtonSize.Small}
											appearance={ButtonAppearance.Primary}
											className="relative z-[10] -ml-3 w-[75px] lg:-ml-6 lg:w-[170px]"
											onClick={() => {
												copyHandler(projectConfig.address);
											}}
										>
											<span className="hidden lg:inline-block">Copy</span>
											<img src={copyImage} className="inline-block lg:hidden" alt="Copy" />
										</Button>
										{isNotificationVisible && (
											<span className="absolute -bottom-full right-0 md:-top-full">copied</span>
										)}
									</div>
								</div>
							</div>
							<div className="relative z-10 mx-auto hidden h-[350px] max-w-[660px] lg:block">
								<img
									src={phoneImage}
									className="absolute left-0 top-0 object-contain"
									alt="Play Free"
								/>

								<Button
									variant={ButtonVariant.Button}
									size={ButtonSize.Large}
									appearance={ButtonAppearance.Primary}
									className="absolute left-1/2 top-1/2 z-10 -mt-[20px] -translate-x-1/2 -translate-y-1/2"
								>
									PLAY FOR FREE
								</Button>
							</div>
						</div>
						<div className="absolute bottom-[13%] right-0 z-30 hidden w-[18%] flex-col gap-4 px-7 lg:flex lg:px-4">
							<a
								href={projectConfig.appStoreDownloadLink}
								className="transition hover:translate-x-1"
								target="_blank"
							>
								<img src={appStoreDowloadImage} alt="App Store" />
							</a>
							<a
								href={projectConfig.googlePlayDownloadLink}
								className="transition hover:translate-x-1"
								target="_blank"
							>
								<img src={googlePlayDowloadImage} alt="Google Play" />
							</a>
						</div>
					</div>
					<img
						src={gradientImage}
						className="absolute bottom-[30%] left-1/2 hidden -translate-x-1/2 sm:bottom-[10%] md:block lg:-bottom-[10%]"
						alt="gradient"
					/>
					<MouseParallaxChild
						factorX={0.03}
						factorY={0.05}
						className="absolute -left-[10%] bottom-[5%] z-[20] hidden w-[50%] lg:block"
					>
						<img src={lightningLeftImage} alt="Lightning" />
					</MouseParallaxChild>
					<MouseParallaxChild
						factorX={0.05}
						factorY={0.02}
						className="absolute -right-[10%] bottom-[30%] z-[20] hidden w-[40%] lg:block"
					>
						<img src={lightningRightImage} alt="Lightning" />
					</MouseParallaxChild>
				</div>
			</MouseParallaxContainer>
		</section>
	);
};
