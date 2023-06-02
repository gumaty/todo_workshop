import React, {useEffect, useState} from "react";
import { createRoot } from "react-dom/client";
import AddNewTask from "./components/AddNewTask";
import TaskList from "./components/TaskList";
import {API_KEY, API_URL} from "./api/constants";

function App() {

    const [tasks, setTasks] =useState([]);

    const getTasks = () => {
        fetch(`${API_URL}/tasks`, {
            headers: {
                Authorization: API_KEY,
            },
        })
            .then((response) => response.json())
            .then((data) => { setTasks(data.data); })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        getTasks()
    }, [])


  return (

      <>
        <AddNewTask tasks={tasks} setTasks={setTasks}/>

        <TaskList tasks={tasks} setTasks={setTasks}/>
      </>

  );
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
