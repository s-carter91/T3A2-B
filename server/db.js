import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

mongoose.set('strictQuery', true)

async function dbClose(){
    await mongoose.connection.close();
    console.log("Database disconnected!");
}

// connect to a MongoDB via Mongoose
try {
    const m = await mongoose.connect(process.env.ATLAS_DB_URL) // can use await at the top level without wrapping in an async function
    console.log(m.connection.readyState === 1 ? 'Mongoose connected!' : 'Mongoose failed to connect')  // This is good for de-bugging reasons - m is the resolved value returned by connect, is arbitrary name
  }
  catch (err) {
    console.log(err)
  }


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
    content: { type: String, required: true }
})

const ReviewModel = mongoose.model('Review', ReviewSchema)

const RatingSchema = new mongoose.Schema({
    gameId: { type: mongoose.ObjectId, ref: 'GameId' }, // Rating must be linked to a game object
    stars: { type: Number, required: true }
})

const RatingModel = mongoose.model('Rating', RatingSchema)

const PlatformSchema = new mongoose.Schema({
    name: { type: String, required: true }
})

const PlatformModel = mongoose.model('Platform', PlatformSchema)

const genreSchema = new mongoose.Schema({
    name: { type: String, required: true}
})

const GenreModel = mongoose.model('Genre', genreSchema)

export { UserProfileModel, GameModel, GenreModel, ReviewModel, RatingModel, PlatformModel, dbClose }