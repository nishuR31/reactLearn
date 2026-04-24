import { Link } from "react-router-dom";
import logo from "../assets/react.svg";
import { links } from "../pages/home";

import Button from "./ui/Button";

export default function Footer() {
  const year: number = new Date().getFullYear();

  return (
    <>
      <footer className="pt-5">
        <Link to="/">
          <img
            className="hover:grayscale-0 grayscale transition-all delay-500 animate-spin"
            title="React Logo"
            src={logo}
          />
        </Link>

        <nav aria-label="Footer navigation">
          <div className="flex flex-wrap flex-row justify-around">
            {links.map((link, id) => (
              <Link key={id} to={`/${link}`}>
                {link}
              </Link>
            ))}
          </div>
        </nav>
        <div className="justify-around flex pt-2">
          <p>© {year} React Learn. All rights reserved.</p>
          <p>Learnt and Made by Nishan and Nishant</p>
          <div>
            <Button
              icon="ChevronUp"
              variant="ghost"
              onClick={() =>
                globalThis.scrollTo({ top: 0, behavior: "smooth" })
              }
            />
          </div>
        </div>
      </footer>
    </>
  );
}
