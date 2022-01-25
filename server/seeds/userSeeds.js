const faker = require('faker');

const db = require('../config/connection');
const { Pet, User, Quiz } = require('../models');

db.once('open', async () => {
  await Pet.deleteMany({});
  await User.deleteMany({});
  await Quiz.deleteMany({});

  // create user data
  const userData = [];

  for (let i = 0; i < 50; i += 1) {
    const name = faker.Name.name();
    const email = faker.internet.email(name);
    const password = faker.internet.password();

    userData.push({ name, email, password });
  }

  const createdUsers = await User.collection.insertMany(userData);

  // create favourites (pets)
  for (let i = 0; i < 100; i += 1) {
    const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
    const { _id: userId } = createdUsers.ops[randomUserIndex];

    let petId = userId;

    while (petId === userId) {
      const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
      petId = createdUsers.ops[randomUserIndex];
    }

    await User.updateOne({ _id: userId }, { $addToSet: { favourites: petId } });
  }

  // create quiz answers 
  let quizAnswers = [];
  for (let i = 0; i < 100; i += 1) {
    //const thoughtText = faker.lorem.words(Math.round(Math.random() * 20) + 1);

    const gender = () => {
        const num = Math.floor((Math.random() * 2) + 1);
        if (num === '1') {
            return 'female';
        } else {
        return 'male';
        }
    }

    const age = () => {
        num = Math.floor((Math.random() * 4) + 1);
        switch (num) {
            case 1: 
                return 'baby';
                break;
            case 2: 
                return 'young adult';
                break;
            case 3:
                return 'adult';
                break;
            case 4:
                return 'senior';
                break;
            default:
                return 'adult';
        }   
    }
    
   
    const category = () => {
        num = Math.floor((Math.random() * 4) + 1);
        switch (num) {
            case 1: 
                return 'Dog';
                break;
            case 2: 
                return 'Cat';
                break;
            case 3:
                return 'Reptile';
                break;
            case 4:
                return 'Bird';
                break;
            default:
                return 'Dog';
        }   
    }
    
    const activity = () => {
        num = Math.floor((Math.random() * 3) + 1);
        switch (num) {
            case 1: 
                return 'low';
                break;
            case 2: 
                return 'moderate';
                break;
            case 3:
                return 'high';
                break;
            default:
                return 'moderate';
        }   
    }
    const needs
    const household
    const otherPets

    const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
    const { name, _id: userId } = createdUsers.ops[randomUserIndex];

    const quizAnswers = await Quiz.create({ gender, age, category, activity, needs, household, otherPets });

    const updatedUser = await User.updateOne(
      { _id: userId },
      { $push: { answers: quizAnswers._id } }
    );

    quizAnswers.push(quizAnswers);
  }

  // create reactions
  for (let i = 0; i < 100; i += 1) {
    const reactionBody = faker.lorem.words(Math.round(Math.random() * 20) + 1);

    const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
    const { username } = createdUsers.ops[randomUserIndex];

    const randomThoughtIndex = Math.floor(Math.random() * createdThoughts.length);
    const { _id: thoughtId } = createdThoughts[randomThoughtIndex];

    await Thought.updateOne(
      { _id: thoughtId },
      { $push: { reactions: { reactionBody, username } } },
      { runValidators: true }
    );
  }

  console.log('all done!');
  process.exit(0);
});
