import { useEffect, useState } from "react";

const jsonData = async () => {
  const res = await fetch("/logs/learn.json");
  return res.json();
};

export default function Learn() {
  const [data, setData] = useState<Record<string, any>>({});
  const [openKeys, setOpenKeys] = useState<Set<string>>(new Set());

  useEffect(() => {
    const fetchData = async () => {
      const res = await jsonData();
      setData(res);
    };
    fetchData();
  }, []);

  return (
    <>
      <p>Nishan and Nishant learnt this far</p>
      <ul>
        {Object.entries(data).map(([key, val]) => {
          const date = Object.keys(val)[0];
          const msg = Object.values(val)[0];
          const isOpen = openKeys.has(key);
          return (
            <li key={key}>
              <button
                onClick={() => {
                  setOpenKeys((prev) => {
                    const next = new Set(prev);
                    if (next.has(key)) {
                      next.delete(key);
                    } else {
                      next.add(key);
                    }
                    return next;
                  });
                }}
              >
                {date}
              </button>
              <p className={isOpen ? "flex" : "hidden"}>{msg}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}

// import { useEffect, useState } from "react";

// const jsonData = async () => {
//   const res = await fetch("/logs/learn.json");
//   return res.json();
// };

// export default function Learn() {
//   const [data, setData] = useState<Record<string, any>>({});
//   const [expanded, setExpanded] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       const res = await jsonData();
//       setData(res);
//     };
//     fetchData();
//   }, []);

//   return (
//     <>
//       <p>Nishan and Nishant learnt this far</p>
//       <ul>
//         {Object.entries(data)
//           .filter(([key]) => key !== "count")
//           .map(([key, val]) => {
//             const date = Object.keys(val)[0];
//             const msg = Object.values(val)[0];
//             return (
//               <li key={key}>
//                 <button
//                   onClick={() => setExpanded(expanded === key ? null : key)}
//                 >
//                   {date}
//                 </button>
//                 <p className={expanded === key ? "flex" : "hidden"}>{msg}</p>
//               </li>
//             );
//           })}
//       </ul>
//     </>
//   );
// }
