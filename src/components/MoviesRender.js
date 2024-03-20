import Col from 'react-bootstrap/esm/Col'
import Card from 'react-bootstrap/esm/Card'
import { Link } from "react-router-dom";

export default function MoviesRender({movies, toggleSave, user}){
    return(
        movies.map(movie=>{
            return (
                <Col sm={3} key={movie.imdbID} className="my-3">
                        <Card>
                            <Card.Img variant="top" src={movie.Images[0]} style={{height: "150px"}} />   
                            <Card.Body>
                                
                                <Card.Title>
                                    <Link to={"/movies/"+movie.id}>{movie.Title}</Link>
                                </Card.Title>

                                <Card.Subtitle>Directed by {movie.Director}</Card.Subtitle>
                                <Card.Text>{movie.Year} | {movie.Rated}</Card.Text>
                                
                                {
                                    user ?

                                        movie.saved
                                        ?
                                        <button type="button" className="btn btn-danger btn-sm" onClick={() => toggleSave(movie.id, !movie.saved)}>♥️</button>
                                        :
                                        <button type="button" className="btn btn-default btn-sm" onClick={() => toggleSave(movie.id, !movie.saved)}>♡</button>
                                    :
                                    null
                                }
                            </Card.Body>
                        </Card>
                        
                </Col>
            )
        })
    )
}