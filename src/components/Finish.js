import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <div className="home">
      <h1>Hiit timer</h1>
      <p className="congrat">
        Congratulation
        <span role="img" aria-label="emojis">
          🔥💪
        </span>
      </p>
      <div>
        <Link to="/">Home</Link>
      </div>
    </div>
  );
};
