export function ErrorPage() {
  return (
    <main>
      <header>
        <h1>Route Not Found</h1>
      </header>

      <section>
        <p>
          The page you are looking for does not exist or the URL is invalid.
        </p>
        <p>
          Please check the address and try again, or go back to known pages like
          Home, Signin, or Contact.
        </p>
      </section>

      <section>
        <h2>What you can do</h2>
        <p>1. Verify the URL spelling</p>
        <p>2. Use the navigation links to open a valid route</p>
        <p>3. Return to the homepage and continue browsing</p>
      </section>
    </main>
  );
}
