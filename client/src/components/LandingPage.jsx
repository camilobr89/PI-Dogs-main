import React from "react";
import { Link } from 'react-router-dom';
import style from './styles/LandingPage.module.css'

export default function LandingPage (){
    return (

            <div className={style.container}>
                
                <h1  className={style.welcome}> ➡  Welcome to the single page aplication for dogs! ⬅ </h1>
                <Link to = '/dogs' className={style.link}>
                    <button className={style.btn}> Get Into...</button>
                </Link>
            </div>
    )
}