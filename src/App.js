import React, { useEffect, useState } from "react";
import "./App.css";
import Body from "./components/Body/Body";
import Header from "./components/Header/Header";

function App() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (!localStorage.getItem("posts")) {
      localStorage.setItem("posts", JSON.stringify(posts));
      return;
    }
    setPosts(JSON.parse(localStorage.getItem("posts")));
  }, []);
  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);
  return (
    <div className="container">
      <Header
        title={title}
        setTitle={setTitle}
        posts={posts}
        setPosts={setPosts}
      ></Header>
      <Body posts={posts} setPosts={setPosts}></Body>
    </div>
  );
}

export default App;
