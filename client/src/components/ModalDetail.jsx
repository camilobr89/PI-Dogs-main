import React  from "react";
import "./styles/ModalDetail.Module.css";
import { useState } from "react";





export default function Modal({  name, image, temperament, temperaments, max_weight, min_weight}) {

const [closeModal, setCloseModal] = useState(true)

const handleClose = () => {
    setCloseModal(false)
}
  

  return (
    <div className={`modalBackground ${ 'modal-open'} `}>
      <div className={`modalContainer ${ 'modal-open ' }`}>
        <div className={`titleCloseBtn ${ 'modal-open' }`}>
         
        </div>

        <div>
          hola mundo   
        </div>

        <div className={`modal-dog  `}  >
        <button onClick={handleClose}>closeModal</button>
          <img src={image} alt="img not found" />
          
          <h4>Nombre: {name}</h4>
          <h6>Peso: {min_weight} - {max_weight} Kg</h6>
          <h5>Temperament: {temperament} {temperaments}</h5>

        </div>

  
      

    



      </div>
    </div>
  );
}


