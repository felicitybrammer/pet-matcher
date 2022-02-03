import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';

const Home = () => {

    return (
        <div>
            <Carousel fade>
                <Carousel.Item interval={5000}>
                    <img
                        className="d-block w-100"
                        src={require("../../assets/images/funcat.jpg")}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>OkCreature</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img
                        className="d-block w-100"
                        src={require("../../assets/images/whitedogkiss.jpg")}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={require("../../assets/images/gecko.jpg")}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <div className="d-grid gap-2">
                <Button variant="warning" size="lg">
                    <strong>Join now to find your puurrrrrfect match!</strong>
                </Button>
            </div>


        </div>



    )

}

export default Home;