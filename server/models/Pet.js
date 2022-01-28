const { Schema, model } = require('mongoose');

const petSchema = new Schema(
    {
      name: {
        type: String,
        required: true,

        trim: true
      },
      description:{
        type: String,
        trim: true
      },
      image:{
        type: String,
        required: true,
        
        trim: true
      },
      location:{
        type: String,
        required: true,
        
        trim: true
      },

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

    const Pet = model('Pet', petSchema);

    module.exports = Pet;