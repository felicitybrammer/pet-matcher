import React from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CardGroup from 'react-bootstrap/CardGroup';


// import Button from 'react-bootstrap/Button';
// import Pet from "../PetProfile";
// import { Link } from 'react-router-dom';
// import { useQuery } from '@apollo/client'
// import { QUERY_PETS } from '../utils/queries';
//import Modal from 'react-bootstrap/Modal';


const PetList = ({ pets, pet }) => {

    //const [petProfileShow, setPetProfileShow] = useState(false);

    if (!pets.length) {
        return <h3>No pets yet!</h3>;
    }

    // const handlePetProfileShow = (pet) => {
    //     //console.log('click')
    //     console.log(pet) //returns all the info about the specific pet
    //     //set state to true
    //     setPetProfileShow(true);
    //     if (petProfileShow == true) {<div>
    //         <h1>{pet.name}</h1>
    //         <div>
    //             <img src="{require(`../../assets/petImages/${pet.image}`)}" alt="cute pet"></img>
    //         </div>
    //         <div>
    //             <ul className="">
    //                 <li>
    //                     Description: {pet.description}
    //                 </li>
    //                 <li>
    //                     Location: {pet.location}
    //                 </li>
    //                 <li>
    //                     Age: {pet.age}
    //                 </li>
    //                 <li>
    //                     Sex: {pet.sex}
    //                 </li>
    //                 <li>
    //                     Category: {pet.category}
    //                 </li>
    //                 <li>
    //                     Activity: {pet.activity}
    //                 </li>
    //                 <li>
    //                     Needs: {pet.needs}
    //                 </li>
    //             </ul>
    //         </div>
    //     </div>}
    // }



    return (
        <div className="cards mb-4" >
            
            {pets &&
                pets.map((pet) => (

                    <Card  className="cardz" key={pet._id} style={{ width: '25rem'}} border="info">
                        <Card.Img variant="top" src={require(`../../assets/petImages/${pet.image}`)} />
                        <Card.Body>
                            <Card.Title style={{fontWeight:365, fontSize:30}}> Hi, I'm {pet.name}</Card.Title>
                            <Card.Text style={{fontWeight:350, fontSize:20}}>
                                {pet.sex}
                                <br />
                                {pet.age}
                            </Card.Text>
                            {  /* <Button key={pet.name} onClick={() => handlePetProfileShow(pet)}>See {pet.name}'s Profile</Button> */}
                        </Card.Body>
                    </Card>

                ))}
        </div>
    )
}

export default PetList;

// Original
// <Card  key={pet._id} style={{ width: '18rem' }} border="info">
//     <Card.Img variant="top" src={require(`../../assets/petImages/${pet.image}`)}/>
//     <Card.Body>
//         <Card.Title>Hi, I'm {pet.name}</Card.Title>
//         <Card.Text>
//             {pet.sex}
//             <br />
//             {pet.age}
//         </Card.Text>
//         {/* <Button key={pet.name} onClick={() => handlePetProfileShow(pet)}>See {pet.name}'s Profile</Button> */}

//     </Card.Body>
// </Card>





//  <div>

//     {pets &&
//         pets.map((pet) => (

//             <Row xs={1} md={2} className="g-4">
//                 {Array.from({ length: 4 }).map((_, idx) => (
//                     <Col>
//                         <Card key={pet._id} style={{ width: '18rem' }} border="info">
//                             <Card.Img variant="top" src={require(`../../assets/petImages/${pet.image}`)} />
//                             <Card.Body>
//                                 <Card.Title>Hi, I'm {pet.name}</Card.Title>
//                                 <Card.Text>
//                                     {pet.sex}
//                                     <br />
//                                     {pet.age}
//                                 </Card.Text>
// //                                 {  /* <Button key={pet.name} onClick={() => handlePetProfileShow(pet)}>See {pet.name}'s Profile</Button> */}
// //                             </Card.Body>
// //                         </Card>
// //                     </Col>
//                 ))}
//             </Row>
//         ))}
// </div> */}


// <div>

// {pets &&
//     pets.map((pet) => (
//         <CardGroup className="card-body" style={{ display: 'flex', flexDirection: 'row'}}>
//             <Card key={pet._id} style={{ width: '18rem' }} border="info">
//                 <Card.Img variant="top" src={require(`../../assets/petImages/${pet.image}`)} />
//                 <Card.Body>
//                     <Card.Title>Hi, I'm {pet.name}</Card.Title>
//                     <Card.Text>
//                         {pet.sex}
//                         <br />
//                         {pet.age}
//                     </Card.Text>
//                     {  /* <Button key={pet.name} onClick={() => handlePetProfileShow(pet)}>See {pet.name}'s Profile</Button> */}
//                 </Card.Body>
//             </Card>
//         </CardGroup>
//     ))}
// </div>