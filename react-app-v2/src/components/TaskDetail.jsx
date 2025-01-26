// This line imports the useState hook from React. This is used to manage the state of the newTitle variable
import { useState } from "react";

// This line imports the prototype library for type-checking props passed to the TaskDetail component.
import PropTypes from "prop-types";

// Imports the useParams and useNavigate hooks from react-router-dom. The useParams Access the dynamic route parameters like id in the URL. UseNavigate provides navigation functionality to programmaticaly redirects users to another route. These hooks are important for working with routing in the TaskDetail component.
import { useParams, useNavigate } from "react-router-dom";

// Defines a functional component TaskDetail thag takes two props, task which is an array of task objects and updateTask which is a function to update a specific task.
const TaskDetail = ({ tasks, updateTask }) => {
  // This line destructures the id parameter from the URL using the useParse hook. The id is used to find the corosponding task in the task array.
  const { id } = useParams();

  // Initializes the navigation function using the useNavigate hook. This function is used to redirect the user back to the todo poage after updating the task.
  const navigate = useNavigate();

  // Searches the tasks array for a task that has an id that matches the id paramater from the URL. Then parseInt(id) converts the id string to a number for comparison. This ensures the component works with the correct task based on the route.
  const task = tasks.find((task) => task.id === parseInt(id));

  // Inintailizes a state varibe called newState with the tasks  current title (as long as the task exist) or emptry string. SetNewTitle is a function used to update newTitle. Thuis stores the users edited title of the task.
  const [newTitle, setNewTitle] = useState(task ? task.title : "");

  // Displays the message task not found if the task with the given id isnt found in the task array.
  if (!task) {
    return <h2>Task not found</h2>;
  }

  // This line validtates that newTitle is not empty,m then calls the updateTask function passing the task.id and newTitle to update the task in the parent state. Afterwhich it redirects the user to the todo page using navigate.
  const handleUpdate = () => {
    if (!newTitle.trim()) {
      alert("Task title cannot be empty!");
      return;
    }
    updateTask(task.id, newTitle);
    navigate("/todo");
  };

  // Displays the task ID using {task.id}, then provides an input pre-filled with the current task title (value={newTitle}). After it Updates the newTitle state when the input changes (onChange)

  // Clicking the update task button will trigger the handle function function.
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Task Detail</h1>
      <p>Task ID: {task.id}</p>
      <input
        type="text"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
        style={{ marginRight: "10px" }}
      />
      <button onClick={handleUpdate}>Update Task</button>
    </div>
  );
};

// This line validates that the task prop is an array of objects, where each object has and id: which is a required number and a title: which is a required function. This ensures the taskdetail component recieves the expected props. This reduces potential runtime errors.
TaskDetail.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  updateTask: PropTypes.func.isRequired,
};

// Exports the TaskDetail component allowing this file to be imported into other files.
export default TaskDetail;
