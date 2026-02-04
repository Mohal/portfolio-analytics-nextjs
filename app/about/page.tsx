export default function About() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
            <section className="max-w-3xl">
                <h1 className="text-3xl font-bold text-blue-600 mb-6">About Me</h1>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    I am Umer, a veteran software engineer and SaaS entrepreneur.
                    My expertise spans Laravel, PHP, React, Node.js, and full-stack web
                    development. Recently, I've been expanding into modern JavaScript
                    stacks and AI/ML to build scalable, cloud-native solutions.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    I specialize in designing efficient workflows, integrating complex
                    stacks, and future-proofing architecture for multi-tenant SaaS
                    platforms. My current focus is building a personalized portfolio
                    with analytics in Next.js to showcase my skills to employers and
                    freelance clients.
                </p>
                <h2 className="text-2xl font-semibold text-blue-500 mt-8 mb-4">Skills</h2>
                <ul className="grid grid-cols-2 gap-4 text-gray-700">
                    <li><span className="text-green-500">&#10004;</span> Laravel & PHP</li>
                    <li><span className="text-green-500">&#10004;</span> React & Node.js</li>
                    <li><span className="text-green-500">&#10004;</span> Next.js & TypeScript</li>
                    <li><span className="text-green-500">&#10004;</span> TailwindCSS</li>
                    <li><span className="text-green-500">&#10004;</span> AI/ML Integration</li>
                    <li><span className="text-green-500">&#10004;</span> Cloud-Native Development</li>
                </ul>
            </section>
        </main>
    </div>
  );
}
