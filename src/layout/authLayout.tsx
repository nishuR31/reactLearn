import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <>
      <Outlet />
      <div className="flex flex-row flex-wrap justify-around">
        <button onClick={() => window.history.back()}>Back</button>
        <button onClick={() => window.history.forward()}>Forward</button>
      </div>
    </>
  );
}
