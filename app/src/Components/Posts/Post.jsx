import React from "react";

export default function Post({ post }) {
  return (
    <div className="card" style={{ width: "18rem", color: "black" }}>
      <div className="card-body">
        <h5 className="card-title">{post.title || "title"}</h5>
        {/* <p className="card-text">{post.}</p> */}
      </div>
    </div>
  );
}
