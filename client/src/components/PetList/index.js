import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
// import { Link } from 'react-router-dom';
// import { useQuery } from '@apollo/client'
// import { QUERY_PETS } from '../utils/queries';


const PetList = ({ name, age, image, sex }) => {
    //const { loading, data } = useQuery(QUERY_PETS);
    
    // if (!pets.length) {
    //     return <h3>No pets yet!</h3>;
    // }
    return (
        <div>
            {/* {pet &&
                pets.map((pet) => (
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>))} */}

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

export default PetList