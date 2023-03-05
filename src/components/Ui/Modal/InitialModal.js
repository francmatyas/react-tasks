import { Modal, Button } from "react-bootstrap";
import logo from "../../../assets/img/to-do-list.png";

import "./InitialModal.scss";

function InitialModal(props) {
  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        backdrop
      >
        <Modal.Header closeButton>
          <Modal.Title>Welcome to Tasks DEMO!</Modal.Title>
        </Modal.Header>
        <Modal.Body className="initial-modal__body">
          <img src={logo} alt="to do list" />
          <div>
            <p>
              This is a DEMO task manager application built with{" "}
              <strong>React JS</strong>. You can create new tasks, mark them as
              completed or favorite.
            </p>
            <p>You can also sort tasks by date, title or favorite.</p>
            <p>Enjoy!</p>
            <address className="initial-modal__author">By Matyáš Franc</address>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            style={{
              backgroundColor: "#f2d492",
              border: "none",
              color: "#23272a",
            }}
            onClick={props.onHide}
          >
            Continue
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default InitialModal;
