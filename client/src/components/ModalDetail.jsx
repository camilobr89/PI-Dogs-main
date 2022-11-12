import React  from "react";
import "./styles/ModalDetail.Module.css";
import Detail from "./Detail";



export default function Modal({ setOpenModal }, { data }) {

  

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>

        <div>
          hola mundo
        </div>

    


        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button>Continue</button>
        </div>

       
           
        

      </div>
    </div>
  );
}


