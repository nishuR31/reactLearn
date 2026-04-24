const hookConfig: Record<string, any> = {
  useState: {
    use: "used to maintain state in functional compo,think like each memory of each function of component",
    exmaple: "counters,colours,themes,etc",
    syntax: `import { useState } from 'react';
const [state, setState] = useState(initialState);
console.log(state); //intialState;
setState(newState); // updates state and re-renders component`,
  },
  useRef: {
    use: "used to create a mutable reference to a value that persists across renders, it does not cause re-renders when the value changes and is often used to acces dom directly and access or store values",
    example: "DOM nodes, previous values",
    syntax: `import { useRef } from 'react';
const ref = useRef(initialValue);
        console.log(ref.current); // initialValue`,
  },
  useEffect: {
    use: "used to perform side effects in functional components with depencencies, it runs after the render and can be used for various purposes like fetching data, setting up subscriptions, or manually manipulating the DOM. In development is follows mounting,unmounting and remounting to show sideeffects and how they work",
    example:
      "API calls, subscriptions, manual DOM manipulations and causes re-rendering when dependencies changes",
    syntax: `
        import { useEffect } from 'react';
useEffect(() => {
// effect code
// optional cleanup code but recoommended to avoid memory leaks
}, ['dependencies']);`,
  },
  useTransition: {
    use: "used to start a transition when updating state, have isPending to check if the transition is ongoing and startTransition to start the transition, it allows you to mark updates as non-urgent and can help improve the user experience by preventing jank and keeping the UI responsive during updates, its like telling react to treat this work as low priority and to do when it have time to do it and not to do it immediately and to delay it until the current render is committed",
    example: "delaying updates until after the current render is committed",
    syntax: `import { useTransition } from 'react';
const [isPending, startTransition] = useTransition();
startTransition(() => {
setState(heavyCalculationResult());
}
`,
  },
  useMemo: {
    use: "used to memoize expensive calculations and to prevent unnecessary re-computations, it takes a function and an array of dependencies and returns a memoized value that only changes when one of the dependencies changes, it can be used to optimize performance by avoiding expensive calculations on every render cause functions do rerender on every render and if we have expensive calculations in them it can cause performance issues and by using useMemo we can memoize the result of the calculation and only re-calculate it when the dependencies change",
    example:
      "calculating derived values, expensive operations like sorting or filtering large lists",
    syntax: `
        import {useMemo} from "react";
        const memoizedValue = useMemo(() => {
          // calculation code
        }, [dependencies]);
        `,
  },
  useCallback: {
    use: "used to memoize functions and prevent unnecessary re-creations, it takes a function and an array of dependencies and returns a memoized function that only changes when one of the dependencies changes, it can be used to optimize performance by avoiding unnecessary function re-creations on every render",
    example: "passing functions as props to child components",
    syntax: `import { useCallback } from 'react';
const memoizedCallback = useCallback(() => {
  // function code
}, [dependencies]);
`,
  },
  useContext: {
    use: "used to access the value of a context or think of it like a global in memory db from where any component can access it, it takes a context object and returns the current value of that context",
    example:
      "sharing data between components without passing props down manually, solves problem of prop drilling",
    syntax: `import { useContext } from 'react';
const value = useContext(Context);
//later we will do 
// <value.Provider value={someValue} /> to provide the value to the context and then we can access it in any component that is a child of the provider like

let value=useContext(SomeContext);
<div>{value}</div>
`,
  },
  
  useReducer: {
    use: "used to manage complex state logic in a component, it takes a reducer function and an initial state and returns the current state and a dispatch function to update the state,think of it like a more powerful useState or useState or steriods",
    example:
      "managing complex state logic, handling multiple related state updates",
    syntax: `import { useReducer } from 'react';
const [state, dispatch] = useReducer(reducer, initialState);

let reducer=(state, action)=>{
switch(action.value){
case "increment":
return state+1; 
case "decrement":
return state-1;}

<button onClick={()=>dispatch({value:"increment"})}>Increment</button>
<button onClick={()=>dispatch({value:"decrement"})}>Decrement</button>
`,
  },
};

export default function Hooks() {
  return (
    <>
      <div>
        Here are the <b>Hooks</b> we have learned:
      </div>
      {Object.keys(hookConfig).map((hook, id) => (
        <HookDetails key={id} hook={hook} id={id} />
      ))}
    </>
  );
}

export function HookDetails({
  hook,
  id,
}: {
  hook: keyof typeof hookConfig;
  id: number;
}) {
  const config = hookConfig[hook];
  return (
    <div>
      <div key={id}>
        <h2>{hook}</h2>
        <p>
          <strong>Use:</strong> {config.use}
        </p>
        <p>
          <strong>Example:</strong> {config.example}
        </p>
        <pre>
          <code>{config.syntax}</code>
        </pre>
      </div>
    </div>
  );
}
