import React, {useState} from "react";
import Modal from 'react-bootstrap/Modal';
import "./style.css";

function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <div className="header-nav">
      <div className="font-label">My Todo List<span className="unicorn" onClick={handleShow}>🦄</span></div>
      <Modal show={show} onHide={handleClose}>
      <div className="modalunicorn"><span className='start'>🦄</span></div>
      </Modal>
      <div className="font-label">React</div>
    </div>
    
  );
}
export default Header;
