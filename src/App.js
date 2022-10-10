import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import DUMMY_TASKS from "./data/DUMMY_TASKS.json";

import { useState } from "react";

import Main from "./components/Main/Main";
import Toolbar from "./components/Toolbar/Toolbar";
import { BsSortAlphaUp } from "react-icons/bs";

function App() {
  const [tasks, setTasks] = useState(DUMMY_TASKS);
  const [sort, setSort] = useState(0);

  function addTaskHandler(task) {
    setTasks((prevTasks) => {
      return [task, ...prevTasks];
    });
  }
  function editTaskHandler(task) {
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks];
      const taskIndex = updatedTasks.findIndex((t) => t.id === task.id);
      updatedTasks[taskIndex] = task;
      return updatedTasks;
    });
  }
  function sortChangeHandler(sort) {
    setSort(sort);
    console.log(sort);
  }

  return (
    <div>
      <Toolbar
        onTaskAdd={addTaskHandler}
        onSortChange={sortChangeHandler}
        sort={sort}
      />
      <Main data={tasks} sort={sort} onEditTask={editTaskHandler} />
    </div>
  );
}

export default App;
