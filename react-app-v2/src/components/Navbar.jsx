// Imports the link component from the react-router-app library. This is used to create navigation links that allow the user to move between different routes in a react application without refreshing the page.
import { Link } from "react-router-dom";

// Defines a functional component named Navbar using an arrow function. This component represents the navigation bar of the App.
const Navbar = () => {
  // Starts the JSX block.
  return (
    <nav style={{ padding: "10px", background: "#282c34", color: "white" }}>
      {/* Create an unordered list to structure my nav links */}
      <ul
        style={{
          display: "flex",
          listStyle: "none",
          gap: "20px",
          margin: "0",
          padding: "0",
        }}
      >
        {/* The link to my home page*/}
        <li>
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            Home
          </Link>
        </li>

        {/* The link to my Movie Search App*/}
        <li>
          <Link
            to="/movie-search"
            style={{ color: "white", textDecoration: "none" }}
          >
            Movie Search
          </Link>
        </li>

        {/* The link to my counter App*/}
        <li>
          <Link
            to="/counter"
            style={{ color: "white", textDecoration: "none" }}
          >
            Counter App
          </Link>
        </li>

        {/* The link to my todo list app*/}
        <li>
          <Link to="/todo" style={{ color: "white", textDecoration: "none" }}>
            To-Do List
          </Link>
        </li>
      </ul>
    </nav>
  );
};

// Exports my navbar component allowing it to be imported into other files.
export default Navbar;
