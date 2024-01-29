import {
	ButtonAppearance,
	ButtonSize,
	ButtonVariant,
} from "../../components/Button/Button.props.ts";
import { Button } from "../../components/Button/Button.tsx";
import { projectConfig } from "../../projectConfig.ts";

export const Header = (): JSX.Element => {
	return (
		<header className="absolute left-0 top-0 z-[90] w-full py-6 lg:py-5">
			<div className="mx-auto max-w-[1377px] px-7 lg:px-4">
				<div className="flex flex-col justify-between gap-9 lg:flex-row lg:items-center lg:gap-0">
					<div className="flex justify-between lg:flex-auto">
						<img
							src="/logo.svg"
							className="h-[62px] w-[70px] sm:h-[100px] sm:w-[113px]"
							alt="HyperLoop"
						/>
						<div className="flex items-center justify-center gap-4 lg:flex-auto">
							{projectConfig.socials.map(({ name, link }, index) => (
								<a href={link} key={index} className="p-1 transition hover:-translate-y-1">
									<img src={`/img/socials/${name}.svg`} width={24} height={24} alt={name} />
								</a>
							))}
						</div>
					</div>
					<div className="flex flex-col items-center gap-3 lg:flex-row lg:gap-6">
						<Button
							variant={ButtonVariant.Button}
							size={ButtonSize.Large}
							appearance={ButtonAppearance.Ghost}
						>
							MARKETPLACE
						</Button>

						<Button
							variant={ButtonVariant.Button}
							size={ButtonSize.Large}
							appearance={ButtonAppearance.Primary}
						>
							PLAY FOR FREE
						</Button>
					</div>
				</div>
			</div>
		</header>
	);
};
