const { Schema, model } = require('mongoose');

const quizSchema = new Schema(
    {
      gender: {
        type: String,
        unique: true,
        trim: true
      },
      age: {
        type: Array,
        unique: true,
        trim: true
      },
      category: {
        type: Array,
        unique: true,
        trim: true
      },
      activity: {
        type: String,
        unique: true,
        trim: true
      },
      needs: {
        type: Boolean,
        unique: true,
        trim: true
      },
      household: {
        type: Array,
        unique: true,
        trim: true
      },
      otherPets: {
        type: Boolean,
        unique: true,
        trim: true
      }
      
    })

    const Quiz = model('Quiz', quizSchema);

    module.exports = Quiz;