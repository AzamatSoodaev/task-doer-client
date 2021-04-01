import { Col, Container, Modal, Row } from "react-bootstrap";

const BackgroundColor = ({ show, handleClose, setNavbarColor }) => {
  const rgbColors = [
    "rgb(0, 121, 191)",
    "rgb(210, 144, 52)",
    "rgb(81, 152, 57)",
    "rgb(176, 70, 50)",
    "rgb(137, 96, 158)",
    "rgb(205, 90, 145)",
    "rgb(75, 191, 107)",
    "rgb(0, 174, 204)",
    "rgb(131, 140, 145)",
  ];

  const changeBackgroundColor = (colorVariant) => {
    document.body.style.backgroundColor = colorVariant;
    setNavbarColor({ backgroundColor: "rgba(0,0,0,.15)" });
    localStorage.setItem(
      "customUi",
      JSON.stringify({ backgroundColor: colorVariant })
    );
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Change background</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            {rgbColors.map((variant, idx) => (
              <Col key={idx} sm="6">
                <div
                  onClick={() => changeBackgroundColor(variant)}
                  className={"p-5 mb-4 rounded" + variant}
                  style={{ backgroundColor: variant }}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
};

export default BackgroundColor;
