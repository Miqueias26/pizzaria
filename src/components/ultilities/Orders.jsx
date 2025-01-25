import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import OrdersSystem from "./OrdersPizzas";

function Orders() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="secondary" onClick={handleShow}>
        Hacer Pedido
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Comanda online</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <OrdersSystem />
        </Modal.Body>
        <Modal.Header></Modal.Header>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Hacer pedido
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Orders;
