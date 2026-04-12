import { Link } from "react-router-dom";
import { Contact } from "./contact";
import Button from "./ui/Button";

export default function Footer() {
  const year: number = new Date().getFullYear();

  return (
    <footer>
      <Link to="/">
        <h2>React Learn</h2>
      </Link>

      <nav aria-label="Footer navigation">
        <div className="flex flex-wrap flex-row justify-around">
          <p>
            <Link to="/members">Members</Link>
          </p>
          <p>
            <Link to="/about">About</Link>
          </p>
          <p>
            <Link to="/skills">Skills</Link>
          </p>
          <p>
            <Link to="/privacy">Privacy Policy</Link>
          </p>
          <p>
            <Link to="/faqs">Faqs</Link>
          </p>
        </div>
        <div className="justify-self-center-safe">
          <Contact />
        </div>
      </nav>
      <div className="justify-around flex pt-2">
        <p>© {year} React Learn. All rights reserved.</p>
        <p>Learnt and Made by Nishan and Nishant</p>
        <div>
          <Button
            icon="ChevronUp"
            variant="ghost"
            onClick={() => globalThis.scrollTo({ top: 0, behavior: "smooth" })}
          />
        </div>
      </div>
    </footer>
  );
}
