import "./Task.scss";

import TextareaAutosize from "react-textarea-autosize";

import { useState, useEffect, useRef } from "react";

import { FiEdit2 } from "react-icons/fi";
import { BsCircle, BsCheckCircleFill } from "react-icons/bs";
import { MdFavoriteBorder, MdFavorite, MdClose } from "react-icons/md";
import DateDisplay from "../../Ui/DateDisplay";

function Task(props) {
  const [edit, setEdit] = useState(false);
  const [title, setTitle] = useState(props.data.title);
  const [completed, setCompleted] = useState(props.data.completed);
  const [favorite, setFavorite] = useState(props.data.favorite);
  const [completion, setCompletion] = useState(props.data.completion)

  const [isFirstRender, setFirstRender] = useState(true)

  useEffect(() => {
    if (isFirstRender) {
      setFirstRender(false)
      return; // skip first render
    }
    const editedTask = {
      title: title,
      completed: completed,
      favorite: favorite,
      id: props.data.id,
      completion: completion,
    };
    props.onEditTask(editedTask);
  },[title, completed, favorite, completion]);

  function editClickHandler(event) {
    event.stopPropagation();
    setEdit(!edit);
  }

  function completedClickHandler() {
    setCompleted(!completed);
  }
  function favoriteClickHandler() {
    setFavorite(!favorite);
  }
  function titleEditHandler(event) {
    setTitle(event.target.value);
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
    <div className="task">
      <div className="task__controls">
        <button
          className="task-button task__complete"
          onClick={completedClickHandler}
        >
          {completed ? <BsCheckCircleFill size={20} /> : <BsCircle size={20} />}
        </button>
        <button
          className="task-button task__controls__favorite"
          onClick={favoriteClickHandler}
        >
          {favorite ? (
            <MdFavorite size={25} style={{ color: "#EF6F6C" }} />
          ) : (
            <MdFavoriteBorder size={25} />
          )}
        </button>
      </div>

      <div className="task__title">
        {edit ? (
          <TextareaAutosize
            onChange={titleEditHandler}
            onKeyPress={(event) => {
              event.key === "Enter" && editClickHandler();
            }}
            className="task__title__input"
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
        <DateDisplay date={completion}/>
        <button
          className="task-button task__controls__edit"
          onClick={editClickHandler}
        >
          {edit ? <MdClose size={30} /> : <FiEdit2 />}
        </button>
      </div>
    </div>
  );
}
export default Task;
