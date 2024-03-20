import Row from 'react-bootstrap/Row'
import Col from 'react-bootsrap/Col'
export default function HomePage({user}) {

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
                        <p>Please login here!</p>
                    </>
                }
            </Col>
        </Row>
    )
}