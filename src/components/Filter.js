import { useState } from "react";


const Filter = ({setMovies,movies}) => {

const [backUp,setBackUp]=useState(movies.slice())

  const searchMovieHandler =(movie)=>{  
    movie=movie.target.value.toLowerCase();
    if(movie){
      for (let i= 0; i < movies.length; i++) {
        if(movie===movies[i].title){
        setMovies(movies.filter(elm=>elm.title===movie)) 
            }
      }   
  }else{
    setMovies(movies=backUp)
  }
   }

   const handleRateIntervalBybutton= (getValue)=>{
    (getValue===1)?setMovies(movies.filter(elm=>elm.rating<=2.0&&elm.rating>=1.0))
    :(getValue===2)?setMovies(movies.filter(elm=>elm.rating<=3.0&&elm.rating>=2.0))
    :(getValue===3)?setMovies(movies.filter(elm=>elm.rating<=4.0&&elm.rating>=3.0))
    :(getValue===4)?setMovies(movies.filter(elm=>elm.rating<=5.0&&elm.rating>=4.0))
    :setMovies(movies=backUp)
   }

  return (
    <div>
      <div style={{margin:"2%"}} >
      <h1>Search for a movie</h1>
       <input placeholder="Search"  onChange={searchMovieHandler} ></input>
       <button onClick={()=>handleRateIntervalBybutton(1)} style={{margin:"2%",border:'0.1em solid #FFFFFF'}}>1.0 To 2.0</button>
       <button onClick={()=>handleRateIntervalBybutton(2)} style={{margin:"2%",border:'0.1em solid #FFFFFF'}}>2.0 To 3.0</button>
       <button onClick={()=>handleRateIntervalBybutton(3)} style={{margin:"2%",border:'0.1em solid #FFFFFF'}}>3.0 To 4.0</button>
       <button onClick={()=>handleRateIntervalBybutton(4)} style={{margin:"2%",border:'0.1em solid #FFFFFF'}}>4.0 To 5.0</button>
       <button onClick={()=>handleRateIntervalBybutton(5)} style={{margin:"2%",border:'0.1em solid #FFFFFF'}}>All Movies</button>
       </div>
      
    </div>
  )
}

export default Filter