const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema(
    {
      name: {
        type: String,
        required: true,
        unique: true,
        trim: true
      },
      email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must match an email address!']
      },
      password: {
        type: String,
        required: true,
        minlength: 5
      },
      answers: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Quiz'
          }
      ],
      favourites: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Pet'
          }
      ]
    })

    const User = model('User', userSchema);

    module.exports = User;