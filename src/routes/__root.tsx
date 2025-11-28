import { TanStackDevtools } from "@tanstack/react-devtools";
import {
	createRootRoute,
	HeadContent,
	Outlet,
	Scripts,
} from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { seo } from "@/lib/seo";

import appCss from "../styles.css?url";

export const Route = createRootRoute({
	head: () => ({
		meta: [
			{
				charSet: "utf-8",
			},
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{
				title: "Supchuck",
			},
			{
				name: "apple-mobile-web-app-title",
				content: "Supchuck",
			},
			...seo({
				title: "Supchuck",
				image: "/og-image.png",
				description: "The web's leader in superfluous taglines",
			}),
		],
		links: [
			{
				rel: "icon",
				href: "/favicon-96x96.png",
				sizes: "96x96",
				type: "image/png",
			},
			{
				rel: "icon",
				href: "/favicon.svg",
				type: "image/svg+xml",
			},
			{
				rel: "apple-touch-icon",
				href: "apple-touch-icon.png",
				sizes: "180x180",
			},
			{
				rel: "shortcut icon",
				href: "favicon.ico",
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com",
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous",
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Unkempt:wght@400;700&family=Comic+Relief:wght@400;700&display=swap",
			},
			{
				rel: "stylesheet",
				href: appCss,
			},
		],
	}),
	shellComponent: RootDocument,
});

function RootDocument() {
	return (
		<html lang="en">
			<head>
				<HeadContent />
			</head>
			<body className="bg-white min-h-screen">
				{/* Main Layout Container - Narrow, single column */}
				<div className="overflow-x-hidden">
					<div className="max-w-3xl mx-auto px-4">
						{/* Header with logo and tagline */}
						<header className="relative mt-6 mb-2">
							<img
								src="/images/header.png"
								alt="Supchuck Header"
								className="w-full h-[16svh] sm:h-[20svh]"
							/>
							{/* Logo overlaid on first third of header */}
							<img
								src="/images/logo.png"
								alt="Supchuck Logo"
								className="absolute top-4 left-6 h-[65%] sm:h-[75%] w-auto object-contain"
							/>
							{/* Tagline in bottom right */}
							<div className="absolute bottom-3 sm:bottom-4 right-4 sm:right-8 text-right max-w-[60%] sm:max-w-none">
								<p className="sm:text-lg font-['Unkempt'] text-white">
									The web's leader in superfluous taglines
								</p>
							</div>
						</header>

						{/* Main Content Area */}
						<main className="mb-4">
							<Outlet />
						</main>

						{/* Footer */}
						<footer className="py-3 text-center">
							<p className="font-['Unkempt'] text-supchuck-gray">
								&copy; SUPCHUCK 2025
							</p>
						</footer>
					</div>

					<TanStackDevtools
						config={{
							position: "bottom-right",
						}}
						plugins={[
							{
								name: "Tanstack Router",
								render: <TanStackRouterDevtoolsPanel />,
							},
						]}
					/>
					<Scripts />
				</div>
			</body>
		</html>
	);
}
