import "./Task.scss";

import TextareaAutosize from "react-textarea-autosize";

import { useState } from "react";

import { FiEdit2 } from "react-icons/fi";
import { BsCircle, BsCheckCircleFill } from "react-icons/bs";
import { MdFavoriteBorder, MdFavorite, MdDone } from "react-icons/md";
import DateDisplay from "../DateDisplay/DateDisplay";

function Task(props) {
  const task = props.data;

  const [edit, setEdit] = useState(false);
  const [title, setTitle] = useState(task.title);

  function editTitleHandler(event) {
    event.stopPropagation();
    if (edit) {
      task.title = title;
      props.onEditTask(task);
    }
    setEdit(!edit);
  }

  return (
    <div id="task">
      <div className="task__controls">
        <button
          className="task-button task__complete"
          onClick={() => {
            task.completed = !task.completed;
            props.onEditTask(task);
          }}
        >
          {task.completed ? (
            <BsCheckCircleFill size={20} />
          ) : (
            <BsCircle size={20} />
          )}
        </button>
        <button
          className="task-button task__controls__favorite"
          onClick={() => {
            task.favorite = !task.favorite;
            props.onEditTask(task);
          }}
        >
          {task.favorite ? (
            <MdFavorite size={24} style={{ color: "#EF6F6C" }} />
          ) : (
            <MdFavoriteBorder size={24} />
          )}
        </button>
      </div>

      <div id="task__title">
        {edit ? (
          <TextareaAutosize
            onChange={(event) => setTitle(event.target.value)}
            onKeyPress={(event) => {
              event.key === "Enter" && editTitleHandler();
            }}
            id="task__title__input"
            placeholder={title}
            value={title}
            maxRows={5}
          ></TextareaAutosize>
        ) : (
          <h3 onDoubleClick={editTitleHandler}>{title}</h3>
        )}
      </div>
      <div className="task__controls">
        <DateDisplay date={task.completion} />
        <button
          className="task-button task__controls__edit"
          onClick={editTitleHandler}
        >
          {edit ? <MdDone size={24} /> : <FiEdit2 size={24} />}
        </button>
      </div>
    </div>
  );
}
export default Task;
