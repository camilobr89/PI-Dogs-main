import React from "react";
import { Link } from "react-router-dom";
import style from './styles/Card.module.css'



export default function Card({name, image, id, max_weight, min_weight,temperament, temperaments}) {
    
    return (
        <div className  = { style.box }  >
            
         
                <div className={style.content}>
                        <h4 >Nombre: {name}</h4>
                        <img className={style.img} src={image} alt="img not found"  />
                        <h6 >Peso: {min_weight} - {max_weight} Kg</h6>
                        <h5 className={style.temperament}>Temperament: {temperament} {temperaments}</h5>
                    
                </div>
               
            
            
        </div>
    )
}

// to ={`/dogs/${id}`}