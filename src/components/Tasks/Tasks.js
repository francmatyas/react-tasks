import "./Tasks.scss";

import { useState } from "react";

import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

import Task from "./Task/Task";

function Tasks(props) {
  const [showCompleted, setShowCompleted] = useState(true);

  function showCompletedHandler() {
    setShowCompleted(!showCompleted);
  }

  const sortedTasks = [
    [...props.data],
    [...sortByDate(props.data)],
    [...sortByFavourite(props.data)],
    [...sortByAlphabetical(props.data)],
  ];

  function sortByAlphabetical(data) {
    let sortedData = [...data]
    return sortedData.sort((a, b) => a.title.localeCompare(b.title));
  }
  function sortByDate(data) {
    let sortedData = [...data]
    return sortedData.sort((a, b) => a.date - b.date);
  }
  function sortByFavourite(data) {
    let sortedData = [...data]
    return sortedData.sort((a, b) => b.favorite - a.favorite);
  }

  const uncompletedTasks = sortedTasks[props.sort].filter((task) => !task.completed);
  console.log(uncompletedTasks)
  const completedTasks = sortedTasks[props.sort].filter((task) => task.completed);

  return (
    <div className="tasks">
      {uncompletedTasks.map((task) => (
        <Task data={task} key={task.id} />
      ))}
      <div className="tasks-completed">
        <button
          onClick={showCompletedHandler}
          className="tasks-completed__button"
        >
          {showCompleted ? (
            <IoIosArrowDown size={25} />
          ) : (
            <IoIosArrowUp size={25} />
          )}
          {" Completed"}
        </button>
        {showCompleted && <div className="tasks-completed__line"></div>}
      </div>

      {showCompleted &&
        completedTasks.map((task) => <Task data={task} key={task.id} />)}
    </div>
  );
}

export default Tasks;
