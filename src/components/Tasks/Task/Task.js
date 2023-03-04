import "./Task.scss";

import TextareaAutosize from "react-textarea-autosize";

import { useState, useEffect, useRef } from "react";

import { FiEdit2 } from "react-icons/fi";
import { BsCircle, BsCheckCircleFill } from "react-icons/bs";
import { MdFavoriteBorder, MdFavorite, MdDone } from "react-icons/md";
import DateDisplay from "../DateDisplay/DateDisplay";

function Task(props) {
  const [edit, setEdit] = useState(false);
  const [title, setTitle] = useState(props.data.title);
  const [completed, setCompleted] = useState(props.data.completed);
  const [favorite, setFavorite] = useState(props.data.favorite);
  const [completion, setCompletion] = useState(props.data.completion);

  const [isFirstRender, setFirstRender] = useState(true);

  useEffect(() => {
    if (isFirstRender) {
      setFirstRender(false);
      return;
    }
    const editedTask = {
      title: title,
      completed: completed,
      favorite: favorite,
      id: props.data.id,
      completion: completion,
    };
    props.onEditTask(editedTask);
  }, [title, completed, favorite, completion]);

  function editClickHandler(event) {
    event.stopPropagation();
    setEdit(!edit);
  }

  function clickOutsideHandler() {
    setEdit(false);
  }

  const ref = useOutsideClick(clickOutsideHandler);

  function useOutsideClick(callback) {
    const ref = useRef();

    useEffect(() => {
      const handleClick = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          callback(event);
        }
      };
      document.addEventListener("click", handleClick);
      return () => {
        document.removeEventListener("click", handleClick);
      };
    }, [ref]);
    return ref;
  }

  return (
    <div id="task">
      <div className="task__controls">
        <button
          className="task-button task__complete"
          onClick={() => setCompleted(!completed)}
        >
          {completed ? <BsCheckCircleFill size={20} /> : <BsCircle size={20} />}
        </button>
        <button
          className="task-button task__controls__favorite"
          onClick={() => setFavorite(!favorite)}
        >
          {favorite ? (
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
              event.key === "Enter" && editClickHandler();
            }}
            id="task__title__input"
            placeholder={title}
            value={title}
            maxRows={5}
            ref={ref}
          ></TextareaAutosize>
        ) : (
          <h3 onDoubleClick={editClickHandler}>{title}</h3>
        )}
      </div>
      <div className="task__controls">
        <DateDisplay date={completion} />
        <button
          className="task-button task__controls__edit"
          onClick={editClickHandler}
        >
          {edit ? <MdDone size={24} /> : <FiEdit2 size={24} />}
        </button>
      </div>
    </div>
  );
}
export default Task;
