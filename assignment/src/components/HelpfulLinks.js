import React from "react";

export default function HelpfulLinks(props) {
  return (
    <div className="links">
      <p>Helpful links</p>
      <a
        className="App-link"
        href="https://ecma-international.org/ecma-262/10.0/index.html"
        target="_blank"
        rel="noopener noreferrer"
      >
        JavaScript Spec
      </a>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        React Documentation
      </a>
      <a
        className="App-link"
        href="https://reactjs.org/docs/hooks-intro.html"
        target="_blank"
        rel="noopener noreferrer"
      >
        React Hooks Documentation
      </a>
      <a
        className="App-link"
        href="https://redux.js.org/api/api-reference"
        target="_blank"
        rel="noopener noreferrer"
      >
        Redux API
      </a>
      <a
        className="App-link"
        href="https://reactrouter.com/web/guides/quick-start"
        target="_blank"
        rel="noopener noreferrer"
      >
        React-router
      </a>
    </div>
  );
}
