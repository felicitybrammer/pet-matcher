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
    sex: String
    age: [String]
    category: [String]
    activity: String
    needs: Boolean
    household: [String]
    otherPets: Boolean
  }

  type Quiz {
    _id: ID
    sex: String
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

  

  type Query {
    me: User
    pet(_id:ID!): Pet
    pets: [Pet]
    category(category: [String]): Quiz
    
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(name: String!, email: String!, password: String!): Auth
    addPet(name: String!, description: String, image: String, location: String, sex: String, age: String, category: String, activity: String, needs: Boolean, household: String, otherPets: Boolean): Pet
    addQuiz(sex: String, age: String, category: String, activity: String, needs: Boolean, household: String, otherPets: Boolean): Quiz
    updateQuiz(_id:ID!, sex: String, age: String, category: String, activity: String, needs: Boolean, household: String, otherPets: Boolean): User
  }
`;

module.exports = typeDefs;
