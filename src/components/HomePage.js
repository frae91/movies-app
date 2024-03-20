import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'
import useDocumentTitle from './useDocumentTitle'
export default function HomePage({user}) {

    useDocumentTitle("Movies App | Home")
    return (
        <Row className="justify-content-sm-center">
            <Col sm="auto">
                {
                    user
                    ?
                    <h1>Welcome, {user.username}!</h1>
                    :
                    <>
                        <h1>Welcome to the Movies App!</h1>
                        <p>Please login <Link to="/login">here</Link>!</p>
                    </>
                }
            </Col>
        </Row>
    )
}