import {useState} from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function LoginPage(  ) {
    const [username, setUsername] = useState("");

    // Handle form submission

    return (
        <Row className="justify-content-sm-center">
            <Col sm="auto">
                <h2>Login</h2>
                <form>
                    <label>Username</label><br />
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <br />

                    {
                        username !== ""
                        ?
                        <button type="submit" className="btn btn-primary btn-sm">Login</button>
                        :
                        <button type="submit" className="btn btn-primary btn-sm" disabled>Login</button>

                    }
                </form>
            </Col>
        </Row>
    )

}