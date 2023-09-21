import React from "react";
import "./Body.css";
import Post from "../Post/Post";

const Body = ({ posts, setPosts }) => {
  return (
    <div className="body__container">
      <div className="posts__container">
        {posts.length
          ? posts.map((post) => <Post key={post.id} post={post} setPosts={setPosts}></Post>)
          : null}
      </div>
    </div>
  );
};

export default Body;
