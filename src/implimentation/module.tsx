import { Toaster, toast } from "sonner";
import axios from "axios";
import { HomeIcon } from "lucide-react";
import { useState } from "react";

type ModuleExample = {
  name: string;
  why: string;
  install: string;
  snippet: string;
};

const moduleExamples: ModuleExample[] = [
  {
    name: "sonner",
    why: "Simple toast notifications with clean API.",
    install: "npm/bun i sonner",
    snippet: `import { Toaster, toast } from "sonner";

export default function App() {
  return (
    <>
      <button onClick={() => toast.success("Saved successfully")}>Toast</button>
      <Toaster position="top-right" richColors />
    </>
  );
}`,
  },
  {
    name: "lucide-react",
    why: "Modern icon set with tree-shakeable React components.",
    install: "npm/bun i lucide-react",
    snippet: `import { Bell, Search } from "lucide-react";

export default function Header() {
  return (
    <div>
      <Search size={18} />
      <Bell color="tomato" />
    </div>
  );
}`,
  },
  {
    name: "axios",
    why: "HTTP client with cleaner request/response handling.",
    install: "npm/bun i axios",
    snippet: `import axios from "axios";

async function getUsers() {
  const res = await axios.get("/api/users");
  return res.data;
}`,
  },
  {
    name: "zod",
    why: "Runtime validation with TypeScript-first schemas.",
    install: "npm/bun i zod",
    snippet: `import { z } from "zod";

const UserSchema = z.object({
  name: z.string().min(2),
  age: z.number().int().positive(),
});

const parsed = UserSchema.safeParse({ name: "Nisha", age: 22 });`,
  },
  {
    name: "react-hook-form",
    why: "Fast form handling with minimal re-renders.",
    install: "npm/bun i react-hook-form",
    snippet: `import { useForm } from "react-hook-form";

type FormData = { email: string };

export default function ContactForm() {
  const { register, handleSubmit } = useForm<FormData>();

  return (
    <form onSubmit={handleSubmit(console.log)}>
      <input {...register("email")} />
      <button type="submit">Submit</button>
    </form>
  );
}`,
  },
];

export default function Module() {
  const [data, setData] = useState<Record<string, unknown> | null>(null);

  const handleClick = async () => {
    const res = await axios.get<Record<string, unknown>>(
      "https://jsonplaceholder.typicode.com/todos/1",
    );
    setData(res.data);
  };

  //   useEffect(() => {

  //   }, []);

  return (
    <>
      <h2>Useful NPM Modules</h2>
      <p>Examples with install command and starter snippet.</p>

      {moduleExamples.map((item) => (
        <section key={item.name}>
          <h3>{item.name}</h3>
          <p>{item.why}</p>
          <p>
            <strong>Install:</strong> {item.install}
          </p>
          <pre>
            <code>{item.snippet}</code>
          </pre>
        </section>
      ))}

      <h1>Example uses:</h1>
      <h2>Sonner</h2>
      <button type="button" onClick={() => toast.success("button clicked")}>
        Toast
      </button>
      <Toaster position="top-right" richColors />

      <br />
      <h2>Lucide react</h2>
      <HomeIcon size={20} />
      <br />
      <h2>axios</h2>
      <button onClick={handleClick}>Click</button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
}
