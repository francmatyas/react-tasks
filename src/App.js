import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import DUMMY_TASKS from "./assets/data/DUMMY_TASKS.json";
import { Tasks } from "./script/TaskUtils";

import { useState } from "react";
import { useCookies } from "react-cookie";

import Main from "./components/Main/Main";
import Toolbar from "./components/Toolbar/Toolbar";
import InitialModal from "./components/Ui/Modal/InitialModal";
import NewTaskAlert from "./components/Ui/Alert/NewTaskAlert";

function App() {
  const [tasks, setTasks] = useState(Tasks.fromJSON(DUMMY_TASKS));
  const [sort, setSort] = useState(0);
  const [taskCreated, setTaskCreated] = useState(false);

  function addTaskHandler(task) {
    tasks.addTask(task);
    const newTasks = Tasks.fromClass(tasks);
    setTasks(newTasks);

    setTaskCreated(true);
    setTimeout(function () {
      setTaskCreated(false);
    }, 2500);
  }

  function editTaskHandler(task) {
    tasks.editTask(task);
    const newTasks = Tasks.fromClass(tasks);
    setTasks(newTasks);
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
    <div id="App">
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
