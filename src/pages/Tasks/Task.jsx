import { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";

const Task = ({
  task,
  onCompleteTask,
  onDeleteTask,
  onMarkAsImportant,
  onEditTask,
}) => {
  const [editTaskValue, setEditTaskValue] = useState(task.todo);
  const [show, setShow] = useState(false);

  const handleInputChange = (event) => setEditTaskValue(event.target.value);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleDelete = () => onDeleteTask(task.id);
  const handleMark = () => onMarkAsImportant(task);
  const handleSave = (e) => {
    if (e !== undefined) {
      e.preventDefault();
    }

    handleClose();
    onEditTask(task.id, editTaskValue);
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <label className={task.completed ? "completed" : undefined}>
        <input
          type="checkbox"
          className="mr-3"
          onChange={() => onCompleteTask(task)}
          checked={task.completed}
        />
        {task.isImportant && <b className="text-danger"> ! </b>}
        {task.todo}
      </label>

      <Button variant="light" onClick={handleShow}>
        <svg
          height="14pt"
          viewBox="-15 -15 484.00019 484"
          width="14pt"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="m401.648438 18.234375c-24.394532-24.351563-63.898438-24.351563-88.292969 0l-22.101563 22.222656-235.269531 235.144531-.5.503907c-.121094.121093-.121094.25-.25.25-.25.375-.625.746093-.871094 1.121093 0 .125-.128906.125-.128906.25-.25.375-.371094.625-.625 1-.121094.125-.121094.246094-.246094.375-.125.375-.25.625-.378906 1 0 .121094-.121094.121094-.121094.25l-52.199219 156.96875c-1.53125 4.46875-.367187 9.417969 2.996094 12.734376 2.363282 2.332031 5.550782 3.636718 8.867188 3.625 1.355468-.023438 2.699218-.234376 3.996094-.625l156.847656-52.324219c.121094 0 .121094 0 .25-.121094.394531-.117187.773437-.285156 1.121094-.503906.097656-.011719.183593-.054688.253906-.121094.371094-.25.871094-.503906 1.246094-.753906.371093-.246094.75-.621094 1.125-.871094.125-.128906.246093-.128906.246093-.25.128907-.125.378907-.246094.503907-.5l257.371093-257.371094c24.351563-24.394531 24.351563-63.898437 0-88.289062zm-232.273438 353.148437-86.914062-86.910156 217.535156-217.535156 86.914062 86.910156zm-99.15625-63.808593 75.929688 75.925781-114.015626 37.960938zm347.664062-184.820313-13.238281 13.363282-86.917969-86.917969 13.367188-13.359375c14.621094-14.609375 38.320312-14.609375 52.945312 0l33.964844 33.964844c14.511719 14.6875 14.457032 38.332031-.121094 52.949218zm0 0" />
        </svg>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <Form>
            <Form.Group controlId="task.item.edit">
              <Form.Label className="d-none">Example textarea</Form.Label>
              <Form.Control
                as="textarea"
                value={editTaskValue}
                onChange={handleInputChange}
                autoFocus
                required
                rows={1}
              />
            </Form.Group>
            <Form.Check
              type="switch"
              id="custom-switch"
              checked={task.isImportant}
              onChange={handleMark}
              label="Mark as Important"
            />
          </Form>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-between">
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
          <div>
            <Button className="mr-2" variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="success" onClick={handleSave}>
              Save Changes
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </li>
  );
};

export default Task;
