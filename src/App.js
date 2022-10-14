import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import DUMMY_TASKS from "./data/DUMMY_TASKS.json";

import { useState } from "react";
import { Cookies, useCookies } from "react-cookie";

import Main from "./components/Main/Main";
import Toolbar from "./components/Toolbar/Toolbar";
import InitialModal from "./components/Ui/Modal/InitialModal";

function App() {
  const [tasks, setTasks] = useState(DUMMY_TASKS.map((task) => ({ ...task, completion: new Date(task.completion) })));
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
  }

  const [modalShow, setModalShow] = useState(true);
  const [cookies, setCookie] = useCookies("initialCookie");

  function initialModalCloseHandler() {
    setModalShow(false);
    setCookie("initialCookie", {value: true}, { path: "/", maxAge: 60 * 60 * 24 });
  }

  return (
    <div>
      <InitialModal
        show={modalShow && !cookies.initialCookie}
        onHide={initialModalCloseHandler}
      />
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
