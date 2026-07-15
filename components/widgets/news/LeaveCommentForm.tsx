import { submitComment } from "@/actions/submit-comment";

const LeaveCommentForm = () => {
  return (
    <div className="review__form fade-up mt-80">
      <div className="review__form-intro mb-40">
        <h4 className="title-lg-sm title-animation fw-5 neutral-top">
          Leave a Comment
        </h4>
        <p className="mt-8 txt-light">
          Your email address will not be published. Required fields are marked*
        </p>
      </div>
      <form action={submitComment}>
        <div className="input-group">
          <div className="input-single">
            <input
              type="text"
              name="review-name"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="input-single">
            <input
              type="email"
              name="review-email"
              placeholder="Email Address"
              required
            />
          </div>
        </div>
        <div className="input-single mt-30">
          <textarea
            name="review-message"
            placeholder="Write Your Comment"
            required
          ></textarea>
        </div>
        <div className="check-group mt-20">
          <input type="checkbox" name="remember-info" id="rememberInfo" />
          <label htmlFor="rememberInfo" className="txt-light">
            Save my name, email address in this browser for the next time I
            comment.
          </label>
        </div>
        <div className="mt-40">
          <button
            type="submit"
            className="btn-tertiary"
            title="Submit Comment"
            aria-label="Submit Comment"
          >
            <span className="btn-animated-text" data-text="Submit Now">
              Submit Now
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default LeaveCommentForm;
