import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/esm/Row'

export default function MoviesIndex() {
    return (
        <Container fluid>
            <Row>
            {
                movies.length > 0
                ?
                <MoviesRender movies={movies} toggleSave={toggleSave} user={user} />
                // movies.map(movie=>{
                //     return (
                //         <Col sm={3} key={movie.imdbID} className="my-3">
                //                 <Card>
                //                     <Card.Img variant="top" src={movie.Images[0]} style={{height: "150px"}} />   
                //                     <Card.Body>
                                        
                //                         <Card.Title>
                //                             <Link to={"/movies/"+movie.id}>{movie.Title}</Link>
                //                         </Card.Title>

                //                         <Card.Subtitle>Directed by {movie.Director}</Card.Subtitle>
                //                         <Card.Text>{movie.Year} | {movie.Rated}</Card.Text>
                                        
                //                         {
                //                             movie.saved
                //                             ?
                //                             <button type="button" className="btn btn-danger btn-sm">♥️</button>
                //                             :
                //                             <button type="button" className="btn btn-default btn-sm">♡</button>
                //                         }
                //                     </Card.Body>
                //                 </Card>
                                
                //         </Col>
                //     )
                // })
                :
                <p>No movie</p>
                
            }
            </Row>
        </Container>
    )
}