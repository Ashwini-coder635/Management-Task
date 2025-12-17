import { useEffect, useState } from "react";
import axiosInstance from "../utils/axiosInstance";
import "../styles/dashboard.css";

function UserDashboard() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  // Fetch tasks
  const fetchTasks = async () => {
    try {
      const res = await axiosInstance.get("/tasks");
      setTasks(res.data);
    } catch (err) {
      console.error("Failed to fetch tasks");
    }
  };

  // Add task
  const addTask = async () => {
    if (!title) return;
    try {
      await axiosInstance.post("/tasks", { title });
      setTitle("");
      fetchTasks();
    } catch (err) {
      alert("Failed to add task");
    }
  };

  // Update task (USER → only own task, ADMIN → any task)
  const updateTask = async (id) => {
    const newTitle = prompt("Enter new task title");
    if (!newTitle) return;

    try {
      await axiosInstance.put(`/tasks/${id}`, { title: newTitle });
      fetchTasks();
    } catch (err) {
      alert("You are not allowed to update this task");
    }
  };

  // Delete task (USER → only own task, ADMIN → any task)
  const deleteTask = async (id) => {
    try {
      await axiosInstance.delete(`/tasks/${id}`);
      fetchTasks();
    } catch (err) {
      alert("You are not allowed to delete this task");
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="dashboard">
      <h2>My Tasks</h2>

      <div className="task-input">
        <input
          value={title}
          placeholder="Enter task title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
      </div>

      {tasks.map((task) => (
        <div key={task._id} className="task-box">
          <span>{task.title}</span>

          <div className="task-actions">
            <button onClick={() => updateTask(task._id)}>Edit</button>
            <button onClick={() => deleteTask(task._id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default UserDashboard;
