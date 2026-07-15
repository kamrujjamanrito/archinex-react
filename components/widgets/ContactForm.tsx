import { submitContactForm } from "@/actions/contact";

const ContactForm = () => {
  return (
    <form action={submitContactForm} className="mt-30">
      <div className="input-single">
        <input
          type="text"
          name="user-name"
          id="userName"
          placeholder="Your Name"
          autoComplete="name"
          required
        />
      </div>

      <div className="input-single">
        <input
          type="email"
          name="user-email"
          id="userEmail"
          placeholder="Enter Your Email"
          autoComplete="email"
          required
        />
      </div>

      <div className="input-single">
        <input
          type="url"
          name="user-web"
          id="userWeb"
          placeholder="Website (Optional)"
          autoComplete="url"
        />
      </div>

      <div className="input-single">
        <textarea
          name="user-message"
          id="userMessage"
          placeholder="Write Your Message"
          required
        ></textarea>
      </div>

      <div className="mt-20">
        <button
          type="submit"
          className="btn-secondary"
          title="submit message"
          aria-label="submit message"
        >
          <span className="btn-animated-text" data-text="Send Message">
            Send Message
          </span>
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
