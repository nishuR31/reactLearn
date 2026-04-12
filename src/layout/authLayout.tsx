import { Outlet } from "react-router-dom";
import Button from "../components/ui/Button";
export default function AuthLayout() {
  return (
    <>
      <Outlet />
      <div className="flex flex-row flex-wrap justify-around">
        <Button
          icon="CornerUpLeft"
          variant={"ghost"}
          onClick={() => globalThis.history.back()}
        >
          Back
        </Button>
        <Button
          variant={"primary"}
          icon={"CornerUpRight"}
          onClick={() => globalThis.history.forward()}
        >
          Forward
        </Button>
      </div>
    </>
  );
}
