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
            <PetList></PetList>
        </main>
    )
    
}

export default Home;