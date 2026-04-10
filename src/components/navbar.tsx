import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <section>
        <h3>Quick Pages</h3>
        <div className="flex flex-wrap justify-around">
          <Link to="/">Homepage</Link>
          <Link to="/members">Members</Link>
          <Link to="/about">About</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/signin">Signin</Link>
          <Link to="/signup">Signup</Link>
          <Link to="/forgot">Forgot</Link>
          <Link to="/cache">Cache</Link>
          <Link to="/privacy">Privacy</Link>
          <Link to="/uptime">Uptime</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/faqs">Faqs</Link>
          <Link to="/two-factor">Twofa</Link>
          <Link to="/lol">Error</Link>
        </div>
      </section>
    </nav>
  );
}
