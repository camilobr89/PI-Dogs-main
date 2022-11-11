import React from 'react'
import {Link} from "react-router-dom";
import style from './styles/Nav.module.css'


function Nav() {

    return (
            <div className={style.container}>
                <div className={style.links}>
                    <Link to= '/dogs'> <button>Home</button></Link>
                    <Link to = '/dogs/create'> <button> Create</button></Link>
                    <Link to = '/dogs/about'> <button> About</button></Link>
                </div>
                {/* <div>
                    <SearchBar />
                </div> */}
                <div className={style.landing}>
                    <a href="https://santt-dogs.vercel.app/"><h1>SPA Dogs</h1></a>
                </div>
            </div>
    )
}

export default Nav