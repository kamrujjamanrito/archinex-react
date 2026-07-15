import { subscribeNewsletter } from "@/actions/newsletter";

const NewsletterFormTwo = () => {
  return (
    <form action={subscribeNewsletter} className="newsletter-animation">
      <div className="input-single mb-0">
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
          <i className="ph ph-arrow-right"></i>
        </button>

        <span className="underline"></span>
      </div>
    </form>
  );
};

export default NewsletterFormTwo;
