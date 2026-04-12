import { useEffect, useState } from "react";
import Button from "../../components/ui/Button";

const jsonData = async () => {
  const res = await fetch("/learningLog/learn.json");
  return res.json();
};

const defaultData = { "What I learnt?": "Nothing!" };

export default function Learn() {
  const [data, setData] = useState<Record<string, any>>(defaultData);
  const [openKeys, setOpenKeys] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await jsonData();
      setData(res || defaultData);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      <h2> This page shows logs about what we learnt till far</h2>
      <h3>
        We are tracking our learning day by day, if some days are missing then
        kindly understand that we might have been busy enough to forgot to
        update the logs. Thank you
      </h3>
      {loading ?
        <p>Loading...</p>
      : <ul>
          {Object.entries(data || {}).map(([key, val]) => {
            let date: string;
            let msg: string;

            if (typeof val === "string") {
              date = key;
              msg = val;
            } else if (val && typeof val === "object") {
              const innerKeys = Object.keys(val);
              if (innerKeys.length === 1) {
                date = innerKeys[0];
                // prefer string or stringify otherwise
                msg = String((val as any)[date]);
              } else {
                // fallback: use key as date and stringify value
                date = key;
                msg = JSON.stringify(val);
              }
            } else {
              date = key;
              msg = String(val);
            }

            const isOpen = openKeys.has(key);

            return (
              <li key={key}>
                <Button
                  variant="ghost"
                  icon="Info"
                  onClick={() => {
                    setOpenKeys((prev) => {
                      const next = new Set(prev);
                      if (next.has(key)) next.delete(key);
                      else next.add(key);
                      return next;
                    });
                  }}
                >
                  {date}
                </Button>
                <p className={isOpen ? "flex" : "hidden"}>{msg}</p>
              </li>
            );
          })}
        </ul>
      }
    </>
  );
}
