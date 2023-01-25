
import React, { useState } from 'react'
import MovieList from './components/MovieList';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddMovie from './components/AddMovie';
import { Route, Routes, useNavigate } from 'react-router-dom';
import DescriptionAndTrailer from './components/DescriptionAndTrailer';


const App = () => {
  const navigate=useNavigate();
  let [movies,setMovies]=useState([
    {title:'The Legend of Tarzan',trailerURL:'https://www.youtube.com/embed/Aj7ty6sViiU',id:'1', description:'After some time living in civilized 19th-century London, the ape-raised Tarzan returns to wild Congo and faces off against abominable colonialists.', posterURL:'The Legend of Tarzan.jpg', rating:4.8},{title:'Blessed Benefit',trailerURL:'https://www.youtube.com/embed/QjbAJtEzzR4',id:'5', description:'After being wrongfully convicted of fraud, an honest man finds that life in prison comes with a measure of freedom that is unavailable outside.', posterURL:'Blessed Benefit.jpg', rating:4.3},
    {title:'Slumberland',trailerURL:'https://www.youtube.com/embed/FBnkVJslRGo',id:'2', description:'Joined by a larger-than-life outlaw, a daring young orphan journeys through a land of dreams to find a precious pearl that will grant her greatest wish.', posterURL:'Slumberland.jpg', rating:3.9},{title:'Troll',trailerURL:'https://www.youtube.com/embed/AiohkY_XQYQ',id:'6', description:'When an explosion in the Norwegian mountains awakens an ancient troll, officials appoint a fearless paleontologist to stop it from wreaking deadly havoc.', posterURL:'Troll.webp', rating:3.6},
    {title:'land',trailerURL:'https://www.youtube.com/embed/sOw20FDNnHA',id:'3', description:'After a tragedy, a woman retreats to an isolated cabin but lacks the skills to survive. A hunter s arrival offers hope, if she can find a way to heal.', posterURL:'Land.jpg', rating:2.3},{title:'2012',trailerURL:'https://www.youtube.com/embed/ce0N3TEcFw0',id:'7', description:'When a flood of natural disasters begins to destroy the world, a divorced dad desperately tries to save his family by outrunning the cataclysmic chaos.', posterURL:'2012.jpg', rating:1.6},
    {title:'Alice in Borderland',trailerURL:'https://www.youtube.com/embed/49_44FFKZ1M',id:'4', description:'An aimless gamer and his two friends find themselves in a parallel Tokyo, where they re forced to compete in a series of sadistic games to survive.', posterURL:'Alice in Borderland.jpg', rating:4.8},{title:'World War Z',trailerURL:'https://www.youtube.com/embed/Md6Dvxdr0AQ',id:'8', description:'A U.N. employee races against time and fate as he travels the world trying to stop the spread of a deadly zombie pandemic.', posterURL:'World War Z.jpg', rating:4.5}])
  const [backUp,setBackUp]=useState(movies.slice())




   
    window.onpopstate=()=>{
                            setMovies(movies=backUp)
                          }


    for (let i= 0; i < movies.length; i++) {
     movies[i].title= movies[i].title.toLowerCase();
     
    }

     const handleAdd=(newMovie)=>{
        setMovies([...movies,newMovie])
      }

      
      return (
          <div>
            
 <Routes>
 <Route path="/" element={<><MovieList setMovies={setMovies}   movies={movies}  /><button onClick={()=>navigate('/AddMovie')} style={{marginLeft:"8%",marginTop:"2%",marginBottom:"2%",backgroundColor: '#4CAF50',border:'none',color: 'white',padding: '15px 32px',fontSize: '18px'}} >Add a movie</button></>} />
 <Route path="/AddMovie" element={<AddMovie handleAdd={handleAdd} />} />
 <Route path="/DescriptionAndTrailer" element={<DescriptionAndTrailer movies={movies}   />} />
 </Routes>

          </div>
        )
}

export default App