import "./Toolbar.scss";

import { useState } from "react";
import { Task } from "../../script/TaskUtils";

import { BsPlusLg } from "react-icons/bs";
import { Form, InputGroup } from "react-bootstrap";
import { MdSort, MdDateRange, MdFavorite, MdSortByAlpha } from "react-icons/md";

function Toolbar(props) {
  const [taskTitle, setTaskTitle] = useState("");
  const [sort, setSort] = useState(props.sort);

  const selectIcons = [
    <MdSort size={20} />,
    <MdDateRange size={20} />,
    <MdFavorite size={20} />,
    <MdSortByAlpha size={20} />,
  ];

  function addTaskHandler() {
    if (taskTitle !== "") {
      const newTask = Task.newTask(taskTitle);
      setTaskTitle("");

      props.onTaskCreate(newTask);
    }
  }
  function sortChangeHandler(event) {
    setSort(event.target.value);
    props.onSortChange(parseInt(event.target.value));
  }

  return (
    <header id="toolbar">
      <InputGroup className="toolbar-input__container">
        <Form.Control
          type="text"
          value={taskTitle}
          placeholder="Add a new task"
          className="toolbar-input__task"
          onChange={(event) => setTaskTitle(event.target.value)}
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
