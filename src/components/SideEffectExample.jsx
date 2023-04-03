import React, { useState, useEffect } from "react"; // Import { useState } to use react state hook. Import { useEffect } to use react effect hook.

export default function SideEffectExample() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  // This is a side effect that runs once after the render of a web page or component
  // It won't run again if a component states are updated because no states are placed in the useEffect array
  useEffect(() => {
    console.log("loaded");
  }, []);

  // Whenever the state name is updated/changed this will be the side effect
  useEffect(() => {
    console.log("name changed");
  }, [name]); // if the array in the useEffect was empty this code would only be returned once after the render of the web page or component

  // Whenever the state age is updated/changed this will be the side effect
  useEffect(() => {
    console.log("Age changed");
  }, [age]); // if the array in the useEffect was empty this code would only be returned once after the render of the web page or component

  return (
    <div>
      <h2>Side Effect Example</h2>
      <p>
        <input
          type="text"
          name="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </p>
      <p>
        <input
          type="text"
          name="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </p>
    </div>
  );
}
