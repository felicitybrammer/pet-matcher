const { AuthenticationError } = require('apollo-server-express');
const { User, Pet, Quiz } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
          if (context.user) {
            const userData = await User.findOne({ _id: context.user._id })
              .select('-__v -password')
              .populate('answers')
              .populate('favourites');
    
            return userData;
          }
    
          throw new AuthenticationError('Not logged in');
        },
        pets: async () => {
          return Pet.find()
            .select('-__v')
            .populate('answers');
        },
        pet: async (parent, { _id }) => {
          return Pet.findOne({ _id })
            .select('-__v')
            .populate('answers');
        },
        // category: 
        
    },
    
      Mutation: {
        addUser: async (parent, args) => {
          const user = await User.create(args);
          const token = signToken(user);
    
          return { token, user };
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
        updateQuiz: async(parent, { input }, context) => {
            if (context.user) {
            const updatedUser = await User.findByIdAndUpdate(
                { _id: context.user._id },
                { $addToSet: { answers: input._id } },
                { new: true }

            );
            return updatedUser; 
            }     
            throw new AuthenticationError('You need to be logged in!');  
        },
    }
};

module.exports = resolvers;