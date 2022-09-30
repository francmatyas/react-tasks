import "./Toolbar.scss";

import { useState } from "react";

import { BsPlusLg } from "react-icons/bs";
import { Form, InputGroup } from "react-bootstrap";

function Toolbar(props) {
  const [task, setTask] = useState("");

  function taskChangeHandler(event) {
    setTask(event.target.value);
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
