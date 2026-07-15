import { subscribeNewsletter } from "@/actions/newsletter";

const NewsLetter = () => {
  return (
    <form action={subscribeNewsletter}>
      <div className="form-group">
        <input
          type="email"
          name="sub-email"
          placeholder="Your Email"
          autoComplete="email"
          required
        />
        <button
          type="submit"
          className="btn-secondary"
          aria-label="subscribe our newsletter"
          title="subscribe our newsletter"
        >
          <span className="btn-animated-text" data-text="Subscribe">
            Subscribe
          </span>
        </button>
      </div>
    </form>
  );
};

export default NewsLetter;
