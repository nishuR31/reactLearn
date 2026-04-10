import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <section>
        <h2>Site Footer</h2>
        <p>Simple navigation links for quick access.</p>
      </section>

      <nav aria-label="Footer navigation">
        <h3>Quick Pages</h3>
        <div className="flex flex-wrap flex-row justify-around">
          <p>
            <Link to="/">Homepage</Link>
          </p>
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
            <Link to="/signin">Signin</Link>
          </p>
          <p>
            <Link to="/signup">Signup</Link>
          </p>
          <p>
            <Link to="/forgot">Forgot</Link>
          </p>
          <p>
            <Link to="/two-factor">TwoFA</Link>
          </p>
          <p>
            <Link to="/cache">Cache</Link>
          </p>
          <p>
            <Link to="/privacy">Privacy</Link>
          </p>
          <p>
            <Link to="/uptime">Uptime</Link>
          </p>
          <p>
            <Link to="/contact">Contact</Link>
          </p>
          <p>
            <Link to="/faqs">Faqs</Link>
          </p>
          <p>
            <Link to="/lol">Error</Link>
          </p>
        </div>
      </nav>

      <section>
        <p>© {year} React Learn. All rights reserved.</p>
      </section>
    </footer>
  );
}
