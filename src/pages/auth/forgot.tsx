import { Link } from "react-router-dom";

export default function Forgot() {
  return (
    <main>
      <header>
        <h1>Forgot Password</h1>
      </header>

      <section>
        <p>If you forgot your password, you can request a reset link here.</p>
        <p>
          Enter the email linked to your account and follow the instructions in
          your inbox.
        </p>
      </section>

      <section>
        <h2>Reset Request</h2>
        <form>
          <fieldset>
            <legend>Forgot Password Form</legend>

            <p>
              <input
                placeholder="email@xyz.com"
                id="email"
                name="email"
                type="email"
              />
            </p>
            <div className="justify-around flex flex-wrap">
              <Link to="/two-factor">Other Way</Link>
              <Link to="/signin">Remeber Password?</Link>
            </div>
            <button type="submit">Send Reset Link</button>
          </fieldset>
        </form>
      </section>

      <section>
        <h2>Tips</h2>
        <p>Check spam or junk folder if the reset email does not appear.</p>
        <p>Use a strong new password that you do not reuse on other sites.</p>
      </section>
    </main>
  );
}
