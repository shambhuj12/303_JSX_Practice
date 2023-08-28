//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.

import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(<h1>Homework question</h1>, document.getElementById("root"));
ReactDOM.render(
  <div>
    <h1>Homework question</h1>
    <ul>
      <li>Coffee</li>
      <li>
        Tea
        <ul>
          <li>Black Tea</li>
          <li>Green Tea</li>
        </ul>
      </li>
      <li>Milk</li>
    </ul>
  </div>,
  document.getElementById("root")
);
