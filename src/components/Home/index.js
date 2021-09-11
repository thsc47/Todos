import { useEffect, useState } from "react";
import APIHandler from "../../APIHandler";
const API = new APIHandler("http://localhost:5000");

function Home() {
  const [tasks, setTasks] = useState([]);

  const fetchDb = async () => {
    const { data } = await API.getAllTasks();
    setTasks(data);
  };

  useEffect(() => {
    fetchDb();
  }, []);

  return (
    <div className="App">
      <ul>
        {tasks.map((task, index) => (
          <li key={task._id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
