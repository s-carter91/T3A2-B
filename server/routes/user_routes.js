import express from "express"
import { UserProfileModel } from '../models/UserModel.js'
import { GameModel } from "../models/GameModel.js"
import { ReviewModel } from "../models/ReviewModel.js"
import { RatingModel } from "../models/RatingModel.js"

const router = express.Router()

// Add game to users playing list
router.patch('/playing/', async (req, res) => {
    try {
        const { userId , gameId } = req.body
        const gameObject = await GameModel.findById({ _id : gameId })
        const userObject = await UserProfileModel.findById({ _id : userId })
        if (gameObject) {
            if (userObject) {
                if (userObject.currentGames.includes(gameObject._id)) {
                    res.status(400).send({ error: `${gameObject.name} is already in your currently playing list` })
                } else {
                    userObject.currentGames.push(gameObject)
                    await userObject.save()
                    res.status(201).send(`${gameObject.name} has been added to your current games list`)
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

// Remove game from current games
router.delete('/playing/', async (req, res) => {
    try {
        const { userId , gameId } = req.body
        const gameObject = await GameModel.findById({ _id : gameId })
        const userObject = await UserProfileModel.findOne({ _id: userId })
        if (gameObject) {
            if (userObject) {
                if (userObject.currentGames.includes(gameObject._id)) {
                    const index = userObject.currentGames.indexOf(gameObject)
                    userObject.currentGames.splice(index, 1)
                    userObject.save()
                    res.send(`${gameObject.name} has been removed from your games list`)                   
                } else {   
                    res.status(400).send({ error: 'Game not in currently playing list'}) 
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

// Add game to completed list (checks currently playing and removes)
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
                    res.status(201).send(`${gameObject.name} added to your completed games`)
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

// Removed from completed games
router.delete('/completed/', async (req, res) => {
    try {
        const { userId , gameId } = req.body
        const gameObject = await GameModel.findById({ _id : gameId })
        const userObject = await UserProfileModel.findOne({ _id: userId })
        if (gameObject) {
            if (userObject) {
                if (userObject.completedGames.includes(gameObject._id)) {
                    const index = userObject.completedGames.indexOf(gameObject)
                    userObject.completedGames.splice(index, 1)
                    userObject.save()
                    res.send(`${gameObject.name} has been removed from your completed list`)                   
                } else {   
                    res.status(400).send({ error: 'Game not in completed list'}) 
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