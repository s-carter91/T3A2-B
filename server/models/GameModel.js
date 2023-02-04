import mongoose from "mongoose"

const gameSchema = new mongoose.Schema({
    name: { type: String, required: true },
    genre: { type: mongoose.ObjectId, ref: 'Genre' },
    description: {type: String, required: true} ,
    platform: [{ type: mongoose.ObjectId, ref: 'Platform' }],
    image : { type: String, required: true}
})

const GameModel = mongoose.model('Game', gameSchema)

export { GameModel }