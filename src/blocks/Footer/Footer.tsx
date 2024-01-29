import appStoreDowloadImage from "../../assets/img/app-store-download.svg";
import googlePlayDowloadImage from "../../assets/img/google-play-download.svg";
import { projectConfig } from "../../projectConfig";

export const Footer = (): JSX.Element => {
	return (
		<footer className="py-12 md:py-[72px]">
			<div className="mx-auto max-w-[1377px] px-7 lg:px-4">
				<div className="flex flex-col items-center gap-6 md:flex-row md:items-start md:justify-between">
					<div className="text-center md:mb-12 md:text-left">
						<img src="/logo-full.svg" className="mx-auto md:mx-0" alt="HyperLoop" />
						<div className="my-6 font-actay text-base">
							Run, Earn, Trade, and Thrive in the
							<br /> Ultimate Blockchain Runner Experience!
						</div>
						<nav>
							<ul className="grid grid-cols-2 gap-3 sm:flex sm:flex-wrap lg:gap-8">
								{projectConfig.footerMenuLinks.map(({ name, link }, index) => (
									<li key={index}>
										<a
											href={link}
											className="font-actay-wide text-base transition hover:text-[#cacaca]"
											target="_blank"
										>
											{name}
										</a>
									</li>
								))}
							</ul>
						</nav>
					</div>
					<div>
						<div className="mb-4 font-actay-wide text-base">Get the app</div>
						<div className="flex flex-row gap-3 md:flex-col md:gap-6">
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
				</div>
				<div className="mt-8 flex flex-col-reverse items-center justify-between gap-4 border-t-2 pt-8 md:mt-0 md:flex-row md:flex-wrap md:border-none md:pt-0">
					<div className="text-center font-actay text-base md:text-left">
						® {new Date().getFullYear()} HypeLoop - SnailBrook Project. All Rights Reserved.
					</div>
					<div className="hidden items-center gap-8 lg:flex">
						{projectConfig.footerLinks.map(({ name, link }, index) => (
							<a
								href={link}
								key={index}
								className="font-actay text-base transition hover:text-[#cacaca]"
								target="_blank"
							>
								{name}
							</a>
						))}
					</div>
					<div className="flex items-center justify-center gap-3">
						{projectConfig.socials.map(({ name, link }, index) => (
							<a href={link} key={index} className="p-1 transition hover:-translate-y-1">
								<img src={`/img/socials/${name}.svg`} width={24} height={24} alt={name} />
							</a>
						))}
					</div>
				</div>
			</div>
		</footer>
	);
};
