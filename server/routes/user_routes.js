import express from "express"
import { RatingModel, ReviewModel, GameModel, UserProfileModel } from '../models/UserModel.js'

const router = express.Router()

router.patch('/playing/', async (req, res) => {
    try {
        const { userId , gameId } = req.body
        const gameObject = await GameModel.findById({ _id : gameId })
        const userObject = await UserProfileModel.findById({ _id : userId })
        if (gameObject) {
            if (userObject) {
                if (userObject.currentGames.includes(gameObject._id)) {
                    res.status(400).send({ error: 'That game is already in your currently playing list' })
                } else {
                    userObject.currentGames.push(gameObject)
                    await userObject.save()
                    res.send(`${gameObject.name} added to your current games list`)
                }
            } else {
                res.status(404).send({ error: 'User not found' })
            }
        } else {
            res.status(404).send({ error: 'Game not found' })
        }
    } catch (err){
        res.status(500).send({ error: err.message })
    }
})

router.patch('/completed/', async (req, res) => {
    try {
        const { userId , gameId } = req.body
        const gameObject = await GameModel.findById({ _id : gameId })
        const userObject = await UserProfileModel.findOne({ _id: userId })
        if (gameObject) {
            if (userObject) {
                if (userObject.completedGames.includes(gameObject._id)) {
                    res.status(400).send({ error: 'Game already in list'})                    
                } else {
                    const index = userObject.currentGames.indexOf(gameObject)
                    userObject.currentGames.splice(index, 1)
                    userObject.completedGames.push(gameObject)
                    userObject.save()
                    res.send(`${gameObject.name} added to your completed games`)
                }
            } else {
                res.status(404).send({ error: 'User not found' })
            }
        } else {
            res.status(404).send({ error: 'Game not found' })
        }
    } catch (err){
        res.status(500).send({ error: err.message })
    }
})

export default router