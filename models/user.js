import mongoose from 'mongoose'
const Schema = mongoose.Schema

const userSchema = new Schema({
    nickName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    avatarUrl: {
        type: String
    },
    country: {
        type: String
    },
    province: {
        type: String
    },
    city: {
        type: String
    },
    gender: {
        type: Number
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const UserModel = mongoose.model('User', userSchema)

export default UserModel
