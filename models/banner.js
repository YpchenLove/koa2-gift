import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = mongoose.Schema.Types.ObjectId

const bannerSchema = new Schema({
    id: ObjectId,
    title: {
        type: String,
        required: true
    },
    imgUrl: {
        type: String,
        required: true
    },
    type: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const bannerModel = mongoose.model('Banner', bannerSchema)

export default bannerModel
