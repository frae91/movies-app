import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import useDocumentTitle from './useDocumentTitle';

export default function MoviePage({toggleSave, user}) {
    const {movieId} = useParams();
    const [movie, setMovie] = useState(null)
    const [loading, setLoading] = useState(true)
    
    useDocumentTitle("Movies App | " + (movie ? movie.Title : ""))

    useEffect( () => {
        fetch('http://localhost:4000/movies/'+movieId)
        .then( response => response.json())
        .then( json => {
            setMovie(json);
            setLoading(false);
        })
        .catch( err => {
            setMovie(null);
            setLoading(false);
        })
    }, [movie])

    return (
        <Container fluid>
            {/* 
                Render the movie's:
                - Image
                - Title
                - Director
                - Actors
                - Plot
            */}
            {
                !loading
                ?
                    movie
                    ?
                    <>
                    <Row>
                        <Col sm={4}>
                            <img src={ movie.Images[0]} style={{width:"100%"}} alt={movie.Title}/>

                        </Col>
                        <Col sm={8}>
                            <h2>{movie.Title}</h2>   
                            <h3>Directed by: {movie.Director}</h3>
                            <h4>Cast:</h4>

                            <ul>
                                {
                                    movie.Actors.split(",").map( actor => {
                                        return <li key={actor}>{actor}</li>
                                    })
                                }
                            </ul>

                            <h4>Plot</h4>

                            <p>
                                {movie.Plot}
                            </p>

                            <div>
                                {
                                    user
                                    ?
                                        movie.saved
                                        ?
                                        <button type="button" className="btn btn-danger btn-sm" onClick={() => toggleSave(movie.id, !movie.saved)}>♥️</button>
                                        :
                                        <button type="button" className="btn btn-default btn-sm" onClick={() => toggleSave(movie.id, !movie.saved)}>♡</button>
                                    :
                                    null
                                }
                            </div>
                        </Col>
                    </Row>
                    </>
                    :
                    <h2>No movie found!</h2>
                :
                null
            }
        </Container>
    )
}