import {useState} from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {useNavigate} from 'react-router-dom'
import useDocumentTitle from './useDocumentTitle'

export default function LoginPage( {setUser}) {
    const [username, setUsername] = useState("");
    const navigate = useNavigate()

    useDocumentTitle("Movies App | Login")

    // Handle form submission
    function handleSubmit(e) {
        e.preventDefault();

        setUser({username: username})
        setUsername("")
        navigate('/')
    }

    return (
        <Row className="justify-content-sm-center">
            <Col sm="auto">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
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