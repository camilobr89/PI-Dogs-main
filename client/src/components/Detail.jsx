import React, {useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getDetail, deleteDog } from "../redux/actions";
import {useHistory} from 'react-router-dom'
import Nav from './Nav';
import style from './styles/Detail.module.css'

export default function Detail(props) {
    const dispatch = useDispatch()
    const id = props.match.params.id 
    const myDog = useSelector((state) => state.detail)
    const history = useHistory()

    const handleDelete = (el) =>{
        dispatch(deleteDog(el.id))
        alert("Delete Dog Successfully")
        history.push('/dogs')
    }
    
  
    useEffect(()=>{
    dispatch(getDetail(id));   
    },[id, dispatch])

    
    return (
    <div>
        <div className={style.nav}>
            <Nav/>
        </div>

        <div className={style.container}> 
            {
            myDog.length === 0 ?  
            <p>Load...</p> : 
            myDog.length > 0 && 
            <div className={style.detail}> 
                
                {myDog[0].createdInDataBase? <button className={style.delete} onClick={() => handleDelete(myDog[0])}> DELETE </button> : <p> Don't charge anithing</p> }
                <h2> {myDog[0].name.toUpperCase()}</h2>
                <>{myDog[0].image !== "" ? <img src = {myDog[0].image} alt= "Barking in another place" onError="" className={style.img} /> : <img src = "" alt = "Woof"/>} </>
                <h5 > Min Weight: {myDog[0].min_weight} kgs. - Max Weight: {myDog[0].max_weight} kgs.</h5>
                <h5> Min Height: {myDog[0].min_height} cms. - Max Height: {myDog[0].max_height} cms. </h5>
                <h5> Life Span : {myDog[0].life_span}</h5>
                <h5>Temperaments: {myDog[0].createdInDataBase? myDog[0].temperaments.map(el => el.name ).join(', '): myDog[0].temperament.split(', ').map(e => e ).join(', ')}</h5> 
            </div>  
            }
        </div>
        <div>

        </div>
    </div>
    ) 
}

