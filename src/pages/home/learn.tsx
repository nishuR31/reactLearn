import { useEffect, useState } from "react";

const jsonData = async () => {
  const res = await fetch("/learn.json");
  return res.json();
};

export default function Learn() {
  const [data, setData] = useState<Record<string, string>>({});

  useEffect(() => {
    const fetchData = async () => {
      const res = await jsonData();
      setData(res);
    };
    fetchData();
  }, []);

  return (
    <>
      <p>Nishan and Nishant learnt this far </p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
}
