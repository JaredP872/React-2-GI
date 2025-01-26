// Imports the react library
import React from "react";

// Import ReactDOM from the react-dom/client package
import ReactDOM from "react-dom/client";

// Imports the App component from "./App"
import App from "./App";

// imports the index.css file
import "./index.css";

// document.getELementById("root") Finds the HTML element with id of root in the public/index.html file.
// ReactDom.createRoot() Creates a React root for rendering the application.
// .render(...) Renders the React app into the specified root element.
ReactDOM.createRoot(document.getElementById("root")).render(
  // Wraps the App component in <React.StrictMode>. This activates additinal ch3cks and warnings during development detecting potential issues like depricated lifecycle methods.
  <React.StrictMode>
    {/* Renders the App component inside the root element */}
    <App />
  </React.StrictMode>
);
