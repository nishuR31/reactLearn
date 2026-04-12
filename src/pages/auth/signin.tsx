import { Link } from "react-router-dom";

export default function Signin() {
  return (
    <main>
      <header>
        <h1>Sign In</h1>
      </header>

      <section>
        <p>Use your registered account to access your dashboard.</p>
        <p>
          If you forget your password, use the Forgot page to reset it safely.
        </p>
      </section>

      <section>
        <h2>Account Login</h2>
        <form>
          <fieldset className="text-center">
            <legend>Sign In Form</legend>

            <p>
              <input
                id="email"
                placeholder="email@xyz.com"
                name="email"
                type="email"
              />
            </p>

            <p>
              <input
                id="password"
                placeholder="*******"
                name="password"
                type="password"
              />
            </p>
            <div className="justify-around flex flex-row">
              <Link to="/forgot">Forgot Password?</Link>
              <Link to="/signup">Register?</Link>
            </div>

            <button type="submit">Sign In</button>
          </fieldset>
        </form>
      </section>
    </main>
  );
}
