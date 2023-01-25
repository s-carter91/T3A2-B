import express from "express"
import { RatingModel, ReviewModel, GameModel } from '../models/UserModel.js'

const router = express.Router()

router.put('/playing/', async (req, res) => {
    try {
        const { userId , gameId } = req.body
        const gameObject = await GameModel.findOne({ gameId })
        const userObject = await UserProfileModel.findOne({ userId })
        if (gameObject) {
            if (userObject) {
                userObject.currentGames.push(gameObject)
            } else {
                res.status(404).send({ error: 'User not found' })
            }
        } else {
            res.status(404).send({ error: 'Game not found' })
        }
    } catch (err){
        res.status(500).send({ error: err.message})
    }
})

router.patch('/completed/', async (req, res) => {
    try {
        const { userId , gameId } = req.body
        const gameObject = await GameModel.findByID({ gameId: gameId })
        const userObject = await UserModel.findByID({ userId: userId })
        if (gameObject) {
            if (userObject) {
                if (userObject.currentGames.indexof(gameObject) >= 0) {
                    const index = userObject.currentGames.indexof(gameObject)
                    userObject.currentGames.splice(index, 1)
                } else {}
                userObject.completedGames.push(gameObject)
            } else {
                res.status(404).send({ error: 'User not found' })
            }
        } else {
            res.status(404).send({ error: 'Game not found' })
        }
    } catch (err){
        res.status(500).send({ error: err.message})
    }
})

export default router