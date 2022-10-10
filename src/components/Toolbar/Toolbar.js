import "./Toolbar.scss";

import { useState } from "react";

import { BsPlusLg } from "react-icons/bs";
import { Form, InputGroup } from "react-bootstrap";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { MdSort, MdDateRange, MdFavorite, MdSortByAlpha } from "react-icons/md";

function Toolbar(props) {
  const [task, setTask] = useState("");
  const [darkMode, setDarkMode] = useState(true);
  const [sort, setSort] = useState(props.sort);

  const selectIcons = [
    <MdSort size={20} />,
    <MdDateRange size={20} />,
    <MdFavorite size={20} />,
    <MdSortByAlpha size={20} />,
  ];

  function taskChangeHandler(event) {
    setTask(event.target.value);
  }
  function darkModeChangeHandler() {
    setDarkMode(!darkMode);
  }

  function addTaskHandler() {
    if (task !== "") {
      const newTask = {
        title: task,
        completed: false,
        id: Math.random(),
      };
      setTask("");

      props.onTaskAdd(newTask);
    }
  }
  function sortChangeHandler(event) {
    setSort(event.target.value);
    props.onSortChange(event.target.value);
  }

  return (
    <header className="toolbar">
      <button
        onClick={darkModeChangeHandler}
        className="toolbar-visual__switch"
      >
        {darkMode ? (
          <BsFillMoonStarsFill size={20} />
        ) : (
          <BsFillSunFill size={25} />
        )}
      </button>
      <InputGroup className="toolbar-input__container">
        <Form.Control
          type="text"
          value={task}
          placeholder="Add a new task"
          className="toolbar-input__task"
          onChange={taskChangeHandler}
          onKeyPress={(event) => {
            event.key === "Enter" && addTaskHandler();
          }}
        />
        <button
          onClick={addTaskHandler}
          type="submit"
          className="toolbar-input__confirm"
        >
          <BsPlusLg size={20} />
        </button>
      </InputGroup>
      <InputGroup className="toolbar-sort__container">
        <Form.Select
          onChange={sortChangeHandler}
          className="toolbar-sort__select"
        >
          <option value="0">Sort by</option>
          <option value="1">Date</option>
          <option value="2">Favorite</option>
          <option value="3">Title</option>
        </Form.Select>
        <InputGroup.Text className="toolbar-sort__icon">
          {selectIcons[sort]}
        </InputGroup.Text>
      </InputGroup>
    </header>
  );
}
export default Toolbar;
