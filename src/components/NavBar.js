import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

export default function NavBar() {

    // Style for NavLink's active state
    const activeState = ({isActive}) => {
        return {
            textDecoration: "none",
            color: isActive ? "red" : ""
        }
    }

    return (
        <Navbar expand="md" className="bg-body-secondary">
            <Container>
                <NavLink to="/" style={{textDecoration: "none"}}>
                    <Navbar.Brand>Movies App</Navbar.Brand>
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        {/* 
                            
                            - Link for Movies
                            - Link for Faves (shown if user is logged in)
                            - Link for Login (if user is not logged in)
                            - Logout (if user is logged in)
                        
                        */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )

    
}