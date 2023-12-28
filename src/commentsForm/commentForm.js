// CommentForm.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./commentForm.css";
import { addComment } from "../Action/action";

const CommentForm = ({ postId }) => {
  const dispatch = useDispatch();
  const [comment, setComment] = useState("");
  const userName = useSelector((state) => state.userName);

  const handleCommentSubmit = () => {
    const finalUserName = userName || "User";
    dispatch(
      addComment({
        postId,
        comment: { userName: finalUserName, text: comment },
      })
    );
    setComment("");
  };

  return (
    <div>
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        class="comment"
      />
      <br />
      <button onClick={handleCommentSubmit} class="button-2">
        Add Comment
      </button>
    </div>
  );
};

export default CommentForm;
