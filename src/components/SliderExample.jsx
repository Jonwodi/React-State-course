import React, { useState } from "react"; // Import { useState } to use react state hook.

export default function SliderExample() {
  const [sliderValue, setSliderValue] = useState(0); // sliderValue is a state and it's default value is a number. setSliderValue is the function that is used to update/change the value of the state sliderValue.

  // function to update sliderValue when an event occurs
  // I would use method if I had more complex logic before updating sliderValue
  // const handleChange = (e) => {
  //   setSliderValue(e.target.value);
  // };

  return (
    <div>
      <h2>Slider Exmaple</h2>
      <input
        type="range"
        min="0"
        max="100"
        value={sliderValue}
        onChange={(e) => setSliderValue(e.target.value)} // onChange is a event handler, e stands for event. e.target.value means when an onChange event occurs target the value called sliderValue and update sliderValue any time it changes.
        // onChange={(e) => handleChange(e)} // onChange is a event handler, e stands for event. Here I'm saying when an onChange event occurs call the function handleChange with the event being the parameter. This another way of updating sliderValue similar the onChange line above. There is no prefered way it's just up to the developers preference.
      />
      <p>Slider value: {sliderValue}</p>
    </div>
  );
}
