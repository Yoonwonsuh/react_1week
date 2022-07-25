import React, {useState} from "react";
import { useEffect } from "react";
import Modal from 'react-bootstrap/Modal';
import "./style.css";

function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let [fade, setFade] = useState('');

  useEffect(()=>{
      let a = setTimeout(()=>{setFade('end')},10)

    return()=>{
      clearTimeout(a)
      setFade('')
    }
  },[]);

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
