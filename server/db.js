import mongoose from "mongoose"

mongoose.set('strictQuery', true)


const userProfileSchema = new mongoose.Schema({
    username: {type: String, required: true},
    currentGames: [{ type: mongoose.ObjectId, ref: 'GameId' }],
    completedGames: [{ type: mongoose.ObjectId, ref: 'GameId' }]
  })

const UserProfileModel = mongoose.model('UserProfile', userProfileSchema)

const ReviewSchema = new mongoose.Schema({
    gameId: { type: mongoose.ObjectId, ref: 'GameId' },  // Review must be linked to a game model
    review: { type: String, required: true }
})

const ReviewModel = mongoose.model('Review', ReviewSchema)

const RatingSchema = new mongoose.Schema({
    gameId: { type: mongoose.ObjectId, ref: 'GameId'}, // Rating must be linked to a game object
    rating: { type: Number, required: true }
})

const RatingModel = mongoose.model('Rating', RatingSchema)

const PlatformSchema = new mongoose.Schema({
    name: { type: String }
})

const PlatformModel = mongoose.model('Platform', PlatformSchema)

export { UserProfileModel, ReviewModel, RatingModel, PlatformModel }