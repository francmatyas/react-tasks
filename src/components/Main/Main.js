import "./Main.scss";
import Tasks from "../Tasks/Tasks";

function Main(props) {
  function editTaskHandler(task) {
    props.onEditTask(task);
  }

  return (
    <main id="main">
      <div id="main-card">
        <Tasks
          data={props.data}
          sort={props.sort}
          onEditTask={editTaskHandler}
        />
      </div>
    </main>
  );
}
export default Main;
