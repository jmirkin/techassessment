import React from "react";

export default function Section1(props) {
  return (
    <section>
      <h2>JavaScript</h2>
      <div
        className="javascript-questions"
        style={{ height: 500, overflowY: "auto" }}
      >
        <div>
          What is scope and how does it relate to closure? If it helps,
          Illustrate closure with a piece of code.
        </div>
        <div>
          Describe two paradigms that are used in javascript programming. Do you
          prefer one over the other and why?
        </div>
        <div>What is partial application and how is it helpful?</div>
        <div>
          What are two-way data binding and one-way data flow, and how are they
          different?
        </div>
        <div>What is composition and how is it helpful?</div>
        <div>
          What is asynchronous programming, and why is it important in
          JavaScript?
        </div>
        <div>
          If you were to design a findAll utility that searches an array and
          returns an array with all matches, how would you go about it?
        </div>
        <div>
          If you were to set up an event listeners on an undetermined number of
          list items, how would you go about it?
        </div>
      </div>
    </section>
  );
}
