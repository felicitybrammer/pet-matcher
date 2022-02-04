//single pet's profile
import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_PET } from '../../utils/queries';


const Pet = ({ matches }) => {

    if (!matches.length) {
        return <h3>No pets yet!</h3>;
    }

    return (

        <div>
            {matches &&
                matches.map((pet) => (
                    <div key={pet._id}>
                        <h1>{pet.name}</h1>
                        <div>
                            <img src={require(`../../assets/petImages/${pet.image}`)} alt="cute pet"></img>
                        </div>
                        <div>
                            <ul className="">
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
                    </div>))}

        </div>
    );
};

export default Pet;
