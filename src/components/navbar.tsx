import { Link } from "react-router-dom";
import Icon from "./ui/Icon";

export default function Navbar() {
  return (
    <nav>
      <section>
        <div className="flex flex-wrap justify-around pt-5">
          <Link className="flex flex-row flex-wrap gap-x-2 " to="/">
            <Icon name="House" className="sm:flex md:hidden lg:flex" />
            <span className="hidden lg:flex">Home</span>
          </Link>
          <Link className="flex flex-row flex-wrap gap-x-2 " to="/members">
            <Icon name="Users" className="sm:flex md:hidden lg:flex" />
            <span className="hidden lg:flex">Members</span>
          </Link>
          <Link className="flex flex-row flex-wrap gap-x-2 " to="/about">
            <Icon name="Book" className="sm:flex md:hidden lg:flex" />
            <span className="hidden lg:flex">About</span>
          </Link>
          <Link className="flex flex-row flex-wrap gap-x-2 " to="/skills">
            <Icon name="Layers" className="sm:flex md:hidden lg:flex" />
            <span className="hidden lg:flex">Skills</span>
          </Link>
          <Link className="flex flex-row flex-wrap gap-x-2 " to="/signin">
            <Icon name="LogIn" className="sm:flex md:hidden lg:flex" />
            <span className="hidden lg:flex">Sign In</span>
          </Link>
        </div>
      </section>
    </nav>
  );
}
