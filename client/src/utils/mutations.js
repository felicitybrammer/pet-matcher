import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
        name
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($name: String!, $email: String!, $password: String!) {
    addUser(name: $name, email: $email, password: $password) {
      token
      user {
        id
        name
      }
    }
  }
`;

export const ADD_QUIZ = gql`
  mutation addQuiz($sex: String, $age: String, $category: String, $activity: String, $needs: Boolean, $household: String, $otherPets: Boolean) {
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
