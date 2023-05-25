import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getNameDog } from '../redux/actions';
import style from './styles/SearchBar.module.css'
import ModalCreate from "./ModalCreate";



export default function SearchBar(){

    const [modalOpen, setModalOpen] = useState(false);
    

    const dispatch = useDispatch()
    const [name, setName] = useState("")

    useEffect(() => {
        
        if (name) {
            dispatch(getNameDog(name));
        }
    }, [name, dispatch]); 

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
                    className={style.input}
                    placeholder='Search by name...'
                    value={name}
                    autoComplete='off'
                    onKeyPress={e => e.key === 'Enter' && handleSubmit(e)}
                    onChange = {(e) => handleInputChange(e)}
                    />

                    

      
                    <button className={style.btn} 
                    
                    
                    onClick={() => {
                        setModalOpen(true);
                    }}

                    >Create</button>
                    {modalOpen && <ModalCreate setOpenModal={setModalOpen} />}
                    

            
                    
                  
                    
                    

                </div>
                
        )
}