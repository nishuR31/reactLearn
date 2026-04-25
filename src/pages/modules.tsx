import { lazy } from "react";
const Module = lazy(() => import("../implimentation/module.tsx"));

export default function Modules() {
  return (
    <>
      <p>
        Here we got to knew about some usefull modules or imports we should use
        to enhance our React applications.
      </p>
      <p>Some of them are third part as well as some are built-in.</p>
      <code>
        <p>Like we have sonner for toast</p>
        <p>suspense and lazy from react itself</p>
        <p>
          Like we have react-router-dom for Link,outlet, navigators, params,
          searching in url queries
        </p>
        <p>Like we have react-icons, lucide react for icons</p>
        <p>
          Like we have react-query for data fetching and caching but we can do
          it manually too
        </p>
        <p>
          Like we have react-hook-form for form handling and validation but we
          can do it manually too
        </p>
        <p>
          Like we have react-table for table management and data display but we
          can do it manually too
        </p>
      </code>
      <Module />
    </>
  );
}
