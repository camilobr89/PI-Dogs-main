import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getNameDog } from '../redux/actions';
import style from './styles/SearchBar.module.css'
import search from "../img/busqueda.png"


export default function SearchBar(){

    const dispatch = useDispatch()
    const [name, setName] = useState("")

    function handleInputChange (e) {
        e.preventDefault();
        setName(e.target.value);
        // console.log(name)
    }

    function handleSubmit(e){
    e.preventDefault();
    if(name.length === 0) {
        return alert ("Please write a breed")
    }else{
        dispatch(getNameDog(name));
        setName("")
        }
    }
        
        return (
        
                <div className={style.search}>
                    <input
                    type = "text"
                    placeholder='Search...'
                    value={name}
                    autoComplete='off'
                    onKeyPress={e => e.key === 'Enter' && handleSubmit(e)}
                    onChange = {(e) => handleInputChange(e)}
                    />
                    <button type = 'submit' 
                    onClick = {(e) => handleSubmit(e)} > <img src={search} alt="search" />
                    </button>
                </div>
        )
}