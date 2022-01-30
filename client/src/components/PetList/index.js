import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const PetList = ({ pets, pet }) => {
    if (!pets.length) {
        return <h3>No pets yet!</h3>;
    }
    return (
        <div>
            {pets &&
                pets.map((pet) => (
                <Card key={pet._id} style={{ width: '18rem' }}>
                    <Card.Img variant="top" src=""/>
                    <Card.Body>
                        <Card.Title>Hi, I'm {pet.name}</Card.Title>
                        <Card.Text>
                            {pet.sex}
                            {pet.age}
                        </Card.Text>
                        <Button variant="primary">See {pet.name}'s profile</Button>
                    </Card.Body>
                </Card>))}
        </div>
    )
}

export default PetList;