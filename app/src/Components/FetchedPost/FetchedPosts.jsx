import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Post from "../Posts/Post";
import { fetchedPosts } from "../../actions";

export default function FetchedPosts() {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts.FetchedPosts);
  if (!posts.length) {
    return (
      <button
        className="btn btn-primary"
        onClick={() => dispatch(fetchedPosts(posts))}
      >
        Загрузить еще постец
      </button>
    );
  }

  return posts.map((post, i) => {
    return <Post post={post} key={i} />;
  });
}
