const {gql} = require('apollo-server-express');

const typeDefs = gql`
    type User {
    _id: ID
    name: String
    email: String
    answers: Quiz
    favourites: [Pet]
    }

  type Pet {
    _id: ID
    name: String
    description: String
    image: String
    location: String
    answers: Quiz
  }

  type Quiz {
    _id: ID
    gender: String
    age: [String]
    category: [String]
    activity: String
    needs: Boolean
    household: [String]
    otherPets: Boolean
  }

  type Auth {
    token: ID!
    user: User
  }
  
  input inputQuiz {
    _id: ID
    gender: String
    age: [String]
    category: [String]
    activity: String
    needs: Boolean
    household: [String]
    otherPets: Boolean
  }

  input inputQuiz {
    _id: ID
    gender: String
    age: [String]
    category: [String]
    activity: String
    needs: Boolean
    household: [String]
    otherPets: Boolean
  }
  type Query {
    me: User
    pet(_id:ID!): Pet
    pets: [Pet]
    category(category: [String]): Quiz
    
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(name: String!, email: String!, password: String!): Auth
    addPet(name: String!, description: String, image: String, location: String, gender: String, age: String, category: String, activity: String, needs: Boolean, household: String, otherPets: Boolean): Pet
    addQuiz(gender: String, age: String, category: String, activity: String, needs: Boolean, household: String, otherPets: Boolean): Quiz
    updateQuiz(input: inputQuiz): User
  }

  
  
`;

module.exports = typeDefs;
