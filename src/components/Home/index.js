import { useEffect, useState } from "react";
import APIHandler from "../../APIHandler";
import ItemTodo from "../../ItemTodo";
import { Container, Box, StyledTextField, Button, Ul } from "../../UI";
const API = new APIHandler("http://localhost:5000");

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [completed, setCompleted] = useState(false);

  const handleChange = (e) => {
    const { value } = e.target;
    setInput(value);
  };

  const addATask = async (task) => {
    if (input.length > 0) {
      const post = await API.postATask({ title: `${input}` });
      setInput("");
      fetchDb();
    } else {
      console.log("Insert a task!");
    }
  };

  const deleteATask = async (id) => {
    const post = await API.deleteATask(id);
    fetchDb();
  };

  const updateATask = async (id) => {
    setCompleted(!completed);
    const post = await API.updateATask(id, {"completed": `${completed}`});
    console.log(post);
    fetchDb();
  };


  const fetchDb = async () => {
    const { data } = await API.getAllTasks();
    setTasks(data);
  };

  useEffect(() => {
    fetchDb();
  }, []);

  return (
    <Container>
      <Box>
        <StyledTextField
          onChange={(e) => {
            handleChange(e);
          }}
          value={input}
        />
        <Button
          onClick={() => {
            addATask(input);
          }}
        >
          Adicionar
        </Button>
        <Ul>
          {tasks.map((task) => (
            <ItemTodo
              key={task._id}
              task={{ ...task }}
              deleteATask={deleteATask}
              updateATask={updateATask}
            />
          ))}
        </Ul>
      </Box>
    </Container>
  );
};

export default Home;
