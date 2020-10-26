import logo from "../active_alert.png";
import HelpfulLinks from "./HelpfulLinks";
import React from "react";

export default function Home(props) {
  return (
    <div className="home">
      <div>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <p>US Engineering Solutions</p>
      <p>Front End Assignment</p>
      <HelpfulLinks />
    </div>
  );
}
