

const Filter = ({setMovies,movies}) => {


  const searchMovieHandler =(movie)=>{
    movie=movie.target.value;
    setMovies(movies.filter(elm=>elm.title===movie)) 
 
   }


  return (
    <div>
      <div style={{margin:"2%"}} >
      <h1>Search for a movie</h1>
       <input placeholder="Search"  onChange={searchMovieHandler} ></input>
       </div>
      
    </div>
  )
}

export default Filter