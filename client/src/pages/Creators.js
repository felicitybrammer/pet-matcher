import React from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";

//Creator Images
import ravImg from '../assets/team/rav2.jpg';


const About = () => {
    return (
        <div className="cardContainer">

            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <h2 className="mt-3 creatorTitle">Meet The Creators</h2>
            </div>

            <div className="m-5" style={{ display: 'flex', justifyContent: 'space-around' }}>
                <Card className="creatorCard" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body className="cardBody">
                        <Card.Title>Felicity Brammer</Card.Title>
                        <Card.Text style={{ fontSize: "10px" }}>
                            Kinesiologist turned Web Developer here! I am on track to earn a Full-Stack Web Development certificate from the University of Toronto's School of Continuing Studies. I completed a Bachelor of Science in Human Kinetics and have experience working withinin Brain Injury rehab: specifically focused on return-to-work and improving quality of life treatment. With a passion for healthcare, I am in pursuit of furthering my skillset in a unique way by levering technology to one day improve lives. When I'm not in front of screens, I enjoy DIY-ing things around the house, gardening, exploring the world and making memories with friends and family.
                        </Card.Text>
                        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                            <Button className="" variant="warning" icon={faGithub} href="https://github.com/felicitybrammer" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></Button>
                            <Button className="" variant="warning" icon={faLinkedin} href="https://www.linkedin.com/in/felicitybrammer/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></Button>
                        </div>

                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body className="cardBody">
                        <Card.Title>Michelle Nijjar</Card.Title>
                        <Card.Text style={{ fontSize: "10px" }}>
                            Kinesiologist turned Web Developer here! I am on track to earn a Full-Stack Web Development certificate from the University of Toronto's School of Continuing Studies. I completed a Bachelor of Science in Human Kinetics and have experience working withinin Brain Injury rehab: specifically focused on return-to-work and improving quality of life treatment. With a passion for healthcare, I am in pursuit of furthering my skillset in a unique way by levering technology to one day improve lives. When I'm not in front of screens, I enjoy DIY-ing things around the house, gardening, exploring the world and making memories with friends and family.                            </Card.Text>
                        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                            <Button variant="warning" icon={faGithub} href="https://github.com/mnijjar24" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></Button>
                            <Button variant="warning" icon={faLinkedin} href="" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></Button>
                        </div>
                    </Card.Body>
                </Card>
            </div>

            <div className="m-5" style={{ display: 'flex', justifyContent: 'space-around' }}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body className="cardBody">
                        <Card.Title>Makda Girmay</Card.Title>
                        <Card.Text style={{ fontSize: "10px" }}>
                            Kinesiologist turned Web Developer here! I am on track to earn a Full-Stack Web Development certificate from the University of Toronto's School of Continuing Studies. I completed a Bachelor of Science in Human Kinetics and have experience working withinin Brain Injury rehab: specifically focused on return-to-work and improving quality of life treatment. With a passion for healthcare, I am in pursuit of furthering my skillset in a unique way by levering technology to one day improve lives. When I'm not in front of screens, I enjoy DIY-ing things around the house, gardening, exploring the world and making memories with friends and family.
                        </Card.Text>
                        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                            <Button variant="warning" icon={faGithub} href="https://github.com/maks-pixel" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></Button>
                            <Button variant="warning" icon={faLinkedin} href="https://www.linkedin.com/in/makda-girmay-a8b937b0/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></Button>
                        </div>
                    </Card.Body>
                </Card>

                <Card style={{ width: '20rem' }}>
                    <Card.Img variant="top" src={ravImg} />
                    <Card.Body className="cardBody">
                        <Card.Title>Ravneet Panglia</Card.Title>
                        <Card.Text style={{ fontSize: "10px" }} >
                            Kinesiologist turned Web Developer here! I am on track to earn a Full-Stack Web Development certificate from the University of Toronto's School of Continuing Studies. I completed a Bachelor of Science in Human Kinetics and have experience working withinin Brain Injury rehab: specifically focused on return-to-work and improving quality of life treatment. With a passion for healthcare, I am in pursuit of furthering my skillset in a unique way by levering technology to one day improve lives. When I'm not in front of screens, I enjoy DIY-ing things around the house, gardening, exploring the world and making memories with friends and family.
                        </Card.Text>
                        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                            <Button variant="warning" icon={faGithub} href="https://github.com/rpanglia" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></Button>
                            <Button variant="warning" icon={faLinkedin} href="https://www.linkedin.com/in/ravneetpanglia/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></Button>
                        </div>
                    </Card.Body>
                </Card>
            </div>

        </div>
        // </Container>

    )
}

export default About;