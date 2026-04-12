import Button from "../../components/ui/Button";

export default function Skills() {
  return (
    <main>
      <header>
        <h1>Skills</h1>
      </header>

      <section>
        <h2>Technologies I am learning and using:</h2>
        <div className="grid-col-3 gap-3  text-center  lg:grid grid-cols-6">
          <div className="border-border py-6 rounded-token-lg px-3 bg-gradient-muted grid-rows-1 grid-cols-1 md:grid-col-2 md:grid-row-2 lg:grid-col-3 lg:grid-row-3">
            <Button icon="Server" text="Node.js" variant="ghost" />
          </div>
          <div className="border-border py-6 rounded-token-lg px-3 bg-gradient-muted grid-rows-1 grid-cols-1 md:grid-col-1 md:grid-row-3 lg:grid-col-3 lg:grid-row-4">
            <Button icon="Braces" text="TypeScript" variant="ghost" />
          </div>
          <div className="border-border py-6 rounded-token-lg px-3 bg-gradient-muted grid-rows-1 grid-cols-1 md:grid-col-3 md:grid-row-1 lg:grid-col-3 lg:grid-row-1">
            <Button icon="Atom" text="React" variant="ghost" />
          </div>
          <div className="border-border py-6 rounded-token-lg px-3 bg-gradient-muted grid-rows-1 grid-cols-1 md:grid-col-2 md:grid-row-4 lg:grid-col-3 lg:grid-row-2">
            <Button icon="Braces" text="JavaScript" variant="ghost" />
          </div>
          <div className="border-border py-6 rounded-token-lg px-3 bg-gradient-muted grid-rows-1 grid-cols-1 md:grid-col-4 md:grid-row-2 lg:grid-col-3 lg:grid-row-5">
            <Button icon="Globe" text="Axios" variant="ghost" />
          </div>
          <div className="border-border py-6 rounded-token-lg px-3 bg-gradient-muted grid-rows-1 grid-cols-1 md:grid-col-1 md:grid-row-1 lg:grid-col-3 lg:grid-row-3">
            <Button icon="Cookie" text="Cookies" variant="ghost" />
          </div>
          <div className="border-border py-6 rounded-token-lg px-3 bg-gradient-muted grid-rows-1 grid-cols-1 md:grid-col-1 md:grid-row-3 lg:grid-col-3 lg:grid-row-4">
            <Button icon="Server" text="Express" variant="ghost" />
          </div>
          <div className="border-border py-6 rounded-token-lg px-3 bg-gradient-muted grid-rows-1 grid-cols-1 md:grid-col-4 md:grid-row-4 lg:grid-col-3 lg:grid-row-6">
            <Button icon="Pyramid" text="Prisma ORM" variant="ghost" />
          </div>
          <div className="border-border py-6 rounded-token-lg px-3 bg-gradient-muted grid-rows-1 grid-cols-1 md:grid-col-4 md:grid-row-1 lg:grid-col-3 lg:grid-row-2">
            <Button icon="Database" text="MongoDB" variant="ghost" />
          </div>
          <div className="border-border py-6 rounded-token-lg px-3 bg-gradient-muted grid-rows-1 grid-cols-1 md:grid-col-2 md:grid-row-3 lg:grid-col-3 lg:grid-row-3">
            <Button icon="Server" text="Fastify" variant="ghost" />
          </div>
        </div>
      </section>
    </main>
  );
}
