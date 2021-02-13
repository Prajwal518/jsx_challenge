//Create a react app from scratch.
var React = require("react");
var ReactDom = require("react-dom");
//It should display a h1 heading.
ReactDom.render(
  <div>
    <h1>my fav Anime</h1>
    {/* It should display an unordered list (bullet points). */}
    <ul>
      {/* It should contain 3 list elements. */}
      <li>One Piece</li>
      <li>Death Note</li>
      <li>Ace of Diamond</li>
    </ul>
  </div>,
  document.getElementById("root")
);
