import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import MoviesRender from './MoviesRender'
import Row from 'react-bootstrap/Row'
import useDocumentTitle from './useDocumentTitle'
export default function Faves({faves, toggleSave, user}) {
    const navigate = useNavigate();
    useEffect( () => {
        if (!user) {
            navigate('/')
        }
    })

    useDocumentTitle("Movies App | Faves")
    return (
        <Row>
            <h1>Faves</h1>
            {/* 
                Renders <MovieRender> passing saved movies
            */}
            {
                faves.length > 0
                ?
                <MoviesRender movies={faves} toggleSave={toggleSave} user={user}/>
                :
                <p>No movie found!</p>
            }
        </Row>
    )
}

