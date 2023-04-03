import React, { useState } from "react"; // Import { useState } to use react state hook.

export default function FormExample() {
  const [firstName, setFirstName] = useState(""); // firstName is a state and it's default value is a empty string. setFirstName is the function that is used to update/change the value of the state firstName.
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  // function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // prevents entire page from reloading when the form is submitted
    console.log(firstName, lastName, email); // show data that was submitted in the console.log

    // clear form fields after form submission
    setFirstName("");
    setLastName("");
    setEmail("");
  };

  return (
    // onSubmit event handler should always be added to the form html element when daealing with forms. When an onSubmit event occurs handleSubmit function is called with an event as its parameter.
    <form onSubmit={(e) => handleSubmit(e)}>
      <p>
        <label>
          First Name:
          <input
            type="text"
            name="firstname"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)} // onChange is an event handler, e stands for event, e.target.value means when the onChange event occurs target the value which in this case is firstName, update firstName with the current value.
          />
        </label>
      </p>
      <p>
        <label>
          Last Name:
          <input
            type="text"
            name="lastname"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)} // onChange is an event handler, e stands for event, e.target.value means when the onChange event occurs target the value which in this case is lastName, update lastName with the current value.
          />
        </label>
      </p>
      <p>
        <label>
          Email:
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // onChange is an event handler, e stands for event, e.target.value means when the onChange event occurs target the value which in this case is email, update email with the current value.
          />
        </label>
      </p>
      <p>
        <input type="submit" value="Submit" />
      </p>
    </form>
  );
}
