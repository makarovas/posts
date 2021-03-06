import React from "react";
import "./App.css";
import Posts from "../Posts";
import PostForm from "../PostsForm";
import FetchedPosts from "../FetchedPost";

export function App() {
  return (
    <div className="container pt-3">
      <div className="row">
        <div className="col">
          <PostForm />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h2>sync posts</h2>
          <Posts />
        </div>
        <div className="col">
          <h2>async posts</h2>
          <FetchedPosts />
        </div>
      </div>
    </div>
  );
}
