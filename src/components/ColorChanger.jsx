import React, { useState } from "react"; // Import { useState } to use react state hook.

export default function ColorChanger() {
  const [bgColor, setBgColor] = useState("lightgreen"); // bgColor is a state and it's default value is a string css color value. setBgColor is the function that is used to update/change the value of the state bgColor.

  // function to update bgColor
  const handleClick = () => {
    console.log("I was clicked");
    setBgColor(bgColor === "lightgreen" ? "red" : "lightgreen"); // tenary operator to update value of the state bgColor
  };

  return (
    <div>
      <h2>Color Changer</h2>
      <div
        style={{
          width: "200px",
          height: "200px",
          backgroundColor: bgColor,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
        Change me!
      </div>
      {/* onClick is a event handeler. When a onClick event occurs the handleClick function is called. */}
      <button onClick={() => handleClick()}>Click me</button>
    </div>
  );
}
