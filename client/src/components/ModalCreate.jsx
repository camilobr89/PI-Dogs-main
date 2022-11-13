import React, {useState, useEffect} from "react";
import "./styles/ModalCreate.css";
import { Link,  useHistory } from 'react-router-dom';
import { postDog, getTemperaments } from '../redux/actions'
import { useDispatch, useSelector } from "react-redux";

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



export default function Modal({ setOpenModal }) {

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
    <div className="modalBackground-dog">
      <div className="modalContainer-dog">

        <div className="titleCloseBtn-dog">

          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>

        </div>

        <div className="title-dog">
          <h1>Do you want to create a dog?</h1>
        </div><br />

        



        <div>
        <form onSubmit={e => {handleSubmit(e)}} className="form-dog">
                        <div >
                            <label  >Name </label>
                            <input
                          
                            type= "text"
                            value= {input.name.toUpperCase()}
                            name="name" 
                            onChange = {(e) => handleChange(e)} />
                            {errors.name && (<p >{errors.name}</p>)}
                        </div>  
                        <div >
                            <label >Life Span </label>
                            <input
                                
                                type= "number"
                                min="1"
                                max="25"
                                value= {input.life_span}
                                name="life_span" 
                                onChange = {(e) => handleChange(e)}
                            />
                            <label > years </label>
                            {errors.life_span && (<p >{errors.life_span}</p>)}
                        </div >     
                        <div >   
                            <label >Min weight   </label>
                            <input
                               
                                type= "number"
                                min="1"
                                value= {input.min_weight}
                                name="min_weight" 
                                onChange = {(e) => handleChange(e)}/>
                            <label > kgs </label>
                                {errors.min_weight && (<p >{errors.min_weight}</p>)}
                        </div>
                        <div >    
                            <label >Max weight   </label>
                            <input
                                
                                type= "number"
                                max="100"
                                value= {input.max_weight}
                                name="max_weight" 
                                onChange = {(e) => handleChange(e)}
                            />
                            <label > kgs </label>
                        {errors.max_weight && (<p >{errors.max_weight}</p>)} 
                        </div>  
                        <div >  
                        <label >Min height   </label>
                        <input
                            
                            type= "number"
                            min="10"
                            value= {input.min_height}
                            name="min_height" 
                            onChange = {(e) => handleChange(e)}
                        />
                        <label > cms </label>
                        {errors.min_height && (<p>{errors.min_height}</p>)} 
                        </div>    
                        <div >
                            <label >Max height   </label>
                            <input
                                
                                type= "number"
                                max="80"
                                value= {input.max_height}
                                name="max_height" 
                                onChange = {(e) => handleChange(e)}
                                />
                            <label > cms </label>
                            {errors.max_height && (<p >{errors.max_height}</p>)} 
                        </div>
                        <div >
                            <label >Picture   </label>
                            <input
                            
                            type= "url"
                            value= {input.image}
                            name="image" 
                            onChange = {(e) => handleChange(e)}
                            />
                        </div>
                        <div >
                            <label > Temperaments   </label> 
                            <select value= {input.temperament}  onChange = {(e)=> handleSelect(e)}>
                            {temperaments.map((el) => (<option value={el.name} key={el.id}> {el.name} </option>))}
                            </select>
                            
                            
                    </div>

                    <div >
                        
                    </div>
                    <div >
                        <ul className="ul">
                            {input.temperament.map(el=>  <li className="li" > {el} <button onClick={() =>handleDelete(el)} >X
                            </button></li> )}
                        </ul>
                    </div>
                    <div className="footer-dog">
                        <button > CREATE </button>          
                        
                    </div>
                </form>

        </div>




        <div className="footer-dog">
        

          {/* <button disabled={Object.keys(errors).length > 0 || input.temperament.length === 0 ? true : false} type ='submit'>Create</button> */}

        </div>

      </div>
    </div>
  );
}

