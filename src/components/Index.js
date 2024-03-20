import NavBar from './NavBar'
import { Outlet } from "react-router-dom";
import Container from 'react-bootstrap/esm/Container';

export default function Index({wishList, user, setUser}) {

    return (
        <>
            <NavBar/>
            <Container fluid>
                <Outlet />
            </Container>
        </>
    )
}