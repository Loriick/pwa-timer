import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <div>
      <h1>Hiit timer</h1>
      <p>Are you ready for a great workout session ?</p>
      <Link to="/settings">
        <div>Let's go</div>
      </Link>
    </div>
  );
};
