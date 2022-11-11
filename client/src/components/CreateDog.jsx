import React, {useState, useEffect} from "react";
import { Link, useHistory } from 'react-router-dom';
import { postDog, getTemperaments } from '../redux/actions'
import { useDispatch, useSelector } from "react-redux";
import style from './styles/CreateDog.module.css'
import Nav from './Nav'


function validate (input) {
    let errors = {};
    if (!input.name){
        errors.name = "Name is required"}
    else if (!input.name.match(/^[A-Za-z\s]+$/)){
        errors.name = "Only letters, please"
    }
    
    if(!input.life_span){
        errors.life_span = "Life span is required"
    }
    else if (input.life_span < 1 || input.life_span > 25) {
        errors.life_span = "Between 1 - 25 years"
    }

    if (!input.min_height){
        errors.min_height = "Min height is required"
    }
    else if (input.min_height < 10){
    errors.min_height = "Must be more than 10 cm"
    }
    if (!input.max_height){
        errors.max_height = "Max height is required"
    }
    else if (input.max_height > 80){
        errors.max_height = "Must be less than 80 cm"
    }
    if (!input.min_weight){
        errors.min_weight = "Min weight is required"
    }
    else if (input.min_weight < 1){
        errors.min_weight = "Must be more than 1 kg"
    }
    if (!input.max_weight){
        errors.max_weight = "Max weight is required"
    }
    else if (input.max_weight > 100){
        errors.max_weight = "Must be less than 100 kg"
    }
   else if(Number(input.min_height) > Number(input.max_height)){
    errors.max_height = "Must be higher than min height"
    }
   else if(Number(input.min_weight) > Number(input.max_weight)){
    errors.max_weight = "Must be heavier than min weight"
    }        
   
    return errors
}


export function CreateDog() {
    const dispatch = useDispatch();
    const history = useHistory();
    const temperaments = useSelector((state) =>state.temperaments)
    const [errors, setErrors] = useState({})

    const [input, setInput] = useState({
    name: "",
    life_span: "",
    min_weight: "",
    max_weight: "",
    min_height: "",
    max_height: "",
    image: "",
    temperament: []
});
// console.log(input)

function handleSelect(e) {
    if (input.temperament.includes(e.target.value)) {
        alert("Already in the list");  
    } else { 
        setInput({
            ...input,
            temperament:[...input.temperament, e.target.value]
        })
    }      
}

const handleDelete = (e) => {
    setInput({
     ...input,
     temperament: input.temperament.filter(el => el !== e)
   })
 }

 function handleSubmit(e) {
    if (input.name && input.temperament) {
    e.preventDefault();
    dispatch(postDog(input))
    alert("Congrats! Your new breed was created")
    setInput({
        name: "",
        life_span: "",
        min_weight: "",
        max_weight: "",
        min_height: "",
        max_height: "",
        image: "",
        temperament: []
    })
    history.push("/dogs")
}
else{
    alert ("Missing info!")
}
 }

function handleChange(e) {
    setInput({
        ...input,
        [e.target.name] : e.target.value
     })
    //  console.log(input)
     setErrors(validate({
         ...input,
         [e.target.name] : e.target.value
     }))
}

useEffect (() => {
    dispatch(getTemperaments())      
}, [dispatch])

    return (
        
        <div >
            <Nav />
            <div className={style.container}>
                <div>
                    <h1> CREATE </h1>
                </div>
                
                <form onSubmit={e => {handleSubmit(e)}}>
                        <div className={style.select}>
                            <label className={style.title} >Name </label>
                            <input
                            className={style.input}
                            type= "text"
                            value= {input.name.toUpperCase()}
                            name="name" 
                            onChange = {(e) => handleChange(e)} />
                            {errors.name && (<p className={style.err}>{errors.name}</p>)}
                        </div>  
                        <div className={style.select}>
                            <label className={style.title}>Life Span </label>
                            <input
                                className={style.input}
                                type= "number"
                                min="1"
                                max="25"
                                value= {input.life_span}
                                name="life_span" 
                                onChange = {(e) => handleChange(e)}
                            />
                            <label className={style.title}> years </label>
                            {errors.life_span && (<p className={style.err}>{errors.life_span}</p>)}
                        </div >     
                        <div className={style.select}>   
                            <label className={style.title}>Min weight   </label>
                            <input
                                className={style.input}
                                type= "number"
                                min="1"
                                value= {input.min_weight}
                                name="min_weight" 
                                onChange = {(e) => handleChange(e)}/>
                            <label className={style.title}> kgs </label>
                                {errors.min_weight && (<p className={style.err}>{errors.min_weight}</p>)}
                        </div>
                        <div className={style.select}>    
                            <label className={style.title}>Max weight   </label>
                            <input
                                className={style.input}
                                type= "number"
                                max="100"
                                value= {input.max_weight}
                                name="max_weight" 
                                onChange = {(e) => handleChange(e)}
                            />
                            <label className={style.title}> kgs </label>
                        {errors.max_weight && (<p className={style.err}>{errors.max_weight}</p>)} 
                        </div>  
                        <div className={style.select}>  
                        <label className={style.title}>Min height   </label>
                        <input
                            className={style.input}
                            type= "number"
                            min="10"
                            value= {input.min_height}
                            name="min_height" 
                            onChange = {(e) => handleChange(e)}
                        />
                        <label className={style.title}> cms </label>
                        {errors.min_height && (<p className={style.err}>{errors.min_height}</p>)} 
                        </div>    
                        <div className={style.select}>
                            <label className={style.title}>Max height   </label>
                            <input
                                className={style.input}
                                type= "number"
                                max="80"
                                value= {input.max_height}
                                name="max_height" 
                                onChange = {(e) => handleChange(e)}
                                />
                            <label className={style.title}> cms </label>
                            {errors.max_height && (<p className={style.err}>{errors.max_height}</p>)} 
                        </div>
                        <div className={style.select}>
                            <label className={style.title}>Picture   </label>
                            <input
                            className={style.input}
                            type= "url"
                            value= {input.image}
                            name="image" 
                            onChange = {(e) => handleChange(e)}
                            />
                        </div>
                        <div className={style.select}>
                            <label className={style.title}> Temperaments   </label> 
                            <select value= {input.temperament}  onChange = {(e)=> handleSelect(e)}>
                            {temperaments.map((el) => (<option value={el.name} key={el.id}> {el.name} </option>))}
                            </select>
                            
                            
                    </div>

                    <div >
                        
                    </div>
                    <div className={style.temperament}>
                        <ul className={style.ul}>
                            {input.temperament.map(el=>  <li className={style.li}> {el} <button onClick={() =>handleDelete(el)} className={style.btnx}>X
                            </button></li> )}
                        </ul>
                    </div>
                    <div className={style.btns}>
                        <button disabled={Object.keys(errors).length > 0 || input.temperament.length === 0 ? true : false} type ='submit'> CREATE </button>          
                        <Link to="/dogs">
                        <button>BACK</button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateDog