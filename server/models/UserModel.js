import mongoose from "mongoose"

// mongoose.set('strictQuery', true)

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
    multiplayer: { type: Boolean, required: true},

})

const GameModel = mongoose.model('Game', gameSchema)

// const imageSchema = new mongoose.Schema({
//     img:{data:Buffer},
//     contentType: String
// })



const reviewSchema = new mongoose.Schema({
    gameId: { type: mongoose.ObjectId, ref: 'Game' },  // Review must be linked to a game model
    // userId: { type: mongoose.ObjectId, ref: 'User' },
    content: { type: String, required: true }
})

const ReviewModel = mongoose.model('Review', reviewSchema)

const ratingSchema = new mongoose.Schema({
    gameId: { type: mongoose.ObjectId, ref: 'Game' }, // Rating must be linked to a game object
    stars: { type: Number, required: true }
})

const RatingModel = mongoose.model('Rating', ratingSchema)
 
const platformSchema = new mongoose.Schema({
    name: { type: String, required: true }
})

const PlatformModel = mongoose.model('Platform', platformSchema)

const genreSchema = new mongoose.Schema({
    name: { type: String, required: true}
})

const GenreModel = mongoose.model('Genre', genreSchema)

mongoose.set('strictQuery', true)
async function dbClose(){
    await mongoose.connection.close();
    console.log("Database disconnected!");
}

export {UserProfileModel, GameModel, GenreModel, ReviewModel, RatingModel, PlatformModel }