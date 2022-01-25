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
      answers: 
        {
            type: Schema.Types.ObjectId,
            ref: 'Quiz'
        } 
      ,
      favourites: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Pet'
          }
      ]
    })

    // hash user password
  userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
  });

  // custom method to compare and validate password for logging in
  userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
  };

    const User = model('User', userSchema);

    module.exports = User;