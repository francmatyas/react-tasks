import "./Main.scss"
import Tasks from "../Tasks/Tasks";

function Main(props) {
  return (
    <div className="main">
      <div className="main-card">
        <Tasks data={props.data}/>
      </div>
    </div>
  );
}
export default Main;