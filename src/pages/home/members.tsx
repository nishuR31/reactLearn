import React from "react";

export default function Members(): React.JSX.Element {
  interface MemberData {
    name?: string;
    github?: string;
    image?: string;
    techStack?: string[];
  }

  const data: MemberData[] = [
    {
      name: "Nishan Rajak",
      github: "https://github.com/nishur31",
      image: "https://avatars.githubusercontent.com/u/150690474?v=4",
      techStack: [
        "Axios",
        "Express",
        "Fastify",
        "Nodejs",
        "Bun",
        "REST Api",
        "Typescript",
        "Javascript",
        "Prisma",
        "Postgres",
        "MongoDB",
        "Mongoose",
        "React",
        "Postman",
        "Docker",
        "Git",
        "Github",
        "VCS",
      ],
    },
    {
      name: "Nishant Singh",
      github: "https://github.com/nishant0320",
      image: "https://avatars.githubusercontent.com/u/188916222?v=4",
      techStack: [
        "Axios",
        "Express",
        "Fastify",
        "Nodejs",
        "Bun",
        "REST Api",
        "Typescript",
        "Javascript",
        "Prisma",
        "Postgres",
        "MongoDB",
        "Mongoose",
        "React",
        "Postman",
        "Docker",
        "Git",
        "Github",
        "VCS",
        "Zod",
      ],
    },
  ];

  return (
    <main>
      <header>
        <h1>Members</h1>
      </header>

      <div>
        <div>
          {data.map((user, idx) => (
            <section key={user.github ?? idx}>
              <img src={user.image} alt={user.name ?? "member avatar"} />
              <h2>{user.name}</h2>
              <p>
                Github{" "}
                {user.github ?
                  <a href={user.github}>{user.github.split("/").pop()}</a>
                : "—"}
              </p>
              <p>Tech Stack</p>
              <ul>
                {user.techStack?.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
