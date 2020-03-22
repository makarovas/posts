import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Post from "../Posts/Post";
import { fetchPosts } from "../../actions";

export default function FetchedPosts() {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts.fetchedPosts);
  const loading = useSelector(state => state.app.loading);
  if (loading) {
    return (
      <div className="spinner-border text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    );
  }
  if (!posts.length) {
    return (
      <button
        className="btn btn-primary"
        onClick={() => dispatch(fetchPosts(posts))}
      >
        Загрузить еще постец
      </button>
    );
  }

  return posts.map((post, i) => {
    return <Post post={post} key={i} />;
  });
}
