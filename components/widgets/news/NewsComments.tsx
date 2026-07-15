"use client";
import dynamic from "next/dynamic";
import { useState } from "react";
import { commentsData } from "@/public/data/comments-data";

const CommentItem = dynamic(() => import("./CommentItem"));

const NewsComments = () => {
  const [activeReply, setActiveReply] = useState<number | null>(null);
  return (
    <div className="news-details__review pt-140">
      <div className="news-details__review-intro">
        <h4 className="title-lg-sm title-animation fw-5 neutral-top">
          {commentsData.length} Comments
        </h4>
      </div>
      <div className="comment-single-wrapper">
        {commentsData.map((comment) => (
          <CommentItem
            key={comment.id}
            comment={comment}
            showReply={activeReply === comment.id}
            onToggleReply={() =>
              setActiveReply((prev) =>
                prev === comment.id ? null : comment.id,
              )
            }
          />
        ))}
      </div>
    </div>
  );
};

export default NewsComments;
