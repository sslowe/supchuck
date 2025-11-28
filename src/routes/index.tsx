import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: App })

function App() {
	return (
		<div className="space-y-8">
			{/* URLegy Section */}
			<section className="relative">
				{/* Border container */}
				<div className="relative">
					<img
						src="/images/border.png"
						alt=""
						className="w-full"
					/>
					{/* Content inside border - Desktop: text left + image right, Mobile: just image */}
					<div className="absolute inset-6 p-8 sm:p-12">
						<div className="grid sm:grid-cols-2 gap-6 h-full sm:pl-3">
							{/* Left column - Text (hidden on mobile) */}
							<div className="hidden sm:flex flex-col justify-start blur-sm">
								<h2 className="text-4xl font-bold mt-4 mb-2 text-black">
									URLegy
								</h2>
								<h2 className="text-sm md:text-base mb-8 text-supchuck-gray">
									The Internet is dead. Eulogize it.
								</h2>
								<p className="text-sm md:text-base text-black leading-relaxed">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.
								</p>
							</div>

							{/* Right column - Image (centered on mobile, normal on desktop) */}
							<div className="flex sm:items-center justify-center sm:px-4 mb-8 sm:mb-0">
								<img
									src="/images/unknown.png"
									alt="URLegy"
									className="w-auto h-[45%] sm:h-[70%]"
								/>
							</div>
						</div>
					</div>

					{/* Coming Soon blaze overlay - bottom right */}
					<div className="absolute -bottom-16 -right-16">
						<div className="relative max-w-[70vw] sm:max-w-none">
							<img
								src="/images/blaze.png"
								alt=""
								className="w-100"
							/>
							<div className="absolute inset-0 pr-4 pt-6 flex text-center items-center justify-center">
								<span className="font-['Unkempt'] text-white text-4xl sm:text-5xl font-bold">
									Coming<br />Soon
								</span>
							</div>
						</div>
					</div>
				</div>

				{/* Mobile text - appears below border on mobile only */}
				<div className="sm:hidden mt-10 px-4">
					<h2 className="text-4xl font-bold mt-4 mb-2 text-black blur-sm">
						URLegy
					</h2>
					<h2 className="text-lg mb-8 text-supchuck-gray blur-sm">
						The Internet is dead. Eulogize it.
					</h2>
					<p className="text-black leading-relaxed blur-sm">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.
					</p>
					<img
						src="/images/rule.png"
						alt=""
						className="w-full mt-10 h-[2svh]"
					/>
				</div>
			</section>
		</div>
	)
}
