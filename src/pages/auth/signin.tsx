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
          <fieldset>
            <legend>Sign In Form</legend>

            <p>
              <label htmlFor="email">Email</label>
              <br />
              <input id="email" name="email" type="email" />
            </p>

            <p>
              <label htmlFor="password">Password</label>
              <br />
              <input id="password" name="password" type="password" />
            </p>

            <button type="submit">Sign In</button>
          </fieldset>
        </form>
      </section>
    </main>
  );
}
