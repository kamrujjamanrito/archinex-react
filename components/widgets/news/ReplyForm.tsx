import { submitCommentReply } from "@/actions/submit-comment-reply";

const ReplyForm = () => {
  return (
    <div className="reply-comment">
      <form action={submitCommentReply}>
        <div className="input-single">
          <textarea
            name="reply-message"
            placeholder="Join the discussion..."
            required
          />
        </div>
        <div className="btn-wrapper mt-20">
          <button type="submit" className="btn-primary">
            <span className="btn-animated-text" data-text="Reply">
              Reply
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReplyForm;
