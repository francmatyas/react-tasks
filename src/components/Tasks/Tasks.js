import "./Tasks.scss";

import { useState } from "react";

import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

import Task from "./Task/Task";

function Tasks(props) {
  const [showCompleted, setShowCompleted] = useState(true);

  function showCompletedHandler() {
    setShowCompleted(!showCompleted);
  }
  const sortLabels = [" ", "Date", "Favorite", "Title"];

  const sortedTasks = [
    [...props.data],
    [...sortByDate(props.data)],
    [...sortByFavourite(props.data)],
    [...sortByAlphabetical(props.data)],
  ];

  function sortByAlphabetical(data) {
    let sortedData = [...data];
    return sortedData.sort((a, b) => a.title.localeCompare(b.title));
  }
  function sortByFavourite(data) {
    let sortedData = [...data];
    return sortedData.sort((a, b) => b.favorite - a.favorite);
  }
  function sortByDate(data) {
    let sortedData = [...data];
    return sortedData.sort((a, b) => a.completion - b.completion);
  }
  function editTaskHandler(task) {
    props.onEditTask(task);
  }

  const uncompletedTasks = sortedTasks[props.sort].filter(
    (task) => !task.completed
  );
  const completedTasks = sortedTasks[props.sort].filter(
    (task) => task.completed
  );

  return (
    <section id="tasks">
      {uncompletedTasks.map((task) => (
        <Task data={task} key={task.id} onEditTask={editTaskHandler} />
      ))}
      <div id="tasks-completed">
        <button
          onClick={showCompletedHandler}
          id="tasks-completed__button"
        >
          {showCompleted ? (
            <IoIosArrowDown size={24} />
          ) : (
            <IoIosArrowUp size={24} />
          )}
          {" Completed"}
        </button>
        {showCompleted && <div id="tasks-separator__line"></div>}
      </div>

      {showCompleted &&
        completedTasks.map((task) => (
          <Task data={task} key={task.id} onEditTask={editTaskHandler} />
        ))}
      {props.sort != 0 ? (
        <div className="tasks-sort__display">
          <div className="sort-arrow__label">{sortLabels[props.sort]}</div>
          <div className="tasks-sort__arrow">
            <i className="sort-arrow sort-arrow__up"></i>
            <div className="sort-arrow__line"></div>
            <i className="sort-arrow sort-arrow__down"></i>
          </div>
        </div>
      ) : null}
    </section>
  );
}

export default Tasks;
