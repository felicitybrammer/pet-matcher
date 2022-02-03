//single pet's profile
import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_PET } from '../../utils/queries';


const Pet = props => {
  const { id: _id } = useParams();
  
  const { loading, data } = useQuery(QUERY_PET, {
    variables: { id: _id }
  });

  const pet = data?.pet || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  

  return (
    // <div>
    //   <div className="card mb-3">
    //     <p className="card-header">
    //       <span style={{ fontWeight: 700 }} className="text-light">
    //         {pet.name}
    //       </span>
    //     </p>
    //     <div className="card-body">
    //       <p>{pet}</p>
    //     </div>
    //   </div>
      
    // </div>
    <div>
            <h1>{pet.name}</h1>
            <div>
                <img src="{require(`../../assets/petImages/${pet.image}`)}" alt="cute pet"></img>
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
        </div>
  );
};

export default Pet;
