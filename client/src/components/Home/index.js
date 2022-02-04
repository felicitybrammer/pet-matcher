import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';


const Home = () => {

    return (
        <div className="carouselContainer">
            <Carousel fade>
                <Carousel.Item interval={5000}>
                    <img style={{ opacity: 1 }}
                        className="d-block w-100 cardImg"
                        src={require("../../assets/images/funcat2.jpg")}
                        alt="kid with cat"
                    />
                    <Carousel.Caption className="captions">
                        <h3>Every Creature Deserves A Loving Home</h3>
                        <p>OkCreature is here to make that happen</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img style={{ opacity: 1 }}
                        className="d-block w-100"
                        src={require("../../assets/images/whitedogkiss2.jpg")}
                        alt="happy dog owner getting kisses"
                    />
                    <Carousel.Caption className="captions">
                        <h3>Not Sure What You're Looking For?</h3>
                        <p>We've developed a pet-matching quiz to find the best fit for you and our creatures!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{ opacity: 1.0 }}
                        className="d-block w-100"
                        src={require("../../assets/images/gecko2.jpg")}
                        alt="bearded lizard in hand"
                    />
                    <Carousel.Caption className="captions">
                        <h3>Match & Adopt Now!</h3>
                        <p>In a mid-pandemic world, many pets are being returned to shelters. Let's work together to take care of thy creature.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>


            <Link className="link" to="/signup">
                <div className="d-grid gap-2">
                    <Button variant="warning" size="lg">
                        <strong>Join OkCreature to find your puurrrrrfect match!</strong>
                    </Button>
                </div>
            </Link>



        </div>

    )

}

export default Home;