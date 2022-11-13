import React from "react";
import style from './styles/Card.module.css'
import { useState } from "react";
import ModalDetail from "./ModalDetail";



export default function Card({ name, image, id,  max_weight, min_weight,temperament, temperaments}) {
   
    const [isOpenModal,  setIsOpenModal ] = useState(false)



  const openModal = () => {
    if (isOpenModal === false) {
      setIsOpenModal(true)
   
    }else{
        setIsOpenModal(false)
     
    }
}

    
    return (
        <div className  = { style.box } onClick = {openModal}  >
            
                <div className={style.content} >
  
                        <h4 >Nombre: {name}</h4>
                        <img className={style.img} src={image} alt="img not found"  />
                        <h6 >Peso: {min_weight} - {max_weight} Kg</h6>
                        <h5 className={style.temperament}>Temperament: {temperament} {temperaments}</h5>
              
                </div>

                <div >
                     
                {
 
                    <ModalDetail 
                    name={name} 
                    image={image} 
                    temperament={temperament} 
                    temperaments={temperaments}
                    max_weight={max_weight} 
                    min_weight={min_weight} 
                    id={id} 
                    openModal={isOpenModal}

                    
                    /> 

                    
                }


                </div>

    
        </div>
        
    )
}

