import { useEffect, useState } from "react";
import axiosInstance from "../utils/axiosInstance";
import "../styles/dashboard.css";

function AdminDashboard() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  // Fetch all tasks
  const fetchTasks = async () => {
    try {
      const res = await axiosInstance.get("/tasks");
      setTasks(res.data);
    } catch (err) {
      console.error("Failed to fetch tasks");
    }
  };

  // Admin create task
  const addTask = async () => {
    if (!title) return;

    try {
      await axiosInstance.post("/tasks", { title });
      setTitle("");
      fetchTasks();
    } catch (err) {
      alert("Failed to create task");
    }
  };

  // Update task
  const updateTask = async (id) => {
    const newTitle = prompt("Enter new task title");
    if (!newTitle) return;

    try {
      await axiosInstance.put(`/tasks/${id}`, { title: newTitle });
      fetchTasks();
    } catch (err) {
      alert("Failed to update task");
    }
  };

  // Delete task
  const deleteTask = async (id) => {
    if (!window.confirm("Delete this task?")) return;

    try {
      await axiosInstance.delete(`/tasks/${id}`);
      fetchTasks();
    } catch (err) {
      alert("Failed to delete task");
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="dashboard">
      <h2>Admin Dashboard</h2>

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
          <div>
            <strong>{task.title}</strong>
            <p className="task-owner">
              Created by: {task.createdBy?.name} ({task.createdBy?.email})
            </p>
          </div>

          <div className="task-actions">
            <button onClick={() => updateTask(task._id)}>Edit</button>
            <button onClick={() => deleteTask(task._id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AdminDashboard;
