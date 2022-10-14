import { Alert } from "react-bootstrap";
import "./NewTaskAlert.scss";

function NewTaskAlert(props) {
  return (
    <Alert
      {...props}
      variant="success"
      key={Math.random().toString()}
      className="new-task-alert"
      dismissible
    >
      <Alert.Heading>Well done!</Alert.Heading>
      <p>You have successfully created a new task.</p>
    </Alert>
  );
}

export default NewTaskAlert;