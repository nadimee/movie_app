
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const MovieCard = ({movie}) => {

  return (
    <Card style={{ width: '18rem' }}>
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
  )
}

export default MovieCard