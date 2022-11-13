import React  from "react";
import "./styles/ModalDetail.Module.css";


export default function Modal({openModal,  name, image, temperament, temperaments, max_weight, min_weight}) {

  return (
    <div className={`modalBackground ${  openModal &&  'modal-open'} `}>
     
      <div className={`modalContainer ${'modal-open' }`} >
        <div className={`titleCloseBtn `}>
         
        </div>

        <div className={`modal-dog`}  >
        
          <img src={image} alt="img not found" />
          <br /><br />
          <h4>Nombre:
          <br /><br />{name}</h4>
          <br /><br />
          <h6>Peso: 
          <br /><br />{min_weight} - {max_weight} Kg</h6>
          <h5>Temperament: 
          <br />
          <br />{temperament} {temperaments}</h5>

        </div>


      </div>
    </div>
  );
}


