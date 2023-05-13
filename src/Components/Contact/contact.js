import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import "./contact.css";

function ContactForm() {
  const [state, handleSubmit] = useForm("xayzkjne");
  if (state.succeeded) {
    return <p>Message envoyé !</p>;
  }
  return (
    <div className="container_contact">
      <div className="contact">
        {" "}
        <h2 id="Contact">Contact</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email :</label>
          <input id="email" type="email" name="email" />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <label htmlFor="message">Message :</label>
          <textarea id="message" name="message" />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button type="submit" disabled={state.submitting}>
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
}

function App() {
  return <ContactForm />;
}

export default App;
