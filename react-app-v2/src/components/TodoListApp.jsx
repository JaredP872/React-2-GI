// Imports the useState hook form react
import { useState, useEffect } from "react";

// imports the Link component from react-router-dom
import { Link } from "react-router-dom";

// defines a functional component named todoListApp using an arrow function. This component ctotains the logic for the todolist app.
const TodoListApp = () => {
  // initializes a state variable tasks with an empty array and a funcytion setTasks to update it. Tasks stores the liost of todo items where each item is an object containing an id and title.
  const [tasks, setTasks] = useState(() => {
    // Retrieve tasks from localStorage when the component loads
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  // Initializes a state variable task with an empty string and a function setTask to update it. Task stores the current value of the input field where the user types a new todo item.
  const [task, setTask] = useState("");

  // Validate the task input to ensure its not empty or only whitespace.
  const addTask = () => {
    if (!task.trim()) {
      alert("Task cannot be empty!");
      return;
    }
    // Creates a new task object with a id Date.now and the task title.
    // Then adds the new task to the existing tasks array using the spread operator.
    const newTasks = [...tasks, { id: Date.now(), title: task }];
    setTasks(newTasks);
    // Save the updated tasks array to localStorage
    localStorage.setItem("tasks", JSON.stringify(newTasks));
    // Resets the task input to an empty string. This will allow the user to add new task to the todo list.
    setTask("");
  };

  // This limne filters out the task with the specified id from the tasks array and updates the state. This allows the user to remover tasks from the todo list.
  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    // Save the updated tasks array to localStorage
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  // Effect to sync tasks with localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Defines the JSX block to define the components UI.
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {/* Displays the main heading for the todo list app. */}
      <h1>Corptechs To-Do list</h1>

      {/* Renders an input field where the user can type a new task.  */}
      <div>
        <input
          type="text"
          placeholder="Add a task..."
          // Binds the fields value to the task state.
          value={task}
          // Updates the task state woth the current input value.
          onChange={(e) => setTask(e.target.value)}
          style={{ marginRight: "10px" }}
        />
        {/* Renders an add task button that triggers the addTask function when clicked. */}
        <button onClick={addTask}>Add task</button>
      </div>

      <div style={{ marginTop: "20px" }}>
        {/* Checks if the tasks array is empty. If it is then the UI will display the text No task available and request tge user to Add one. */}
        {tasks.length === 0 && <p>No tasks available. Add one!</p>}
        {/* Renders an unordered list */}
        <ul style={{ listStyle: "none", padding: 0 }}>
          {/* Mapping over the task array and rendering each task as a list item */}
          {tasks.map((task) => (
            <li
              key={task.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              {/* A clickable title wrapped in a link element that navigates to the detail page for the task. */}
              <Link to={`/task/${task.id}`} style={{ textDecoration: "none" }}>
                {task.title}

                {/* A delete button that triggers the delete function with the tasks id when clicked. */}
              </Link>
              <button
                onClick={() => deleteTask(task.id)}
                style={{ marginLeft: "10px" }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// Exports the TodoListApp component so that it can be imported inside of other files.
export default TodoListApp;
