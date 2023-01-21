import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
const AddMovie = ({handleAdd}) => {

const [inputs,setInputs] = useState({title:"",description:"",posterURL:"",rating:0.0,id:uuidv4()})


const handleChange = (e)=>{
  setInputs({...inputs,[e.target.name]:e.target.value})
}
const addNewMovie = ()=>{
  handleAdd(inputs)
}
  return (
    <div style={{margin:'2%'}}>
        <h1>Add a movie</h1>
        <input style={{width:"150px",height:'100px'}} placeholder='Movie Title' name='title' onChange={handleChange}></input>
        <input style={{width:"300px",height:'100px'}} placeholder='Description' name='description' onChange={handleChange}></input>
        <input style={{width:"300px",height:'100px'}} placeholder='Poster URL' name='posterURL' onChange={handleChange}></input>
        <input style={{width:"300px",height:'100px'}} placeholder='From 0.0 To 5.0' name='rating' onChange={handleChange}></input>
        <button style={{margin:"2%",border:'0.1em solid #FFFFFF'}} onClick={addNewMovie}>Submit</button>
    </div>
  )
}

export default AddMovie