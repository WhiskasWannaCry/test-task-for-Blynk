import React, { useState } from "react";
import "./Post.css";
import Comment from "../Comment/Comment";
import generateRandomId from "../generateRandomId"

const Post = ({ post, setPosts }) => {
  const { title, comments } = post;
  const [commentText, setCommentText] = useState("");
  const [color, setColor] = useState("#000000");
  const regex = /^(?!\s*$).+/;

  const handleCommentBtn = () => {
    if (!regex.test(commentText)) {
      alert("Comment is not valid!");
      return;
    }
    setPosts((prev) => {
      const copy = prev.slice();
      const idx = copy.findIndex((elem) => elem.id === post.id);
      copy[idx].comments.push({
        id: generateRandomId(),
        commentText,
        color,
      });
      return copy;
    });
    setCommentText("");
  };

  const handleRemoveBtn = () => {
    setPosts((prev) => prev.filter(({ id }) => id !== post.id));
  };

  return (
    <div className="post__container">
      <div className="remove__post__container">
        <button className="remove__post" onClick={handleRemoveBtn}>
          Remove post
        </button>
      </div>
      <div className="post__title">{title}</div>
      <div className="create__comment__container">
        <input
          type="text"
          className="text__comment"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        ></input>
        <div className="create_comment_btn_container">
          <input
            type="color"
            className="choose__text__color"
            value={color}
            onInput={(e) => setColor(e.target.value)}
          ></input>
          <button className="create_comment_btn" onClick={handleCommentBtn}>
            Comment
          </button>
        </div>
      </div>
      <div className="comments">
        {comments.length
          ? comments.map((comment) => (
              <Comment key={comment.id} comment={comment}></Comment>
            ))
          : null}
      </div>
    </div>
  );
};

export default Post;
