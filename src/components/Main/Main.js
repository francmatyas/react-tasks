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
        <span id="main-author">
        This is a demo aplication created by{" "}
        <a rel="author" href="https://www.francmatyas.com/">
          Matyáš Franc
        </a>
      </span>
      </div>
    </main>
  );
}
export default Main;
