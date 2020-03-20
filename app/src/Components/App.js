import React from "react";
import "./App.css";
import ChildComponent from "./ChildComponent";

function App() {
  return (
    <div className="container pt-3">
      <div className="row">
        <div className="col">
          <from>Form</from>
        </div>
      </div>
      <div className="row">
        <div className="col">Posts</div>
        <div className="col">Fetched Posts</div>
      </div>
    </div>
  );
}

export default App;
