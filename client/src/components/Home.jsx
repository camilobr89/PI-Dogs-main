import React from "react";
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getAllDogs, getTemperaments, filterByTemperaments, filterCreated, orderSort } from '../redux/actions';
import Nav from "./Nav"
import Card from "./Card";
import SearchBar from "./SearchBar";
import Pagination from './Pagination'
import style from './styles/Home.module.css'

export default function Home (){

    const dispatch = useDispatch()
    const allDogs = useSelector ((state) => state.dogs)
    


    const [currentPage, setCurrentPage] = useState(1)
    const dogsPerPage = 8
    const numbersOfLastDog = currentPage * dogsPerPage   //8
    const numberOfFirtsDog = numbersOfLastDog - dogsPerPage //0
    const currentDog = allDogs.slice(numberOfFirtsDog, numbersOfLastDog)

    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    }


    const temperaments = useSelector ((state) => state.temperaments)
    const [temperament, setTemperament] = useState("All")

    function handleSelect(e){
    e.preventDefault()
    dispatch(filterByTemperaments(e.target.value))
    setTemperament(e.target.value)
    setCurrentPage(1)
    }

    function handleClick(e){
        e.preventDefault();
        dispatch(getAllDogs());
    }

    const [, setBreeds] = useState('All')
    function handleFilterCreated (e){
        e.preventDefault();
        dispatch(filterCreated(e.target.value))
        setCurrentPage(1)
        setBreeds(e.target.value)
    }

    const [,setOrden] = useState('Default')
    function handleSort (e){
        e.preventDefault()
        dispatch(orderSort(e.target.value))
        setCurrentPage(1)
        setOrden(e.target.value)
    }


    useEffect (() => {
        dispatch (getAllDogs());
        dispatch (filterByTemperaments())
        dispatch (getTemperaments())
    }, [dispatch])




    return (
        <div className={style.container}>
            <div>
                <Nav />
                <SearchBar />
            </div>
            
            <div className={style.filter}>
                <h3>Filter By</h3>
                <select onChange={e => handleSort(e)} className={style.select} >
                    <option value ="default"> Sort by.. </option>
                    <option value = "az"> A-Z</option>
                    <option value = "za"> Z-A </option>
                </select>
                <select onChange={e => handleSort(e)} className={style.select}>
                    <option value = "asc"> Lightest </option>
                    <option value = "desc"> Heaviest </option>
                </select>
             
                <select  onChange={(e) => {handleFilterCreated(e)}} className={style.select}> 
                    <option value = "all">Breeds</option>
                    <option value = "created">Created Breeds</option>
                    <option value = "api"> Api Breeds</option>
                </select>
                <select value = {temperament} onChange = {(e)=> handleSelect(e)} className={style.select}>
                    <option value="All"> Temperaments </option>
                    {temperaments.map((temp, index) => (
                        <option onClick = {(e)=> handleClick(e)} key={index}>
                        {temp.name}
                        </option>
                    ))}
                </select> 
            </div>
            <button onClick={e => {handleClick(e)}} className={style.refresh}>
                    Refresh
            </button>
            {/* <div>
            <button  onClick = {() =>paginado(currentPage === 1 ? currentPage : currentPage-1)}> prev </button>
            <button  onClick = {() =>paginado(currentPage ===23 ? currentPage : currentPage+1)}>Next</button>
            </div> */}
            <div className={style.paginado}>
                <Pagination
                dogsPerPage={dogsPerPage}
                allDogs={allDogs.length}
                paginado={paginado}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
            </div>
            <div className={style.card}>
                {currentDog.map(el=> {
                    return(
                        <div key={el.id}  >
                            <Card
                                name = {el.name.toUpperCase()}
                                id= {el.id}
                                key = {el.id}
                                image = {el.image}
                                min_weight = {el.min_weight}
                                max_weight = {el.max_weight}
                                temperaments={el.temperaments?.map((t) => t.name).join(', ')}
                                temperament={el.temperament}
                            />
                        </div>
                    )
                })}
            </div>
            <Pagination
                    dogsPerPage={dogsPerPage}
                    allDogs={allDogs.length}
                    paginado={paginado}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
        </div>
    )

}