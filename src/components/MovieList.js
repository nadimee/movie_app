import React from 'react'
import Filter from './Filter'
import MovieCard from './MovieCard'

const MovieList = ({setMovies,movies}) => {

  
  return (
    <div>
    <Filter setMovies={setMovies} movies={movies}/>
    <div style={{display:'flex',flexWrap:'wrap',alignItems:'center',justifyContent:'center'}}>
    
   {
    
    movies.map((movie,i)=><MovieCard setMovies={setMovies} movies={movies} movie={movie} key={i}></MovieCard>)

    

   }
    </div>
    </div>
  )
}

export default MovieList