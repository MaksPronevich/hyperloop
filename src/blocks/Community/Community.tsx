import communityImage from "../../assets/img/community.png";
import { Button } from "../../components/Button/Button";
import { ButtonAppearance, ButtonSize, ButtonVariant } from "../../components/Button/Button.props";

export const Community = (): JSX.Element => {
	return (
		<section className="main-gradient py-[2px]">
			<div className="bg-black">
				<div className="mx-auto max-w-[1377px] px-7 lg:px-4">
					<div className="flex flex-col-reverse items-center gap-12 py-[115px] lg:flex-row lg:gap-0 lg:py-[60px]">
						<div className="text-center lg:flex-[0_1_45%] lg:text-left">
							<h2 className="title-gradient mb-6 text-[32px] leading-[30px] sm:text-[45px] sm:leading-[40px] md:mb-12 md:text-[96px] md:leading-[80px]">
								Ready to
								<br className="hidden md:block" /> race?
							</h2>
							<p className="mb-6 font-actay-wide-italic text-xs sm:text-base md:mb-12 md:text-2xl">
								Join the Hyperloop community now and start your blockchain running adventure today!
							</p>
							<Button
								variant={ButtonVariant.Button}
								size={ButtonSize.Large}
								appearance={ButtonAppearance.Primary}
								className="sm:!w-[432px]"
							>
								Join to community
							</Button>
						</div>
						<div className="relative w-full pb-[66%] lg:flex-[0_1_55%] lg:pb-[50%]">
							<img
								src={communityImage}
								className="absolute left-0 top-0 h-full w-full object-contain"
								alt="NFT Collection"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
