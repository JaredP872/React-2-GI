// imports the usestate hook from react. This is used to add state management to functional components. In this case its being used to keep track of the counter value.
import { useState } from "react";
// imports my counter.css file.
import "./counter.css";

// Defining a functional component named Counter using an arrow function. This component is where the counter logic will be.
const Counter = () => {
  // This initializes a state variable called count with a default value of 0 and provides a function setCount to update it. The count state stores the current counter value and updates when the button increment or decrement is clicked.
  const [count, setCount] = useState(0);

  // This line defines the increment function which increases the count by 1 .
  const increment = () => setCount(count + 1);

  // This line defines the decriment function which decreses  the count by 1 .
  const decrement = () => setCount(count - 1);

  // This line starts the JSX block that will define the components UI.
  return (
    <div className="container">
      {/* displays the h1 text My Counter App on the UI */}
      <h1>My Counter App</h1>
      {/* Dispplays the current value of count inside of the h2 element */}
      <h2>{count}</h2>

      {/* Creates a button that when clicked calls the decrement function */}
      <button className="myButtons" onClick={decrement}>
        Decrement
      </button>

      {/* Creates a button that when clicked calls the increment function */}
      <button className="myButtons" onClick={increment}>
        Increment
      </button>
    </div>
  );
};

// Exports the Counter component so it can be imported and used in other files.
export default Counter;
