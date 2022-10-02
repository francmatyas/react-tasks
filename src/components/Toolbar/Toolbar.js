import "./Toolbar.scss";

import { useState } from "react";

import { BsPlusLg } from "react-icons/bs";
import { Form, InputGroup } from "react-bootstrap";
import {BsFillMoonStarsFill, BsFillSunFill} from "react-icons/bs";

function Toolbar(props) {
  const [task, setTask] = useState("");
  const [darkMode, setDarkMode] = useState(true);

  function taskChangeHandler(event) {
    setTask(event.target.value);
  }
  function darkModeChangeHandler() {
    setDarkMode(!darkMode);
  }

  function addTaskHandler() {
    const newTask = {
      title: task,
      completed: false,
      id: Math.random(),
    };
    setTask("");

    props.onTaskAdd(newTask);
  }

  return (
    <header className="toolbar">
      <button onClick={darkModeChangeHandler} className="toolbar-visual__switch">
      {darkMode ? <BsFillMoonStarsFill size={20}/> : <BsFillSunFill size={25}/>}
      </button>
      <InputGroup className="toolbar-input__container">
        <Form.Control
          type="text"
          value={task}
          placeholder="Add a new task"
          className="toolbar-input__task"
          onChange={taskChangeHandler}
          onKeyPress={(event) => {event.key === "Enter" && addTaskHandler()}}
        />
        <button onClick={addTaskHandler} type="submit" className="toolbar-input__confirm">
          <BsPlusLg size={20} />
        </button>
      </InputGroup>
    </header>
  );
}
export default Toolbar;
