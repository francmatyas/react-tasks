import "./Toolbar.scss";

import { BsPlusLg } from "react-icons/bs";
import { Form, InputGroup, Button } from "react-bootstrap";

function Toolbar() {
  return (
    <div className="toolbar">
      <InputGroup className="toolbar-input__container">
        <Form.Control
          type="text"
          placeholder="Add a new task"
          className="toolbar-input__task"
        />
        <button className="toolbar-input__confirm">
          <BsPlusLg size={20} />
        </button>
      </InputGroup>
    </div>
  );
}
export default Toolbar;
