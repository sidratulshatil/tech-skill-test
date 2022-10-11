import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (

        <div>
            <Navbar className='nav-style' expand="lg">
                <Container>
                    <Navbar.Brand className='nav-text'>Tech Skill Test</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Link className=' text-style ' to={'/'}>Topics</Link>
                            <Link className='text-style' to={'statistic'}>Statistic</Link>
                            <Link className='text-style' to={'blog'}>Blog</Link>


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>



    );
};

export default Header;