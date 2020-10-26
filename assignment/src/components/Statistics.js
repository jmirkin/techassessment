import React from "react";
import { Link } from "react-router-dom";

export default function Statistics(props) {
  return (
    <section style={{ listStyle: "none", fontSize: "1.2em" }}>
      <h3>Statistics</h3>
      <div></div>
      <li className="italic back-to-link">
        <Link to="/section-3">Back to Project descriptions (Section 3)</Link>
      </li>
    </section>
  );
}
