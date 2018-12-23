import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <div className="home">
      <h1>Hiit timer</h1>
      <p>Are you ready for a great workout ?</p>
      <div>
        <Link to="/settings">Let's go</Link>
      </div>
    </div>
  );
};
