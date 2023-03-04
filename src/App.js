import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import DUMMY_TASKS from "./assets/data/DUMMY_TASKS.json";
import { Task } from "./script/TaskUtils";

import { useState } from "react";
import { Cookies, useCookies } from "react-cookie";

import Main from "./components/Main/Main";
import Toolbar from "./components/Toolbar/Toolbar";
import InitialModal from "./components/Ui/Modal/InitialModal";
import NewTaskAlert from "./components/Ui/Alert/NewTaskAlert";

function App() {
  const [tasks, setTasks] = useState(
    DUMMY_TASKS.map((task) => Task.fromObject(task))
  );
  const [sort, setSort] = useState(0);
  const [taskCreated, setTaskCreated] = useState(false);

  console.log(tasks);

  function addTaskHandler(task) {
    setTasks((prevTasks) => {
      return [task, ...prevTasks];
    });
    setTaskCreated(true);

    setTimeout(
      function () {
        setTaskCreated(false);
      }.bind(this),
      2500
    );
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
    setCookie(
      "initialCookie",
      { value: true },
      { path: "/", maxAge: 60 * 60 * 24 }
    );
  }

  return (
    <div>
      <InitialModal
        show={modalShow && !cookies.initialCookie}
        onHide={initialModalCloseHandler}
      />
      <Toolbar
        onTaskCreate={addTaskHandler}
        onSortChange={sortChangeHandler}
        sort={sort}
      />
      <Main data={tasks} sort={sort} onEditTask={editTaskHandler} />
      <NewTaskAlert show={taskCreated} onClose={() => setTaskCreated(false)} />
    </div>
  );
}

export default App;
