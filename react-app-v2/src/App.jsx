// imports the usestate hook from react
import { useState, useEffect } from "react";

// imports the routing components from react-router-dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Below im importing the components that will be used in my app.
import Navbar from "./components/Navbar";
import MovieSearchApp from "./components/MovieSearchApp";
import CounterApp from "./components/CounterApp";
import TodoListApp from "./components/TodoListApp";
import TaskDetail from "./components/TaskDetail";

// This line i defining the main app component using an arrow function.
const App = () => {
  // Initializes the tasks state and loads tasks from localStorage if available
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  // Iterates over the task array using the map method. If the id of task matches the given id then it creates a new task object with the updated title.  Otherwise the task wont change. Then finally it updates the task state with the modified array.
  const updateTask = (id, newTitle) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, title: newTitle } : task
    );
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks)); // Updates localStorage
  };

  // Syncs tasks to localStorage whenever the tasks state changes
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Wrapping the app in the router component to enable routing. Then render the navbar to the top. The navbar contains links for my navigation.
  return (
    <Router>
      <Navbar />
      {/* Starts the routes container to define all the routes. */}
      <Routes>
        {/* Defines the route for my home page */}
        <Route path="/" element={<h1>Corptechs Apps Inc.</h1>} />
        {/* Defines the route for my movie-search app */}
        <Route path="/movie-search" element={<MovieSearchApp />} />
        {/* Defines the route for my counter app */}
        <Route path="/counter" element={<CounterApp />} />
        {/* Defines the route for my todo list app */}
        <Route
          path="/todo"
          element={<TodoListApp tasks={tasks} setTasks={setTasks} />}
        />
        {/* Defines the dynamic /task/:id where id: represents a task unique identifier */}
        <Route
          path="/task/:id"
          element={<TaskDetail tasks={tasks} updateTask={updateTask} />}
        />
        {/* Defines a wildcard route that matches any undefined url */}
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </Router>
  );
};

// exports this file allowing it to be imported in other files.
export default App;
