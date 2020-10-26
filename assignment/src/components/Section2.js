import React from "react";
import FruitList from "./FruitList";

export default function Section2(props) {
  return (
    <section>
      <h2>React</h2>
      <div className="bold" style={{ marginTop: 10 }}>
        General React
      </div>
      <div className="spacer list">
        <li>
          The following component is used as a fruit salad builder. Find the
          problem with this component and fix it (components/FruitList.js).{" "}
          <br />
          Hint: Remove an item.
          <br />
          <br />
          Explain the problem.
          <br />
          <br />
        </li>
        <div style={{ marginLeft: 40 }}>
          <FruitList />
        </div>
        <div className="bold" style={{ marginTop: 10 }}>
          Hooks
        </div>
        <li>Create a custom hook for making an api request.</li>
      </div>
    </section>
  );
}
