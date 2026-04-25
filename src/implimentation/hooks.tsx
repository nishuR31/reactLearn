import {
  useState,
  useEffect,
  useTransition,
  useReducer,
  useCallback,
  useMemo,
  memo,
  type ChangeEvent,
} from "react";

const importedHooks = [
  "useState",
  "useEffect",
  "useTransition",
  "useReducer",
  "useCallback",
  "useMemo",
];

import { Link, useLocation, useParams } from "react-router-dom";

const hooks = memo(() => {
  const url = useLocation();

  const [date, setDate] = useState<string | null>(null);
  const [id, setId] = useState<number>(0);
  const [data, setData] = useState<unknown>(null);
  const [num, setNum] = useState<number>(0);
  const [isPending, startTransition] = useTransition();

  type CounterState = { count: number };
  type CounterAction = { type: "increment" } | { type: "decrement" };

  const reducer = (
    prevState: CounterState,
    action: CounterAction,
  ): CounterState => {
    switch (action.type) {
      case "increment":
        return { count: prevState.count + 1 };
      case "decrement":
        return { count: prevState.count - 1 };
      default:
        return prevState;
    }
  };

  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const apiCall = useCallback(
    async (targetId: number) => {
      if (!targetId) return;

      const res = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${targetId}`,
      );
      const responseData: unknown = await res.json();
      startTransition(() => setData(responseData));
    },
    [startTransition],
  );

  const factorial = useMemo(
    () =>
      (num: number): number => {
        if (num < 0) return 0;

        const map: Record<number, number> = { 0: 1, 1: 1 };

        const calc = (n: number): number => {
          if (n in map) return map[n]!;

          const value = n * calc(n - 1);
          map[n] = value;
          return value;
        };

        return calc(num);
      },
    [],
  );

  const factorialValue = useMemo(() => factorial(num), [factorial, num]);

  const handleNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNum(Number(e.currentTarget.value) || 0);
  };

  const handleId = (e: ChangeEvent<HTMLInputElement>) =>
    setId(Number(e.currentTarget.value));

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date().toLocaleDateString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <h1>Here in this page we are using hooks like:</h1>
      <ul>
        {importedHooks.map((hookName) => (
          <li key={hookName}>{hookName}</li>
        ))}
      </ul>
      <input
        type="number"
        placeholder="Enter Number:"
        value={num}
        onChange={handleNumberChange}
      />
      <p>Factorial: {factorialValue}</p>
      <p>Counter: {state.count}</p>
      <button type="button" onClick={() => dispatch({ type: "increment" })}>
        Increment
      </button>
      <button type="button" onClick={() => dispatch({ type: "decrement" })}>
        Decrement
      </button>
      <input placeholder="Type id: 1,2,3..." onChange={handleId} />
      <button type="button" onClick={() => void apiCall(id ?? 0)}>
        Fetch
      </button>
      <p>{isPending ? "Loading..." : "Idle"}</p>
      <code>{url}</code>
      <pre>{JSON.stringify(data, null, 2)}</pre>

      <p>Current route id: {id ?? "N/A"}</p>
      <p>Today: {date ?? "loading..."}</p>
      <Link to="/">Go Home</Link>
    </>
  );
});

export default hooks;

//439
// 80days
