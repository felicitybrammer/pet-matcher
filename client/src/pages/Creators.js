import React from "react";
// import Auth from '../utils/auth';
// import NavBar from './components/Navbar';
// import Home from '../components/Home';
// import Footer from './components/Footer';
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";


const About = () => {
    return (
        <Container style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Felicity Brammer</Card.Title>
                        <Card.Text>
                            is really really cool
                        </Card.Text>
                        <Button variant="warning" icon={faGithub} href="https://github.com/felicitybrammer" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></Button>
                        <Button variant="warning" icon={faLinkedin} href="" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></Button>

                    </Card.Body>
                </Card>
            </div>

            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Felicity Brammer</Card.Title>
                        <Card.Text>
                            is really really cool
                        </Card.Text>
                        <Button variant="warning" icon={faGithub} href="https://github.com/felicitybrammer" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></Button>
                        <Button variant="warning" icon={faLinkedin} href="" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></Button>

                    </Card.Body>
                </Card>
            </div>

            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Felicity Brammer</Card.Title>
                        <Card.Text>
                            is really really cool
                        </Card.Text>
                        <Button variant="warning" icon={faGithub} href="https://github.com/felicitybrammer" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></Button>
                        <Button variant="warning" icon={faLinkedin} href="" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></Button>

                    </Card.Body>
                </Card>
            </div>

            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Felicity Brammer</Card.Title>
                        <Card.Text>
                            is really really cool
                        </Card.Text>
                        <Button variant="warning" icon={faGithub} href="https://github.com/felicitybrammer" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></Button>
                        <Button variant="warning" icon={faLinkedin} href="" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></Button>

                    </Card.Body>
                </Card>
            </div>


        </Container>

    )
}

export default About;

// <FontAwesomeIcon icon={faGithub} href="https://github.com/felicitybrammer/pet-matcher" color="white" />