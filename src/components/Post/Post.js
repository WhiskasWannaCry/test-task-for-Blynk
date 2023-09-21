import React, { useState } from "react";
import "./Post.css";
import Comment from "../Comment/Comment";
import generateRandomId from "../shared/generateRandomId";
import removeBtn from "../../images/remove_button.png";

const Post = ({ post, setPosts }) => {
  const { title, comments } = post;
  const [commentText, setCommentText] = useState("");
  const [color, setColor] = useState("#000000");
  const [allComments, setAllComments] = useState(false);
  const regex = /^(?!\s*$).+/;

  const handleCommentBtn = (e) => {
    e.preventDefault();
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
        <img
          className="remove__post"
          src={removeBtn}
          alt=""
          onClick={handleRemoveBtn}
        ></img>
      </div>
      <div className="post__title">{title}</div>
      {comments.length ? (
        <div className="comments">
          <h3 className="comments__title">Comments</h3>
          {comments.length > 3 ? (
            !allComments ? (
              <span style={{"cursor":"pointer"}} onClick={() => setAllComments(!allComments)}>
                Show all comments..
              </span>
            ) : (
              <span style={{"cursor":"pointer"}}  onClick={() => setAllComments(!allComments)}>
                Hide comments..
              </span>
            )
          ) : null}
          {comments.length && allComments
            ? comments.map((comment) => (
                <Comment key={comment.id} comment={comment}></Comment>
              ))
            : comments.map(
                (comment, idx) =>
                  idx < 3 && (
                    <Comment key={comment.id} comment={comment}></Comment>
                  )
              )}
        </div>
      ) : null}
      <form className="create__comment__container">
        <input
          placeholder="Enter your comment..."
          type="text"
          className="text__comment"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        ></input>
        <div className="create_comment_btn_container">
          <label className="choose__text_color_title">
            Choose color for comment
          </label>
          <input
            type="color"
            className="choose__text__color"
            value={color}
            onInput={(e) => setColor(e.target.value)}
          ></input>
          <button
            type="submit"
            className="create_comment_btn"
            onClick={(e) => handleCommentBtn(e)}
          >
            Comment
          </button>
        </div>
      </form>
    </div>
  );
};

export default Post;
