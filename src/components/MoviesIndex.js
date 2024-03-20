import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/esm/Row'
import MoviesRender from './MoviesRender';
import useDocumentTitle from './useDocumentTitle';
export default function MoviesIndex({movies, toggleSave, user, setMovieTitle, movieTitle}) {
    useDocumentTitle('Movies App | Movies')

    return (
        <Container fluid>
            <Row>
            {
                movies.length > 0
                ?
                <MoviesRender movies={movies} toggleSave={toggleSave} user={user} />
                :
                <p>No movie</p>
                
            }
            </Row>
        </Container>
    )
}