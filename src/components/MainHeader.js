import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';
import classes from "../index.css";
const MainHeader = () =>{
    return (
        <>
            <Navbar expand="lg" className="bg-info">
            <Container>
                {/* <Navbar.Brand href="#home">Learn-It</Navbar.Brand> */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto justify-content-center flex-grow-1 pe-2">
                    <NavLink to="/welcome" className="ok" activeClassName={classes.active}>Welcome</NavLink>
                    <NavLink to="/products" className="ok" activeClassName={classes.active}>Products</NavLink>
                    <NavLink to="/login" className="ok" activeClassName={classes.active}>Login</NavLink>
                </Nav>
                </Navbar.Collapse>
                <Spinner animation="grow" />
            </Container>
            </Navbar>
        </>
    );
}
export default MainHeader;