import { useQuery } from '@apollo/client';
import { QUERY_PETS } from '../utils/queries';

const Home = () => {
    const{loading, data} = useQuery(QUERY_PETS);
    const pets = data?.pets||[];
    console.log(pets);
    return (
        <main>

        </main>
    )
    
}