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

export const QUERY_PET = gql `
    query pet($_id: ID!) {
        pet(_id: $_id) {
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

export const QUERY_ME = gql `
query me {
    me {
      _id
      name
      email
        answers {
          sex
          age
          category
          activity
          needs
          household
          otherPets
        }
      }
    }
`;
