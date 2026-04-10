import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";

export default function FormLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <div className="flex flex-row flex-wrap justify-around">
        <button onClick={() => window.history.back()}>Back</button>
        <button onClick={() => console.log((window.location.href = "/"))}>
          Home
        </button>
        <button onClick={() => window.history.forward()}>Forward</button>
      </div>
    </>
  );
}
