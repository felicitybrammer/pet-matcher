import React from "react";
import { useQuery } from '@apollo/client';
import { QUERY_ME } from "../utils/queries";
import { QUERY_PETS } from "../utils/queries";

const UserProfile = () => {
    const { loading, data } = useQuery(QUERY_ME);
    const { loading: petLoading, data: petData } = useQuery(QUERY_PETS)
    const me = data?.me || {};
    console.log('profile:', me);

    const pets = petData?.pets || [];
    console.log('profile:', pets);
    // console.log(me.answers);
    //match answer key by mapping through pets
    const allFilteredPets = []
    if (pets, me) {
        
        pets.map((pet) => {

            const filteredPet={}
            Object.keys(pet).map((questionName) => {
                const petAnswers = pet[questionName];
                
                
                // console.log(petAnswers);
                if (questionName === '_id') {
                    console.log(petAnswers);
                    filteredPet[questionName] = (petAnswers)
                } else if (questionName === 'sex') {
                    console.log(petAnswers);
                    filteredPet[questionName] = (petAnswers)
                } else if (questionName === 'age') {
                    console.log(petAnswers);
                    filteredPet[questionName] = (petAnswers)
                } else if (questionName === 'category') {
                    console.log(petAnswers);
                    filteredPet[questionName] = (petAnswers)
                } else if (questionName === 'activity') {
                    console.log(petAnswers);
                    filteredPet[questionName] = (petAnswers)
                } else if (questionName === 'needs') {
                    console.log(petAnswers);
                    filteredPet[questionName] = (petAnswers)
                } else if (questionName === 'household') {
                    console.log(petAnswers);
                    filteredPet[questionName] = (petAnswers)
                } else if (questionName === 'otherPets') {
                    console.log(petAnswers);
                    filteredPet[questionName] = (petAnswers)
                }

            })
console.log(filteredPet);
allFilteredPets.push(filteredPet)
        })
        
           
    }
    //     //match the matched key values and add 1 for every same value
console.log(allFilteredPets);

    //any number over 9 add to an array
    //render pet cards by mapping through array 
    return (
        <div>
            <h1>Your Pet Matches!</h1>
            <div>

            </div>
        </div>
    )
}

export default UserProfile;