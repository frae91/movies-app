import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {Link} from 'react-router-dom'
import useDocumentTitle from './useDocumentTitle'

export default function NoPageFound() {
    useDocumentTitle("Movies App | 404")
    return (
        <Container fluid>
            <Row>
                <Col>
                    <h2>No page found!</h2>
                    <h5>Go back <Link to="/">Home</Link></h5>
                </Col>
            </Row>
        </Container>
    )
}