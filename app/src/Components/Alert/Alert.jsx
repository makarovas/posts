import React from "react";

export default function Alert({ text }) {
  return (
    <div className="alert alert-info" role="alert">
      {text}
    </div>
  );
}
