const { AuthenticationError } = require('apollo-server-express');
const { UniqueTypeNamesRule } = require('graphql');
const { User, Pet } = require('../models');
const quizSchema = require('../models/Quiz');
const { findOneAndDelete } = require('../models/User');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select('-__v -password')
          .populate('answers')
          

        return userData;
      }

      throw new AuthenticationError('Not logged in');
    },
    pets: async () => {
      return Pet.find()
        .select('-__v')
      // .populate('answers');
    },
    pet: async (parent, { _id }) => {
      return Pet.findOne({ _id })
        .select('-__v')
      // .populate('answers');
    },


  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    addPet: async (parent, args) => {
      const pet = await Pet.create(args);

      return pet;
    },
    addQuiz: async (parent, args, context) => {
      
      
      
      const updateUser = await User.findByIdAndUpdate(
        { _id: context.user._id },
        { $push: { answers: args } },
        { new: true }
      );

      return updateUser;
    },
    deleteQuiz: async (parent, { id } , context) => {
      
          const data = await User.findByIdAndUpdate(
            context.user._id,
            { $pull: { 'answers': {'_id': id}}},
            { new: true }
          );
          return data; 
    },

    deleteAllQuiz: async (parent, args, context) => {
      const data = await User.findByIdAndUpdate(
        context.user.id, 
        { $set: { answers: [] } },
        { new: true } 
      );
      return data;
    },
  


    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);
      return { token, user };
    },
    updateQuiz: async (parent, args, context) => {
      if (context.user) {

        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { answers: { sex: context.user.sex, age: context.user.age, category: context.user.category, activity: context.user.activity, needs: context.user.needs, household: context.user.household, otherPets: context.user.otherPets } } },

          { new: true }
        )

        User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { answers: args } },
          { new: true }
        )
        return updatedUser;

      }

      throw new AuthenticationError('You need to be logged in!');

    },
    
    


  }
};

module.exports = resolvers;