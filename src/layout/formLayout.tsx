import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import Button from "../components/ui/Button";

export default function FormLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <div className="flex flex-row flex-wrap justify-around">
        <Button
          onClick={() => globalThis.history.back()}
          text="Back"
          icon="CornerUpLeft"
        />
        <Button
          text="Home"
          onClick={() => (globalThis.location.href = "/")}
          icon="House"
        />
        <Button
          text="Forward"
          onClick={() => globalThis.history.forward()}
          icon="CornerUpRight"
        />
      </div>
    </>
  );
}
