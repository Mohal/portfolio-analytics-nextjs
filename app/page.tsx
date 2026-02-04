export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-blue-600 dark:text-zinc-50">
            Welcome to My Portfolio + Analytics website (demo)
          </h1>
          <p>
            I am an experienced Full Stack Developer working on a SaaS product & experimenting with AI/ML.
          </p>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            To know more about me & my skills head over to{" "}
            <a
              href="/about"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              About page
            </a>{" "}
            or the{" "}
            <a
              href="/projects"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Projects
            </a>{" "}
            page.
          </p>
        </div>
      </main>
    </div>
  );
}
