//single pet's profile
import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_PET } from '../utils/queries';
//import PetList from '../components/PetList';
// import ReactionForm from '../components/ReactionForm';
import Auth from '../utils/auth';

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
    <div>
      <div className="card mb-3">
        <p className="card-header">
          <span style={{ fontWeight: 700 }} className="text-light">
            {pet.name}
          </span>
        </p>
        <div className="card-body">
          <p>{pet}</p>
        </div>
      </div>
      
    </div>
  );
};

export default Pet;
