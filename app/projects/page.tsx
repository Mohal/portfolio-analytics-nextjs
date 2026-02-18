"use client";

import { useState } from "react";

export default function Projects() {
	const projects = [
		{
			id: "portfolio-analytics",
			title: "Portfolio Analytics",
			description: "A Next.js portfolio with integrated click tracking and analytics.",
			link: "#"
		},
		{
			id: "saas-cms",
			title: "SaaS CMS Platform",
			description: "Multi-tenant SaaS CMS built with Laravel and React.",
			link: "#"
		},
		{
			id: "ai-ml-demo",
			title: "AI/ML Integration Demo",
			description: "Experimenting with machine learning models in a cloud-native environment.",
			link: "#"
		},
	];

	const [clicks, setClicks] = useState<{ [key: string]: number }>(() => {
		if (typeof(window) !== "undefined") {
			const stored = localStorage.getItem("project_clicks");
			return stored ? JSON.parse(stored) : {};
		}
		return {};
	});

	const handleClick = (id: string) => {
		const newClicks = { ...clicks, [id]: (clicks[id] || 0) + 1 };
    setClicks(newClicks);
    localStorage.setItem("project_clicks", JSON.stringify(newClicks));
	};

	return (
		<div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
			<main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
				<section className="max-w-3xl">
					<h1 className="text-3xl font-bold text-blue-600 mb-6">Projects</h1>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						{
							(projects) ? (
								projects.map((project, key) => {
									return (
										<div key={key} className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
											<h3 className="text-xl font-semibold text-blue-600 mb-2">{project.title}</h3>
											<p className="text-gray-700 mb-4">{project.description}</p>
											<a
												className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
												onClick={() => handleClick(project.id)}
												href="#"
											>View Project</a>
											<p className="mt-2 text-sm text-gray-500">Clicked {clicks[project.id] || 0} times</p>
										</div>
									);
								})
							) : ( null )
						}
					</div>
				</section>
			</main>
		</div>
	);
}