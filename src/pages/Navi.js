import React from "react";
import {Container, Nav, Navbar, Button} from 'react-bootstrap';

function Navi() {
    return (
        <Navbar fixed="top" bg="secondary" variant="dark">
            <Container>    
            <Navbar.Brand href="home">Workouts Made Easy</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="home">Home</Nav.Link>
                    <Nav.Link href="calendar">Calendar</Nav.Link>
                    <Nav.Link href="fitness">Fitness</Nav.Link>
                    <Nav.Link href="pricing">Pricing</Nav.Link>
                    <Nav.Link href="about-us">About</Nav.Link> 
                    <Nav.Link href="dashboard">Profile</Nav.Link> 
                </Nav> 
                <Button variant="primary" size="s" href="login">Login</Button>
            </Container>
        </Navbar>
    );
}

export default Navi;
