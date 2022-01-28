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
        addPet: async(parent, args) => {
          const pet = await Pet.create(args);

          return pet;
        },
        addQuiz: async(parent, args, context) => {
          console.log(args);

          const quiz = await Quiz.create( {...args,name: 'Sam'});
          await User.findByIdAndUpdate(
            { _id: "61f3469a46eaafc1d58a9e65" },
            { $push: { answers: quiz._id } },
            { new: true }
          ); 
          return quiz;
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
        updateQuiz: async(parent, args, context) => {
            if (context.user) {

              const updatedUser = await Quiz.findOneAndUpdate(
                  { _id: quiz._id},
                  { $addToSet: { answers: args } },
                  { new: true }

              );
              return updatedUser; 
            }     
            throw new AuthenticationError('You need to be logged in!');  
        },
    }
};

module.exports = resolvers;