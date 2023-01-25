import mongoose from "mongoose"

const platformSchema = new mongoose.Schema({
    name: { type: String, required: true }
})

const PlatformModel = mongoose.model('Platform', platformSchema)

export { PlatformModel }