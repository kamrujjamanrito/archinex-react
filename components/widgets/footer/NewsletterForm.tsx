import { subscribeNewsletter } from "@/actions/newsletter";

const NewsletterForm = () => {
  return (
    <form action={subscribeNewsletter} className="newsletter-animation">
      <div className="input-single">
        <input
          type="email"
          name="newsletter-email"
          placeholder="Email"
          autoComplete="email"
          required
        />

        <button
          type="submit"
          aria-label="Submit newsletter"
          title="Submit newsletter"
        >
          <span>Send</span>
          <i className="ph ph-paper-plane-right"></i>
        </button>

        <span className="underline"></span>
      </div>
    </form>
  );
};

export default NewsletterForm;
