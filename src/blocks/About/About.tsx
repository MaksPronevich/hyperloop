import "swiper/css";
import "swiper/css/effect-fade";

import { RefObject, useCallback, useRef, useState } from "react";
import { Swiper as SwiperObj } from "swiper";
import { EffectFade, Navigation } from "swiper/modules";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";

import nextImg from "../../assets/img/next.svg";
import platformImg from "../../assets/img/platform.png";
import platformTickerImg from "../../assets/img/platform-ticker.png";
import prevImg from "../../assets/img/prev.svg";
import { projectConfig } from "../../projectConfig";

interface SwiperObject {
	swiper: {
		slidePrev: () => void;
		slideNext: () => void;
	};
}

export const About = (): JSX.Element => {
	const sliderRef: RefObject<SwiperObject | null> = useRef(null);
	const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

	const handleSlideChange = (swiper: SwiperObj): void => {
		setCurrentSlideIndex(swiper.realIndex);
	};

	const handlePrev = useCallback(() => {
		if (!sliderRef.current) return;
		sliderRef.current.swiper.slidePrev();
	}, []);

	const handleNext = useCallback(() => {
		if (!sliderRef.current) return;
		sliderRef.current!.swiper.slideNext();
	}, []);

	return (
		<section className="py-[70px] md:py-[120px]">
			<div className="mx-auto max-w-[1377px] px-7 lg:px-4">
				<div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[570px_1fr]">
					<div className="relative">
						<Swiper
							modules={[Navigation, EffectFade]}
							navigation
							spaceBetween={0}
							slidesPerView={1}
							ref={sliderRef as React.RefObject<SwiperRef>}
							loop
							effect="fade"
							onSlideChange={(swiper) => handleSlideChange(swiper)}
							allowTouchMove={false}
							className="jump-animation"
						>
							{projectConfig.sliderPersonages.map(({ name, imageUrl }, index) => (
								<SwiperSlide
									key={index}
									className={`pt-[20px] ${index === currentSlideIndex ? "active-slide" : ""}`}
								>
									<img
										src={imageUrl}
										className="mx-auto max-w-[50%] opacity-0 sm:max-w-full"
										alt={name}
									/>
								</SwiperSlide>
							))}
						</Swiper>
						<button
							onClick={handlePrev}
							className="absolute left-0 top-1/2 z-[999999] -translate-y-1/2"
						>
							<img src={prevImg} alt="prev" />
						</button>
						<button
							onClick={handleNext}
							className="absolute right-0 top-1/2 z-[999999] -translate-y-1/2"
						>
							<img src={nextImg} alt="next" />
						</button>
						<img src={platformImg} className="mx-auto -mt-[50px]" alt="platform" />
						<div className="absolute -bottom-[20px] left-1/2 -translate-x-1/2 sm:bottom-0 ">
							<div className="relative w-[280px]">
								<span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
									{projectConfig.sliderPersonages[currentSlideIndex].name}
								</span>
								<img src={platformTickerImg} alt="Ticker" />
							</div>
						</div>
					</div>
					<div className="text-center lg:text-left">
						<h2 className="title-gradient mb-6 text-[32px] leading-[30px] sm:text-[45px] sm:leading-[40px] md:mb-12 md:text-[64px] md:leading-[60px]">
							About the Game:
						</h2>
						<div className="font-actay-wide-italic text-xs sm:text-base md:mb-12 md:text-2xl">
							<p>
								Hyperloop is an adrenaline-pumped journey on the blockchain. With stunning graphics,
								fast-paced gameplay, and a vibrant community.
							</p>
							<br />
							<p>
								Ready to race? Join the Hyperloop community now and start your blockchain running
								adventure today!
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
