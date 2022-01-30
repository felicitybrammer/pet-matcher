import {gql} from '@apollo/client';

export const ADD_QUIZ = gql `
    mutation addQuiz(sex: String, age: String, category: String, activity: String, needs: Boolean, household: String, otherPets: Boolean) {
        addQuiz(sex: $sex, age: $age, category: $category, activity: $activity, needs: $needs, household: $household, otherPets: $otherPets) {
            answers{ 
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