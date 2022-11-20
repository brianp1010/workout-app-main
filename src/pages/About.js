import React from "react";
import { Container } from 'react-bootstrap';


function About() {
    return (
        <Container style={{minHeight: '100vh'}}>                                                          
        <div class= "position-absolute top-50 start-50 translate-middle">
        <p class="font-monospace text-center">Workouts Made Easy is a WebApp developed by Team 7, for Software Engineering II through a combination of Bootstrap, SASS, Javascript and Firebase.</p>
    </div>
        </Container>
        );
}

export default About;
