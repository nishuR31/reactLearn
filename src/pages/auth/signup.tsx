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
              <label htmlFor="name">Full Name</label>
              <br />
              <input id="name" name="name" type="text" />
            </p>

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
