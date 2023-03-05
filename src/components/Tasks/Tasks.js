import "./Tasks.scss";

import { useState } from "react";

import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

import Task from "./Task/Task";
import SortLabel from "./SortLabel/SortLabel";

function Tasks(props) {
  const [showCompleted, setShowCompleted] = useState(true);
  const tasks = props.data;

  function showCompletedHandler() {
    setShowCompleted(!showCompleted);
  }

  const sortedTasks = [
    [...tasks.getTasks()],
    [...tasks.sortByDate()],
    [...tasks.sortByFavorite()],
    [...tasks.sortByTitle()],
  ];

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
        <button onClick={showCompletedHandler} id="tasks-completed__button">
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

      <SortLabel sort={props.sort} />
    </section>
  );
}

export default Tasks;
