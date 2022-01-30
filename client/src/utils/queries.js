import{gql} from "@apollo/client";

export const QUERY_PETS = gql` 
query pets{
    pets{
        _id
        name
        description
        image
        location
        sex
        age
        category
        activity
        needs
        household
        otherPets
    }
}

`;
