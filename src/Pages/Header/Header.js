import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/mono.png';

const Header = () => {
    const { user,logOut} = useAuth();
    return (
        <div>
            <Navbar fixed="top">
                <Container>
                    <Navbar.Brand as={Link} to="/home">
                        <img src={logo} alt="" height="50"/>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                    <Nav>
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/destination">Destination</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                        {
                            user.email?
                            <button onClick={logOut} className='btn btn-outline-danger btn-sm mx-2'>Logout</button>
                            :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        }
                    </Nav>
                        <Navbar.Text>
                            {user.displayName}
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;