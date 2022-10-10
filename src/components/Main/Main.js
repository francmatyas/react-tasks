import "./Main.scss";
import Tasks from "../Tasks/Tasks";

import ImgCalendar from "../../img/calendar.png";
import ImgCheckBox from "../../img/checkBox.png";
import ImgCheckBoxCross from "../../img/checkBoxCross.png";

function Main(props) {
  function editTaskHandler(task) {
    props.onEditTask(task);
  }

  return (
    <div className="main">
      <div className="main-card">
        <Tasks
          data={props.data}
          sort={props.sort}
          onEditTask={editTaskHandler}
        />
      </div>
    </div>
  );
}
export default Main;
