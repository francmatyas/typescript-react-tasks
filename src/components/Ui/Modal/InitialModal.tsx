import { Modal, Button } from "react-bootstrap";
import logo from "../../../assets/img/to-do-list.png";

import "./InitialModal.scss";

interface InitialModalProps {
  show: boolean;
  onHide: () => void;
}

function InitialModal(props: InitialModalProps) {
  const { onHide } = props;

  return (
    <div id="initial-modal">
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
        <Modal.Body id="initial-modal__body">
          <img src={logo} alt="to do list" />
          <div>
            <p>
              This is a DEMO task manager application built with{" "}
              <strong>React JS</strong>. You can create new tasks, mark them as
              completed or favorite.
            </p>
            <p>You can also sort tasks by date, title or favorite.</p>
            <p>Enjoy!</p>
            <address className="initial-modal__author">
              By{" "}
              <a rel="author" href="https://www.francmatyas.com/">
                Matyáš Franc
              </a>
            </address>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            style={{
              backgroundColor: "#f2d492",
              border: "none",
              color: "#23272a",
            }}
            onClick={onHide}
          >
            Continue
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default InitialModal;
