import React from "react";
import { Link } from 'react-router-dom';
import videoDog from '../assets/fondo8.mp4'
import style from './styles/LandingPage.module.css'

export default function LandingPage (){
    return (

            <div className={style.container}>

                <div className = { style.overlay }></div>
                <video src = { videoDog } autoPlay loop muted className = { style.video } />
                <div className = { style.content }>
                    <h1 > Welcome to the informative dog application! </h1>
                    <Link to = '/dogs' >
                        <br /><br />
                        <button className={style.btn}> Show more...</button>
                    </Link>

                </div>
                
                
                
            </div>
    )
}