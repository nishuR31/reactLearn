import { Outlet } from "react-router-dom";
import Footer from "../components/footer";

export default function ErrorLayout() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
}
