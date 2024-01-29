import { Button } from "../../components/Button/Button";
import { ButtonAppearance, ButtonSize, ButtonVariant } from "../../components/Button/Button.props";

export const Feedback = (): JSX.Element => {
	return (
		<section className="bg-[#1B2A48] py-[80px]">
			<div className="mx-auto max-w-[1377px] px-7 lg:px-4">
				<div className="flex flex-col items-center justify-between gap-12 lg:flex-row">
					<div className="text-center lg:text-left">
						<h2 className="title-gradient mb-6 text-[32px] leading-[30px] sm:text-[45px] sm:leading-[40px] md:mb-12 md:text-[64px] md:leading-[60px]">
							Stay in the loop!
						</h2>
						<p className="font-actay-wide-italic text-xs sm:text-base md:mb-12 md:text-2xl">
							Join our newsletter for the latest updates and exclusive offers.
						</p>
					</div>
					<form className="flex flex-col  gap-3 sm:flex-row sm:gap-0">
						<div className="main-gradient h-[44px] w-[280px] p-[1px]">
							<input
								type="email"
								className="h-full w-full bg-[#1B2A48] px-6 font-actay-wide text-base outline-none placeholder:text-white"
								placeholder="Enter your email"
							/>
						</div>
						<Button
							variant={ButtonVariant.Button}
							size={ButtonSize.Small}
							appearance={ButtonAppearance.Primary}
							className="w-full sm:-ml-7 sm:w-[228px]"
						>
							Subscribe
						</Button>
					</form>
				</div>
			</div>
		</section>
	);
};
