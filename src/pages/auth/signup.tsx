import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <main>
      <header>
        <h1>Sign Up</h1>
      </header>

      <section>
        <p>
          Create a new account to start learning and tracking your progress.
        </p>
        <p>
          Use a valid email and a strong password so your account stays secure.
        </p>
      </section>

      <section>
        <h2>Create Account</h2>
        <form>
          <fieldset>
            <legend>Signup Form</legend>

            <p>
              <input id="name" placeholder="name is?" name="name" type="text" />
            </p>

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
                placeholder="********"
                id="password"
                name="password"
                type="password"
              />
            </p>
            <div className="justify-around flex flex-wrap">
              <Link to="/signin">Already an Member?</Link>
              <Link to="/">Home?</Link>
            </div>

            <button type="submit">Create Account</button>
          </fieldset>
        </form>
      </section>

      <section>
        <h2>Note</h2>
        <p>
          After signup, you may be asked to verify your email before signing in.
        </p>
      </section>
    </main>
  );
}
