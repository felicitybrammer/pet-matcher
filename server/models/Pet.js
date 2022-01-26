const { Schema, model } = require('mongoose');

const petSchema = new Schema(
    {
      name: {
        type: String,
        required: true,
        unique: true,
        trim: true
      },
      description:{
        type: String,
        trim: true
      },
      image:{
        type: String,
        required: true,
        unique: true,
        trim: true
      },
      location:{
        type: String,
        required: true,
        trim: true
      },
      answers: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Quiz'
          }
      ]
    })

    const Pet = model('Pet', petSchema);

    module.exports = Pet;