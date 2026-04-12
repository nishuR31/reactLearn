export default function Home() {
  return (
    <main className="flex flex-col flex-wrap dark:bg-black dark:text-white text-black bg-white">
      <section>
        <h1>Welcome</h1>
        <h2>This is out react homepage</h2>
        <p>
          This homepage gives you a quick view of what i learnt in react
          routing: explore lessons, practice with projects, and track my
          progress in one place.
        </p>
      </section>

      <section>
        <article>
          <h2>Start Learning</h2>
          <p>
            Follow curated paths for frontend, backend, and full-stack
            development.
          </p>
        </article>

        <article>
          <h2>Practice Projects</h2>
          <p>
            Build portfolio-ready mini projects and reinforce concepts by doing.
          </p>
        </article>

        <article>
          <h2>Track Progress</h2>
          <p>
            Keep momentum with milestones, weekly goals, and completion stats.
          </p>
        </article>
      </section>
    </main>
  );
}
