"use client";
import Image from "next/image";
import type { CommentItem as CommentItemType } from "@/public/data/comments-data";
import ReplyForm from "./ReplyForm";

interface CommentItemProps {
  comment: CommentItemType;
  showReply: boolean;
  onToggleReply: () => void;
}

const CommentItem = ({
  comment,
  showReply,
  onToggleReply,
}: CommentItemProps) => {
  return (
    <div
      className={`comment-single ${
        comment.isReply ? "comment-single-reply" : ""
      } fade-up`}
    >
      <div className="author">
        <Image
          src={comment.avatar}
          alt={comment.avatarAlt}
          priority={comment.id === 1}
        />
      </div>
      <div className="author-review">
        <div className="author-meta">
          <div className="author-info">
            <p className="text-xxl fw-5 maison-neue mt-0">{comment.author}</p>
          </div>
          <div className="author-cta">
            <p className="txt-light">
              <span className="comment-date">{comment.date}</span> /{" "}
              <span className="comment-time">{comment.time}</span>
            </p>
            <div className="reply-button">
              <button
                type="button"
                aria-label="Reply"
                className={showReply ? "active" : ""}
                onClick={onToggleReply}
              >
                Reply
              </button>
            </div>
          </div>
        </div>
        <div className="author-content mt-30">
          <p className="txt-light">{comment.content}</p>
        </div>
        <div
          className={`reply-comment-wrapper ${
            showReply ? "reply-comment-wrapper--active" : ""
          }`}
        >
          <ReplyForm />
        </div>
      </div>
    </div>
  );
};

export default CommentItem;
