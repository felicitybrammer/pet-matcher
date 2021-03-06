import React from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";

//Creator Images
import ravImg from '../assets/team/rav2.jpg';
import fbImg from '../assets/team/fb.png';
import maksImg from '../assets/team/maks.jpg';
import mjImg from '../assets/team/mj.jpg';

const About = () => {
    return (
        <div className="cardContainer">

            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <h2 className="mt-3 creatorTitle">Meet The Creators</h2>
            </div>
            <hr></hr>

            <div className="m-5" style={{ display: 'flex', justifyContent: 'space-around' }}>
                <Card style={{ width: '20rem' }}>
                    <Card.Img variant="top" src={fbImg} />
                    <Card.Body className="cardBody">
                        <Card.Title className="creatorTitle">Felicity Brammer</Card.Title>
                        <Card.Text style={{ fontSize: "10px" }}>
                        My background is in STEM education: specifically in teaching and developing mathematics and physics curricula, and working to motivate young people to pursue these fields. I’m passionate about using logic to find creative and innovative solutions to problems, and I’m hoping to leverage my skills, experience and drive to build real-world scalable and impactful applications. When I’m not in front of screens, I’m out in the forest with my neurotic but joyful Alaskan husky, Sam.
                        </Card.Text>
                        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                            <Button className="" variant="warning" icon={faGithub} href="https://github.com/felicitybrammer" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></Button>
                            <Button className="" variant="warning" icon={faLinkedin} href="https://www.linkedin.com/in/felicitybrammer/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></Button>
                        </div>

                    </Card.Body>
                </Card>

                <Card style={{ width: '20rem' }}>
                    <Card.Img variant="top" src={mjImg} />
                    <Card.Body className="cardBody">
                        <Card.Title className="creatorTitle">Michelle Nijjar</Card.Title>
                        <Card.Text style={{ fontSize: "10px" }}>
                        Hey there! I'm Michelle and I graduated University majoring in Finance! As working in the financial industry for 3 years, I had realized it was not the job for me ..and that's what brought me to learn full stack web development! I love challenging myself to solve problems while being able to utilize my creative side! When I'm not in front of screens, I love to bring out my artsy side by painting abstract photos.                               
                        </Card.Text>
                        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                            <Button variant="warning" icon={faGithub} href="https://github.com/mnijjar24" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></Button>
                            <Button variant="warning" icon={faLinkedin} href="" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></Button>
                        </div>
                    </Card.Body>
                </Card>
            </div>

            <div className="m-5" style={{ display: 'flex', justifyContent: 'space-around' }}>
                <Card style={{ width: '20rem' }}>
                    <Card.Img variant="top" src={maksImg} />
                    <Card.Body className="cardBody">
                        <Card.Title className="creatorTitle">Makda Girmay</Card.Title>
                        <Card.Text style={{ fontSize: "10px" }}>
                        Fledgling Web Developer Makda here, eager and excited to learn as much as I can about the world of full stack web development. I have a background in Business admin and Marketing, and am a freelance photographer on the side. I fell in love with programming over a year ago and haven't looked back but  when I'm not in front of a screen I read, bike, tend to my plants, and spend time with loved ones.                        </Card.Text>
                        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                            <Button variant="warning" icon={faGithub} href="https://github.com/maks-pixel" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></Button>
                            <Button variant="warning" icon={faLinkedin} href="https://www.linkedin.com/in/makda-girmay-a8b937b0/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></Button>
                        </div>
                    </Card.Body>
                </Card>

                <Card style={{ width: '20rem' }}>
                    <Card.Img variant="top" src={ravImg} />
                    <Card.Body className="cardBody">
                        <Card.Title className="creatorTitle">Ravneet Panglia</Card.Title>
                        <Card.Text style={{ fontSize: "10px" }} >
                            Kinesiologist turned Web Developer here! I have experience working within Brain Injury rehab: specifically focused on return-to-work and quality of life treatment. With a passion for healthcare, I am in pursuit of furthering my skillset in a unique way by levering technology to improve lives. When I'm not in front of screens, I enjoy DIY-ing things around the house, gardening, exploring the world and making memories with friends and family.
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

//className="creatorTitle"
//style={{ color: 'red' }}