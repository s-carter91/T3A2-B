import mongoose from "mongoose"

const userProfileSchema = new mongoose.Schema({
    username: {type: String, required: true},
    currentGames: [{ type: mongoose.ObjectId, ref: 'Game' }],
    completedGames: [{ type: mongoose.ObjectId, ref: 'Game' }]
})

const UserProfileModel = mongoose.model('UserProfile', userProfileSchema)

// const completedSchema = new mongoose.Schema({
//     gameId: { type: mongoose.ObjectId, ref: 'GameId' },
// })

// const CompletedModel = mongoose.model('Completed', completedSchema)

export { UserProfileModel }