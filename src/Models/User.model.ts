import moongose, { Schema } from 'mongoose'

const UserSchema: Schema = new Schema({
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
})

const User = moongose.model('user', UserSchema)

// module.exports = User

export default User