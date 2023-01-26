import mongoose from "mongoose"

const genreSchema = new mongoose.Schema({
    name: { type: String, required: true }
})

const GenreModel = mongoose.model('Genre', genreSchema)

export { GenreModel }