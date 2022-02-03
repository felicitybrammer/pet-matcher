import React from "react";
import { useQuery } from '@apollo/client';
import { QUERY_ME } from "../utils/queries";
import { QUERY_PETS } from "../utils/queries";

const UserProfile = () => {
    const { loading, data } = useQuery(QUERY_ME);
    const { loading: petLoading, data: petData } = useQuery(QUERY_PETS)
    const me = data?.me || {};
    console.log('profile:', me);
    const answers = me.answers

    const pets = petData?.pets || [];
    console.log('profile:', pets);

    //latestQuiz


    //match answer key by mapping through pets

    //all filtered pets ia an array full of objects of each pet
    const allFilteredPets = []
    if (pets, me) {

        pets.map((pet) => {
            //filteredPet will hold a single object full of the pets question answer data to match with user
            const filteredPet = []
            Object.keys(pet).map((questionName) => {
                const petAnswers = pet[questionName];
                // console.log(petAnswers);

                if (questionName === '_id') {
                   // console.log(petAnswers);
                    filteredPet[questionName] = (petAnswers)
                } else if (questionName === 'sex') {
                   // console.log(petAnswers);
                    filteredPet[questionName] = (petAnswers)
                } else if (questionName === 'age') {
                   // console.log(petAnswers);
                    filteredPet[questionName] = (petAnswers)
                } else if (questionName === 'category') {
                   // console.log(petAnswers);
                    filteredPet[questionName] = (petAnswers)
                } else if (questionName === 'activity') {
                   // console.log(petAnswers);
                    filteredPet[questionName] = (petAnswers)
                } else if (questionName === 'needs') {
                   // console.log(petAnswers);
                    filteredPet[questionName] = (petAnswers)
                } else if (questionName === 'household') {
                    //console.log(petAnswers);
                    filteredPet[questionName] = (petAnswers)
                } else if (questionName === 'otherPets') {
                    //console.log(petAnswers);
                    filteredPet[questionName] = (petAnswers)
                }

            })
            //console.log(filteredPet);
            allFilteredPets.push(filteredPet)
        })


    }
   // console.log(allFilteredPets);

    //match the matched key values and add 1 for every same value
    const finalscore = []
    if (answers){
        for (let index = 0; index < allFilteredPets.length; index++) {
        //console.log('true')
        let score = 0;
        //   console.log(answers);
        Object.keys(answers[0]).map((userAnswer) => {
            // console.log(userAnswer);
            const userValues = answers[0][userAnswer];
            // console.log(userValues)

           Object.keys(allFilteredPets[index]).map((petLabels) => {
                const petAnswers = allFilteredPets[index][petLabels];
                //console.log(petAnswers);
                if(userAnswer===petLabels && userValues===petAnswers){
                    score++
                }
            })           
        })
         finalscore.push({"_id": allFilteredPets[index]._id , "score": score})

    }
}
    
    console.log(finalscore);

    //any number over 3 add to an array

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