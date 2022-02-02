import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";
import { QUERY_PETS } from "../utils/queries";

const UserProfile = () => {
    const { loading, data } = useQuery(QUERY_ME);
    const me = data?.me || [];
    console.log('profile:', me);

    const { waiting, info } = useQuery(QUERY_PETS);
    const pets = info?.pets || [];
    console.log('Dashboard:', pets);
    

    //match answer key by mapping through pets
    // const keyMatch = (me, pets) => {
    //     pets.map((pet)=>{
    //         const matchK = []
    //         if(Object.keys(pet) === Object.keys(me.answers)){
    //             [Object.keys(pet).value].push(matchK)
    //             console.log(matchK)
    //         } 
    //     })
    //     //match the matched key values and add 1 for every same value
    // }
    // keyMatch();
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