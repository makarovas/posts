import React from "react";
import Post from "../Posts/Post";
export default function FetchedPosts({ posts }) {
  if (!posts.length) {
    return <button className="btn btn-primary">Загрузить еще постец</button>;
  }

  return posts.map((post, i) => {
    return <Post post={post} key={i} />;
  });
}
