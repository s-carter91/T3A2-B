import mongoose from "mongoose";

const ratingSchema = new mongoose.Schema({
    gameId: { type: mongoose.ObjectId, ref: 'Game' }, // Rating must be linked to a game object
    stars: { type: Number, required: true },
    userId: { type: mongoose.ObjectId, ref: 'User' }
})

const RatingModel = mongoose.model('Rating', ratingSchema)

export { RatingModel}
