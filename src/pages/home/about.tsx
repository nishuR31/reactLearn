import { useEffect, useState, Suspense } from "react";

interface responseData {
  id?: number;
  name?: string;
  username?: string;
  email?: string;
  address?: Record<string, any>;
  phone?: string;
  website?: string;
  company?: Record<string, string>;
}

export default function About() {
  const [data, setData] = useState<responseData[]>([{ name: "Loading" }]);

  const fetchData = async (): Promise<responseData[]> => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    return response.json() as Promise<responseData[]>;
  };

  useEffect(() => {
    const fetchedData = async () => {
      const result = await fetchData();
      setData(result);
    };
    fetchedData();
  }, []);

  return (
    <main>
      <header>
        <h1>About</h1>
      </header>

      <section>
        <p>
          This is a simple About page built with semantic HTML tags and no CSS.
        </p>
        <p>
          It describes the purpose of this React learning project and keeps the
          content clean and readable.
        </p>
      </section>
      <Suspense fallback={<p>Loading</p>}>
        <ul>
          {data.map((val, index) => (
            <li key={val.id ?? index}>
              <p>{val.name}</p>
              <p>{val.username}</p>
              <p>{val.email}</p>
              <p>{JSON.stringify(val.address)}</p>
              <p>{val.phone}</p>
              <p>{val.website}</p>
            </li>
          ))}
        </ul>
      </Suspense>
    </main>
  );
}
