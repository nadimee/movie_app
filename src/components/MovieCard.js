
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

const MovieCard = ({movies,movie,setMovies}) => {
  const navigate = useNavigate();

  const goTodat = ()=>{
 
                        setMovies(movies.filter(elm=>elm.title===movie.title))
                        navigate('/DescriptionAndTrailer')
                      }
 

  return (

<div onClick={()=> goTodat()}>
    <Card   style={{ width: '18rem' }}>
      <Card.Img variant="top" src={movie.posterURL} style={{height:'350px',width:'250px'}}/>
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>
            {movie.description}
        </Card.Text>
        <h4>{movie.rating}</h4>
        <Button variant="primary" >Watch</Button>
      </Card.Body>

    </Card>
</div>

  )
}

export default MovieCard