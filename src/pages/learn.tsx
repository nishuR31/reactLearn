import { useEffect, useState, useTransition } from "react";

type Logs = Record<string, string>;

export default function LearnPage() {
  const [logs, setLogs] = useState<Logs>({});
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    fetch("/logs/learn.json")
      .then((res) => res.json())
      .then((data) => startTransition(() => setLogs(data)))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">What we Learned</h1>

      <div className="space-y-4">
        {!isPending &&
          Object.entries(logs)
            .reverse()
            .map(([date, text]) => (
              <div
                key={date}
                className="border rounded-lg p-4 shadow-sm bg-white"
              >
                <h2 className="font-semibold text-lg">{date}</h2>
                <p className="text-gray-600 mt-1">{text}</p>
              </div>
            ))}
      </div>
    </div>
  );
}
