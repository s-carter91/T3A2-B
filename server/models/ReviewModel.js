import mongoose from "mongoose"

const reviewSchema = new mongoose.Schema({
    gameId: { type: mongoose.ObjectId, ref: 'Game' },  // Review must be linked to a game model
    userId: { type: mongoose.ObjectId, ref: 'User' },
    content: { type: String, required: true }
})

const ReviewModel = mongoose.model('Review', reviewSchema)

export { ReviewModel }