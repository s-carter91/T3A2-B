import mongoose from "mongoose"

const gameSchema = new mongoose.Schema({
    name: { type: String, required: true },
    genre: { type: mongoose.ObjectId, ref: 'Genre' },  
    platform: [{ type: mongoose.ObjectId, ref: 'Platform' }],
    multiplayer: { type: Boolean, required: true},
    time_to_complete: {type: Number, required: true},
    image : { type: String, required: true}
})

const GameModel = mongoose.model('Game', gameSchema)

export { GameModel }