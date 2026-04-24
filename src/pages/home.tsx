import { Link } from "react-router-dom";
export const links: string[] = [
  "hooks",
  "optimization",
  "modules",
  "components",
  "routing",
];
export default function Home() {
  return (
    <>
      <div>
        <h1>
          This is a simple home page nothing fancy nothing too much just having
          links or what we've learned in react and what we know about and topics
          we have covered.
        </h1>
        <h2>Below we have the topic of links we know and we studied</h2>
        <code>
          <h2>Note:</h2>
          <h3>
            We are not focusing currently on the designing css/tailwind part
            just learning react since the ai took over most of the designing
            part and we are focusing on the logic and the react part of it.
          </h3>
        </code>
      </div>
      <div className="flex gap-y-5 flex-column text-center flex-wrap justify-center">
        {links.map((link, id) => (
          <Link
            className="p-3 text-2xl text-blue-500 hover:underline"
            key={id}
            to={`/${link}`}
          >
            {link}
          </Link>
        ))}
      </div>
    </>
  );
}
