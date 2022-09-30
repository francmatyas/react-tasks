import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { useState } from "react";

import Main from "./components/Main/Main";
import Toolbar from "./components/Toolbar/Toolbar";

const DUMMY_TASKS = [
  {
    title: "Nakoupit",
    completed: false,
    id: 1,
  },
  {
    title: "Posekat",
    completed: false,
    id: 2,
  },
  {
    title: "Uklidit",
    completed: false,
    id: 3,
  },
  {
    title: "Jít do hospody",
    completed: true,
    id: 4,
  },
];

function App() {
  const [tasks, setTasks] = useState(DUMMY_TASKS);

  function addTaskHandler(task) {
    setTasks((prevTasks) => {
      return [task, ...prevTasks];
    });
  }

  return (
    <div>
      <Toolbar onTaskAdd={addTaskHandler} />
      <Main data={tasks} />
    </div>
  );
}

export default App;
