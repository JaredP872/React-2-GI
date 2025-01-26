import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import MovieSearchApp from "./components/MovieSearchApp";
import CounterApp from "./components/CounterApp";
import TodoListApp from "./components/TodoListApp";
import TaskDetail from "./components/TaskDetail";

const App = () => {
  const [tasks, setTasks] = useState([]);

  // Update a task
  const updateTask = (id, newTitle) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, title: newTitle } : task
      )
    );
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>Corptech</h1>} />
        <Route path="/movie-search" element={<MovieSearchApp />} />
        <Route path="/counter" element={<CounterApp />} />
        <Route
          path="/todo"
          element={<TodoListApp tasks={tasks} setTasks={setTasks} />}
        />
        <Route
          path="/task/:id"
          element={<TaskDetail tasks={tasks} updateTask={updateTask} />}
        />
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
