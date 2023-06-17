const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a name'],
    },
    email: {
      type: String,
      required: [true, 'Please add a email'],
      unique: true,
      trim: true,
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        'Please enter a valid email',
      ],
    },
    password: {
      type: String,
      required: [true, 'Please add a password'],
      minLength: [6, 'Password must be up to 6 characters'],
      maxLength: [23, 'Password must not be more than 23 characters'],
    },
    photo: {
      type: String,
      required: [true, 'Please add a photo'],
      default:
        'https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?w=740&t=st=1686973209~exp=1686973809~hmac=1b6d3cda48873b73e676bcadece5aa033e76ae14e259df38465cc30892e5acbe',
    },
    phone: {
      type: String,
      default: '+234',
    },
    bio: {
      type: String,
      maxLength: [250, 'Bio must be more than 250 characters'],
      default: 'bio',
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model('User', userSchema);
module.exports = User;
