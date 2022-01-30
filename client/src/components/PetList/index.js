import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
// import { Link } from 'react-router-dom';
// import { useQuery } from '@apollo/client'
// import { QUERY_PETS } from '../utils/queries';


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
                </Card>))} */

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