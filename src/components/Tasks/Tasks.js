import "./Tasks.scss";

import { useState } from "react";

import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

import Task from "./Task/Task";

function Tasks(props) {
  const [showCompleted, setShowCompleted] = useState(true);

  function showCompletedHandler() {
    setShowCompleted(!showCompleted);
  }

  const uncompletedTasks = props.data.filter((task) => !task.completed);
  const completedTasks = props.data.filter((task) => task.completed);

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
