import React from "react";
import "./Header.css";
import generateRandomId from "../shared/generateRandomId"

const Header = ({ title, setTitle, posts, setPosts }) => {
  const regex = /^(?!\s*$).+/;
  const handleCreatePost = () => {
    if(!regex.test(title)) {
      alert("Title is not valid!")
      return
    }
    const post = {
      id: generateRandomId(),
      title,
      comments: [],
    };
    setPosts((prev) => [post, ...prev]);
    setTitle('')
  };

  return (
    <div className="header__container">
      <div className="title__container">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="title"
        ></input>
      </div>
      <button className="create__post" onClick={handleCreatePost}>
        +
      </button>
    </div>
  );
};

export default Header;
