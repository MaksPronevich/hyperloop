import { MouseParallaxChild, MouseParallaxContainer } from "react-parallax-mouse";

import nftImage from "../../assets/img/nft.png";
import nftFlokiImage from "../../assets/img/nft-flokiloop.png";
import nftPepeloopImage from "../../assets/img/nft-pepeloop.png";
import nftUwuloopImage from "../../assets/img/nft-uwuloop.png";

export const Collection = (): JSX.Element => {
	return (
		<section className="bg-[url('./assets/img/collection-bg.png')] bg-cover bg-center">
			<MouseParallaxContainer globalFactorX={0.1} globalFactorY={0.1} resetOnLeave={true}>
				<div className="">
					<div className="mx-auto max-w-[1377px] px-7 lg:px-4">
						<div className="flex flex-col items-center gap-8 py-[120px] lg:grid lg:grid-cols-2">
							<div className="relative block w-full pb-[66%] lg:hidden">
								<img
									src={nftImage}
									className="absolute h-full w-full object-contain"
									alt="NFT Collection"
								/>
							</div>
							<div className="relative hidden h-[500px] lg:block">
								<MouseParallaxChild
									factorX={0.3}
									factorY={-0.05}
									className="absolute bottom-0 right-0 z-[30]"
								>
									<img src={nftPepeloopImage} className="max-w-full" alt="Pepe NFT" />
								</MouseParallaxChild>
								<MouseParallaxChild
									factorX={-0.6}
									factorY={-0.75}
									className="absolute bottom-0 right-[10%] z-[20]"
								>
									<img src={nftUwuloopImage} className="max-w-full" alt="Uwu NFT" />
								</MouseParallaxChild>
								<MouseParallaxChild
									factorX={-0.9}
									factorY={-0.1}
									className="absolute bottom-0 right-[25%] z-[10]"
								>
									<img src={nftFlokiImage} className="max-w-full" alt="Floki NFT" />
								</MouseParallaxChild>
							</div>
							<div className="text-center lg:text-left">
								<h2 className="title-gradient mb-6 text-[32px] leading-[30px] sm:text-[45px] sm:leading-[40px] md:mb-12 md:text-[64px] md:leading-[60px]">
									Meme NFT
									<br /> Collection:
								</h2>
								<p className="font-actay-wide-italic text-xs sm:text-base md:text-2xl">
									Dive into the world of NFTs! Buy, sell, and trade exclusive Meme NFTs. Each NFT
									not only looks cool but also gives players unique in-game advantages.
								</p>
							</div>
						</div>
					</div>
				</div>
			</MouseParallaxContainer>
		</section>
	);
};
