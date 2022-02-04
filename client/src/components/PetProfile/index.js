//single pet's profile
import React from 'react';
import Card from 'react-bootstrap/Card'


const Pet = ({ matches }) => {

    if (!matches.length) {
        return <h3>No pets yet!</h3>;
    }

    return (

        <div className="match mb-4">
            {matches &&
                matches.map((pet) => (
                    <Card key={pet._id} style={{ width: '35rem'}} border="info" >
                        
                        
                            <Card.Img varient="top" src={require(`../../assets/petImages/${pet.image}`)} alt="cute pet" />
                        
                        <Card.Body>
                            <Card.Title className="petName" style={{fontWeight:500, fontSize:45}}>
                            {pet.name}
                        </Card.Title>
                            <Card.Text>
                            <ul className="noBullet">
                                <li>
                                   <strong>Description:</strong>  {pet.description}
                                </li>
                                <li>
                                <strong>  Location:</strong>  {pet.location}
                                </li>
                                <li>
                                <strong> Age:</strong>  {pet.age}
                                </li>
                                <li>
                                <strong>  Sex: </strong> {pet.sex}
                                </li>
                                <li>
                                <strong> Category: </strong> {pet.category}
                                </li>
                                <li>
                                <strong> Activity: </strong> {pet.activity}
                                </li>
                                </ul>
                        </Card.Text>
                        </Card.Body>
                        
                    </Card>))}

        </div>
    );
};

export default Pet;
