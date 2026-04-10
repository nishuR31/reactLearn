export default function TwoFA() {
  return (
    <main>
      <header>
        <h1>Two-Factor Authentication</h1>
      </header>

      <section>
        <p>Enter the verification code sent to your device.</p>
        <p>
          The code is usually valid for a short time, so submit it before it
          expires.
        </p>
        <p>
          If you did not receive a code, check your message inbox and request a
          new one.
        </p>

        <form>
          <fieldset>
            <legend>Verify Code</legend>

            <p>
              <label htmlFor="otp">Authentication Code</label>
              <br />
              <input id="otp" name="otp" type="text" inputMode="numeric" />
            </p>

            <button type="submit">Verify</button>
          </fieldset>
        </form>
      </section>

      <section>
        <h2>Security Tips</h2>
        <p>Do not share your authentication code with anyone.</p>
        <p>Always verify the website address before entering your code.</p>
      </section>
    </main>
  );
}
