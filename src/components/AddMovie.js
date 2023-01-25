import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AddMovie = ({handleAdd}) => {
  const navigate=useNavigate();
const [inputs,setInputs] = useState({title:"",description:"",posterURL:"",rating:0.0})


const handleChange = (e)=>{
  setInputs({...inputs,[e.target.name]:e.target.value})
}
const addNewMovie = ()=>{
  navigate('/')
 handleAdd(inputs)
}
  return (
    <div style={{margin:'2%'}}>
        <h1>Add a movie</h1>
        <input style={{width:"150px",height:'100px'}} placeholder='Movie Title' name='title' onChange={handleChange}></input>
        <input style={{width:"300px",height:'100px'}} placeholder='Description' name='description' onChange={handleChange}></input>
        <input style={{width:"300px",height:'100px'}} placeholder='Poster URL' name='posterURL' onChange={handleChange}></input>
        <input style={{width:"300px",height:'100px'}} placeholder='From 1.0 To 5.0' name='rating' onChange={handleChange}></input>
        <button style={{margin:"2%",border:'0.1em solid #FFFFFF'}} onClick={addNewMovie}>Submit</button>
    </div>
  )
}

export default AddMovie