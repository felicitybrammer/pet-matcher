import {gql} from '@apollo/client';

export const ADD_QUIZ = gql `
    mutation addQuiz(sex: String, age: String, category: String, activity: String, needs: Boolean, household: String, otherPets: Boolean) {

    }

`;