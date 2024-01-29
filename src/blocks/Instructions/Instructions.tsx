import { motion } from "framer-motion";

import { animationConfig } from "../../animationConfig";
import lightningLeftImg from "../../assets/img/lightning-left.png";
import lightningRightImg from "../../assets/img/lightning-right.png";
import video from "../../assets/v9.mp4";
const { leftAnimation, rightAnimation } = animationConfig;

export const Instructions = (): JSX.Element => {
	return (
		<>
			<motion.section className="py-[70px] md:py-[140px]">
				<div className="relative">
					<div className="mx-auto max-w-[1377px] px-7 lg:px-4">
						<div className="flex flex-col-reverse items-center justify-between gap-12 lg:flex-row">
							<div className="relative z-20 text-center lg:flex-[0_1_660px] lg:text-left">
								<h2 className="title-gradient mb-6 text-[32px] leading-[30px] sm:text-[45px] sm:leading-[40px] md:mb-12 md:text-[64px] md:leading-[60px]">
									Thrilling
									<br /> Tournaments:
								</h2>
								<p className="font-actay-wide-italic text-xs sm:text-base md:mb-12 md:text-2xl">
									Your skills deserve recognition. Ascend the ranks and become a legend in the
									Hyperloop realm. We will be hosting regular tournaments where players can compete
									for glory and, of course, heaps of Hyperloops.
								</p>
							</div>
							<div className="relative z-50 w-full bg-[url('./assets/img/video-block.png')] bg-contain bg-center bg-no-repeat pb-[66%] sm:w-[70%] sm:pb-[45%] lg:h-[363px] lg:flex-[0_1_543px] lg:pb-0">
								<video
									src={video}
									className="absolute inset-6 left-1/2 top-1/2 z-50 w-[90%] -translate-x-1/2 -translate-y-1/2 border-2 border-[#CE94FE]"
									autoPlay
									controls
									playsInline
									loop
									muted
								/>
							</div>
						</div>
					</div>
					<motion.img
						initial="hidden"
						whileInView="visible"
						viewport={{ amount: 0.5, once: true }}
						variants={rightAnimation}
						custom={1}
						src={lightningRightImg}
						className="absolute right-0 top-0"
						alt="lightning"
					/>
				</div>

				<div className="relative my-[100px] md:my-[200px] lg:my-[265px]">
					<div className="mx-auto max-w-[1377px] px-7 lg:px-4">
						<div className="flex flex-col items-center justify-between gap-12 lg:flex-row">
							<div className="relative z-50 w-full bg-[url('./assets/img/video-block.png')] bg-contain bg-center bg-no-repeat pb-[66%] sm:w-[70%] sm:pb-[45%] lg:h-[363px] lg:flex-[0_1_543px] lg:pb-0">
								<video
									src={video}
									className="absolute inset-6 left-1/2 top-1/2 z-50 w-[90%] -translate-x-1/2 -translate-y-1/2 border-2 border-[#CE94FE]"
									autoPlay
									controls
									playsInline
									loop
									muted
								/>
							</div>
							<div className="relative z-20 text-center lg:flex-[0_1_660px] lg:text-left">
								<h2 className="title-gradient mb-6 text-[32px] leading-[30px] sm:text-[45px] sm:leading-[40px] md:mb-12 md:text-[64px] md:leading-[60px]">
									Betting System:
								</h2>
								<p className="font-actay-wide-italic text-xs sm:text-base md:mb-12 md:text-2xl">
									Feeling confident? Players can bet Hyperloops on their performance or on other
									players in tournaments. High risk, high reward!
								</p>
							</div>
						</div>
					</div>

					<motion.img
						initial="hidden"
						whileInView="visible"
						viewport={{ amount: 0.5, once: true }}
						variants={leftAnimation}
						custom={1}
						src={lightningLeftImg}
						className="absolute left-0 top-0"
						alt="lightning"
					/>
				</div>

				<div className="relative">
					<div className="mx-auto max-w-[1377px] px-7 lg:px-4">
						<div className="flex flex-col-reverse items-center justify-between gap-12 lg:flex-row">
							<div className="relative z-20 text-center lg:flex-[0_1_660px] lg:text-left">
								<h2 className="title-gradient mb-6 text-[32px] leading-[30px] sm:text-[45px] sm:leading-[40px] md:mb-12 md:text-[64px] md:leading-[60px]">
									Dynamic
									<br /> Leaderboards:
								</h2>
								<p className="font-actay-wide-italic text-xs sm:text-base md:mb-12 md:text-2xl">
									Show off your skills. Hyperloop will have an in-house elo-system, giving you the
									chance to climb the ranks and let everyone know who's the boss of the Hyperloop
									universe.
								</p>
							</div>
							<div className="relative z-50 w-full bg-[url('./assets/img/video-block.png')] bg-contain bg-center bg-no-repeat pb-[66%] sm:w-[70%] sm:pb-[45%] lg:h-[363px] lg:flex-[0_1_543px] lg:pb-0">
								<video
									src={video}
									className="absolute inset-6 left-1/2 top-1/2 z-50 w-[90%] -translate-x-1/2 -translate-y-1/2 border-2 border-[#CE94FE]"
									autoPlay
									controls
									playsInline
									loop
									muted
								/>
							</div>
						</div>
					</div>
					<motion.img
						initial="hidden"
						whileInView="visible"
						viewport={{ amount: 0.5, once: true }}
						variants={rightAnimation}
						custom={1}
						src={lightningRightImg}
						className="absolute right-0 top-0"
						alt="lightning"
					/>
				</div>
			</motion.section>
		</>
	);
};
