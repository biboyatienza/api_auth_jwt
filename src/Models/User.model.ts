import moongose, { Schema } from 'mongoose'
import bcrypt from 'bcrypt'

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

// Password hashing
UserSchema.pre('save', async function(next) {
  try {
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(this.password, salt)
    this.password = hashedPassword
    next()
  } catch (error: any) {
    next(error)
  }
})

const User = moongose.model('user', UserSchema)

// module.exports = User

export default User