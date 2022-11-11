import React from "react";
import Nav from "./Nav";
import style from './styles/About.module.css'
import MyImg from '../img/About.jpg'

export default function About () {
return(
    <div>
        <div>
            <Nav />
        </div>
        <div className={style.card}>
            <h1 className={style.name}>Santiago Parra Moreno</h1>
            <img className={style.img} src={MyImg} alt="img" />
            <h2>Full Stack Developer</h2>
            <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui commodi facilis quibusdam in! Labore, quis veniam! Similique porro nobis enim itaque sapiente magni deleniti ab voluptatem, possimus culpa fuga assumenda!</h4>

        </div>
    </div>
)
}