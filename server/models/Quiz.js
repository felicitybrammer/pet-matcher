const { Schema, model } = require('mongoose');

const quizSchema = new Schema(
    {
      sex: {
        type: String,
        
        trim: true
      },
      age: {
        type: Array,
        
        trim: true
      },
      category: {
        type: Array,
        
        trim: true
      },
      activity: {
        type: String,
        
        trim: true
      },
      needs: {
        type: Boolean,
       
        trim: true
      },
      household: {
        type: Array,
       
        trim: true
      },
      otherPets: {
        type: Boolean,                                                                        
        
        trim: true
      }
      
    })

    const Quiz = model('Quiz', quizSchema);

    module.exports = Quiz;