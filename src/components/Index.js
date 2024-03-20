import NavBar from './NavBar'
import { Outlet } from "react-router-dom";
import Container from 'react-bootstrap/esm/Container';
import useDocumentTitle from './useDocumentTitle';

export default function Index({user, setUser}) {
    useDocumentTitle("Movies App | Home")
    return (
        <>
            <NavBar user={user} setUser={setUser}/>
            <Container>
                <Outlet />
            </Container>
        </>
    )
}