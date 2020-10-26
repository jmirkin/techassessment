import { Link } from "react-router-dom";
import React from "react";

export default function Menu(props) {
  return (
    <ul className="menu">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/section-1">Section 1</Link>
      </li>
      <li>
        <Link to="/section-2">Section 2</Link>
      </li>
      <li>
        <Link to="/section-3">Section 3</Link>
      </li>
    </ul>
  );
}
