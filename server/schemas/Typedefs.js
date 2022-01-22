const {gql} = require('apollo-server-express');

const typeDefs = gql`
    type User {
    _id: ID
    name: String
    email: String
    password: String
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
    age: Array
    category: Array
    activity: String
    needs: Boolean
    household: Array
    otherPets: Boolean
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    pet(_id:ID!): Pet
    pets: [Pet]
    category(category: Array): Quiz
    
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(name: String!, email: String!, password: String!): Auth
    updateQuiz(input: inputQuiz): User
  }

  input inputQuiz {
    _id: ID
    gender: String
    age: Array
    category: Array
    activity: String
    needs: Boolean
    household: Array
    otherPets: Boolean
  }
  
`;

module.exports = typeDefs;
