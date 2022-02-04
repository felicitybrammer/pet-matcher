import React from "react";
import { useQuery } from '@apollo/client';
import { QUERY_ME } from "../utils/queries";
import { QUERY_PETS } from "../utils/queries";
import Pet from "../components/PetProfile";

const UserProfile = () => {
    const { loading, data } = useQuery(QUERY_ME);
    const { loading: petLoading, data: petData } = useQuery(QUERY_PETS)
    const me = data?.me || {};
    console.log('profile:', me);
    const answers = me.answers

    const pets = petData?.pets || [];
    console.log('profile:', pets);

    //checking for other quizes here



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
    console.log(allFilteredPets);

    //match the matched key values and add 1 for every same value
    const finalScore = []
    if (answers) {
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
                    if (userAnswer === petLabels && userValues === petAnswers) {
                        score++
                    }
                })
            })
            finalScore.push({ "_id": allFilteredPets[index]._id, "score": score })

        }
    }
    console.log(finalScore);

    //any number over 3 add to an array
    const matches = [];
    for (let index = 0; index < finalScore.length; index++) {
        console.log(finalScore[index])
        Object.keys(finalScore[index]).map((label) => {
            const petScoreMatch = finalScore[index][label]
            console.log(petScoreMatch);
            if (petScoreMatch >= 3) {
                console.log(finalScore[index])
                const yourPet= finalScore[index]._id
                for (let index = 0; index < pets.length; index++) {
                    const pet = pets[index];
                    if (pet._id === yourPet) {
                        console.log(pet)
                        matches.push(pet)
                    }
                }
            }

        })
          console.log(matches)

    }

    //render pet cards by mapping through array 
    return (
        <div>
            <h1 className="matchTitle">Your Pet Matches!</h1>
            <div>
                <Pet matches={matches} />
            </div>
        </div>
    )
}

export default UserProfile;