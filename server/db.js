import mongoose from "mongoose"

mongoose.set('strictQuery', true)


const userProfileSchema = new mongoose.Schema({
    username: {type: String, required: true},
    currentGames: [{ type: mongoose.ObjectId, ref: 'Game' }],
    completedGames: [{ type: mongoose.ObjectId, ref: 'Game' }]
  })

const UserProfileModel = mongoose.model('UserProfile', userProfileSchema)

const gameSchema = new mongoose.Schema({
    name: { type: String, required: true },
    genre: { type: mongoose.ObjectId, ref: 'Genre' },
    platform: { type: mongoose.ObjectId, ref: 'Platform' },
    multiplayer: { type: Boolean, required: true}
})

const GameModel = mongoose.model('Game', gameSchema)

const ReviewSchema = new mongoose.Schema({
    gameId: { type: mongoose.ObjectId, ref: 'Game' },  // Review must be linked to a game model
    review: { type: String, required: true }
})

const ReviewModel = mongoose.model('Review', ReviewSchema)

const RatingSchema = new mongoose.Schema({
    gameId: { type: mongoose.ObjectId, ref: 'GameId' }, // Rating must be linked to a game object
    rating: { type: Number, required: true }
})

const RatingModel = mongoose.model('Rating', RatingSchema)

const PlatformSchema = new mongoose.Schema({
    name: { type: String, required: true }
})

const PlatformModel = mongoose.model('Platform', PlatformSchema)

const genreSchema = new mongoose.Schema({
    name: { type: String, required: true}
})

const genreModel = mongoose.model('Genre', genreSchema)

export { UserProfileModel, GameModel, genreModel, ReviewModel, RatingModel, PlatformModel }