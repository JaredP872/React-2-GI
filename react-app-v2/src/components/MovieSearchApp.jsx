// Imports the useState hook from React
import { useState } from "react";

// Definmes a functional component named MovieSearchApp using an arrow function
const MovieSearchApp = () => {
  // Initilizes a state variable query and a function setQuery to update it.
  const [query, setQuery] = useState("");

  // Initializes a state variable called movies which is initialy empty and a function setMovies to update it. This will store a listbof movies fethced from the API
  const [movies, setMovies] = useState([]);

  // Initializes a state variable selectedMovie initialy null and a function setSelectedMovie to update it.
  const [selectedMovie, setSelectedMovie] = useState(null);

  // Defines an async function to fetch movies from the OMDb API.
  const searchMovies = async () => {
    if (!query.trim()) {
      alert("Please enter a search term");
      return;
    }

    // Makes a GET request to the OMDb API to search for movies matching the users search query. Otherwise and error message is shown and clears the movies list.
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?s=${query}&apikey=64f1e89c`
      );
      const data = await response.json();

      if (data.Response === "True") {
        setMovies(data.Search || []);
      } else {
        alert(data.Error || "No movies found");
        setMovies([]);
      }

      // Handles any errs such as network issues.
    } catch (error) {
      console.error("Error fetching movies:", error);
      alert("An error occurred while searching for movies. Please try again.");
    }
  };

  // Defines an async function that fethces detailed information about a specific movie
  const fetchMovieDetails = async (imdbID) => {
    try {
      // My API call
      const response = await fetch(
        `http://www.omdbapi.com/?i=${imdbID}&apikey=64f1e89c`
      );
      const data = await response.json();

      // Updates the selcted movie with detailed information. Otherwise it displayes and error message that says "Failed to fetch movie details"
      if (data.Response === "True") {
        setSelectedMovie(data);
      } else {
        alert(data.Error || "Failed to fetch movie details");
      }

      // Handles edge cases
    } catch (error) {
      console.error("Error fetching movie details:", error);
      alert(
        "An error occurred while fetching movie details. Please try again."
      );
    }
  };

  // Starts the JSX block that defines the components UI. This is where the app's layout and functionality are defined.
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Movie Search App</h1>

      {/* This is a text input where the user enters there movie search and a button that triggers the searchMovies function. */}
      <input
        type="text"
        placeholder="Search for movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ marginRight: "10px" }}
      />
      <button onClick={searchMovies}>Search</button>

      {/* Maps over the movies array to display a list of movie titles and posters. Once you click on the movie it fetches it's detailed information. */}
      <div style={{ marginTop: "20px" }}>
        {movies.map((movie) => (
          <div
            key={movie.imdbID}
            style={{ margin: "10px", cursor: "pointer" }}
            onClick={() => fetchMovieDetails(movie.imdbID)}
          >
            <h3>{movie.Title}</h3>
            <img
              src={movie.Poster}
              alt={movie.Title}
              style={{ width: "100px" }}
            />
          </div>
        ))}
      </div>

      {/* Displays detailed information about the selected movie. Listing the: Title, gentre, Year, plot and so on. */}
      {selectedMovie && (
        <div style={{ marginTop: "30px", textAlign: "center" }}>
          <h2>{selectedMovie.Title}</h2>
          <p>
            <strong>Year:</strong> {selectedMovie.Year}
          </p>
          <p>
            <strong>Genre:</strong> {selectedMovie.Genre}
          </p>
          <p>
            <strong>Director:</strong> {selectedMovie.Director}
          </p>
          <p>
            <strong>Plot:</strong> {selectedMovie.Plot}
          </p>
          <p>
            <strong>IMDb Rating:</strong> {selectedMovie.imdbRating}
          </p>
          <img
            src={selectedMovie.Poster}
            alt={selectedMovie.Title}
            style={{ width: "200px", marginTop: "20px" }}
          />
        </div>
      )}
    </div>
  );
};

// Exports the MovieSearchApp component so that it can be imported into other files.
export default MovieSearchApp;
