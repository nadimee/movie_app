import './App.css';
import React, { useState } from 'react'
import MovieList from './components/MovieList';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddMovie from './components/AddMovie';

const App = () => {

  const [movies,setMovies]=useState([
    {title:'The Legend of Tarzan', description:'After some time living in civilized 19th-century London, the ape-raised Tarzan returns to wild Congo and faces off against abominable colonialists.', posterURL:'The Legend of Tarzan.jpg', rating:4.8},{title:'Blessed Benefit', description:'After being wrongfully convicted of fraud, an honest man finds that life in prison comes with a measure of freedom that is unavailable outside.', posterURL:'Blessed Benefit.jpg', rating:4.3},
    {title:'Slumberland', description:'Joined by a larger-than-life outlaw, a daring young orphan journeys through a land of dreams to find a precious pearl that will grant her greatest wish.', posterURL:'Slumberland.jpg', rating:3.9},{title:'Troll', description:'When an explosion in the Norwegian mountains awakens an ancient troll, officials appoint a fearless paleontologist to stop it from wreaking deadly havoc.', posterURL:'Troll.webp', rating:3.6},
    {title:'land', description:'After a tragedy, a woman retreats to an isolated cabin but lacks the skills to survive. A hunter s arrival offers hope, if she can find a way to heal.', posterURL:'Land.jpg', rating:2.3},{title:'2012', description:'When a flood of natural disasters begins to destroy the world, a divorced dad desperately tries to save his family by outrunning the cataclysmic chaos.', posterURL:'2012.jpg', rating:1.6},
    {title:'Alice in Borderland', description:'An aimless gamer and his two friends find themselves in a parallel Tokyo, where they re forced to compete in a series of sadistic games to survive.', posterURL:'Alice in Borderland.jpg', rating:4.8},{title:'World War Z', description:'A U.N. employee races against time and fate as he travels the world trying to stop the spread of a deadly zombie pandemic.', posterURL:'World War Z.jpg', rating:4.5}])

    for (let i= 0; i < movies.length; i++) {
     movies[i].title= movies[i].title.toLowerCase();
     
    }

    
      const handleAdd=(newMovie)=>{
        setMovies([...movies,newMovie])
      }




        return (
          <div>
      <MovieList setMovies={setMovies}   movies={movies}  />
      <AddMovie handleAdd={handleAdd} />

          </div>
        )
}

export default App