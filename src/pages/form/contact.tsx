export default function Contact() {
  return (
    <main>
      <header>
        <h1>Contact</h1>
      </header>

      <section>
        <p>Please fill out the form below to contact us.</p>

        <form>
          <fieldset>
            <legend>Contact Form</legend>

            <p>
              <label htmlFor="name">Name</label>
              <br />
              <input id="name" name="name" type="text" />
            </p>

            <p>
              <label htmlFor="email">Email</label>
              <br />
              <input id="email" name="email" type="email" />
            </p>

            <p>
              <label htmlFor="message">Message</label>
              <br />
              <textarea id="message" name="message" rows={5} />
            </p>

            <button type="submit">Send</button>
          </fieldset>
        </form>
      </section>
    </main>
  );
}
