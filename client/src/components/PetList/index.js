import React, { useState } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
// import { Link } from 'react-router-dom';
// import { useQuery } from '@apollo/client'
// import { QUERY_PETS } from '../utils/queries';
import Modal from 'react-bootstrap/Modal';


const PetList = ({ pets, pet }) => {
    const [lgShow, setLgShow] = useState(false);
    if (!pets.length) {
        return <h3>No pets yet!</h3>;
    }

    return (
        <div>
            {pets &&
                pets.map((pet) => (
                    <Card key={pet._id} style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="{require(`../../assets/images/pet-images/${pet.image}`)}" />
                        <Card.Body>
                            <Card.Title>Hi, I'm {pet.name}</Card.Title>
                            <Card.Text>
                                {pet.sex}
                                <br />
                                {pet.age}
                            </Card.Text>
                            {/* <Button variant="primary">See {pet.name}'s profile</Button> */}
                            <Button onClick={() => setLgShow(true)}>See {pet.name}'s Profile</Button>
                            <Modal
                                size="lg"
                                show={lgShow}
                                onHide={() => setLgShow(false)}
                                aria-labelledby="example-modal-sizes-title-lg"
                            >
                                <Modal.Header closeButton>
                                    <Modal.Title id="example-modal-sizes-title-lg">
                                        {pet.name}
                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <container>
                                        <div>
                                            <img src="{require(`../../assets/images/pet-images/${pet.image}`)}" alt="cute pet"></img>
                                        </div>

                                        <div>
                                            <ul>
                                                <li>
                                                    Description: {pet.description}
                                                </li>
                                                <li>
                                                    Location: {pet.location}
                                                </li>
                                                <li>
                                                    Age: {pet.age}
                                                </li>
                                                <li>
                                                    Sex: {pet.sex}
                                                </li>
                                                <li>
                                                    Category: {pet.category}
                                                </li>
                                                <li>
                                                    Activity: {pet.activity}
                                                </li>
                                                <li>
                                                    Needs: {pet.needs}
                                                </li>
                                            </ul>
                                        </div>

                                    </container>
                                </Modal.Body>
                            </Modal>

                        </Card.Body>
                    </Card>))}

            {/* add this code to post a link to pet's profile
            <p className="card-header">
                <Link
                    to={`/pet/${pet.name}`}
                    style={{ fontWeight: 700 }}
                    className="text-light"
                >
                    {pet.name}
                </Link>
            </p> */}
        </div>
    )
}

export default PetList;