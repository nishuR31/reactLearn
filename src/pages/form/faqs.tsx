export default function Faqs() {
  return (
    <main>
      <header>
        <h1>Frequently Asked Questions</h1>
      </header>

      <section>
        <h2>General</h2>

        <article>
          <h3>What is this website for?</h3>
          <p>
            This site is a React learning project with multiple routes for
            practice pages, forms, and authentication flows.
          </p>
        </article>

        <article>
          <h3>Do I need an account?</h3>
          <p>
            You can browse public pages without an account, but signup is needed
            for account-based features.
          </p>
        </article>
      </section>

      <section>
        <h2>Account</h2>

        <article>
          <h3>How do I reset my password?</h3>
          <p>
            Open the Forgot page, submit your email, and follow the reset link
            sent to your inbox.
          </p>
        </article>

        <article>
          <h3>What is two-factor authentication?</h3>
          <p>
            Two-factor authentication adds an extra verification step to improve
            account security.
          </p>
        </article>
      </section>

      <section>
        <h2>Support</h2>
        <p>
          If your question is not listed here, please use the Contact page for
          further help.
        </p>
      </section>
    </main>
  );
}
