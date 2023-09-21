import React from "react";
import "./Comment.css";

const Comment = ({ comment }) => {
  const {commentText, color} = comment;
  return <div className="comment" style={{color}}>{commentText}</div>;
};

export default Comment;
