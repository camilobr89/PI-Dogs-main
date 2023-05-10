import React  from "react";
import "./styles/ModalDetail.Module.css";






export default function Modal({id, openModal,  name, image, temperament, temperaments, max_weight, min_weight, life_span, min_height, max_height}) {
 

  return (
    <div className={`modalBackground ${  openModal &&  'modal-open'} `}>
     
      <div className={`modalContainer ${'modal-open' }`} >
        <div className={`titleCloseBtn `}>
         
        </div>


        
        <div className="modal-dog"  >
        
          <img src={image} alt="img not found" />
          

          <h3>ID:<br/><br />
          {id}</h3>
        
          <h3>Name:<br/><br />
          {name}</h3>
         
          
          <p>Weight: <br/>         
          {min_weight} - {max_weight} Kg</p>

          <p>Life Span: <br/>{life_span}</p>

          <p>Height:<br/> {min_height} - {max_height} cms</p>
         
          
          <p className="temperament">Temperament:  <br/>        
          {temperament} {temperaments}</p>
          
             

        </div>


      </div>
    </div>
  );
}


