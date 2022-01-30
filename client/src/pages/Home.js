import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_PETS } from '../utils/queries';
import PetList from '../components/PetList';

const Home = () => {
    const{loading, data} = useQuery(QUERY_PETS);
    const pets = data?.pets || [];
    console.log(pets);
    return (
        <main>
            {loading ? (
        <div>Loading...</div>
      ) : (
            <PetList pets={pets} />
      )}
        </main>
    )
    
}

export default Home;