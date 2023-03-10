import express from "express"
import { UserModel } from '../models/UserModel.js'
import { GameModel } from "../models/GameModel.js"
import { ReviewModel } from "../models/ReviewModel.js"
import { RatingModel } from "../models/RatingModel.js"

const router = express.Router()

// Get all users
router.get('/', async (req, res) => {
    const userobj = await UserModel.findOne()
    .populate("currentGames")
    .populate("completedGames")
    res.send(userobj)
})

// Return specified user with ID
router.get('/:id', async (req,res) =>{
    try {
        const user = await UserModel.findById(req.params.id)
        if (user) {
            res.send(user)
        } else {
            res.status(404).send({error:'User not found'})
        }
    }
    catch (err) {
        res.status(500).send({error: err.message})
    }
})

// Get playing list
router.get('/playing', async( req, res) => {
    req.header = {userId}
        const userObject = await UserModel
            .findById({ _id : userId })
            .populate("currentGames")
        const list= userObject.currentGames
        res.json(list)
    }
)

// Add game to users playing list
router.patch('/:userid/playing/', async (req, res) => {
    try {
        const { gameId } = req.body
        const gameObject = await GameModel.findById({ _id : gameId })
        const userObject = await UserModel.findById({ _id : req.params.userid })
        if (gameObject) {
            if (userObject) {
                if (userObject.currentGames.includes(gameObject._id)) {
                    res.status(400).send({ error: `${gameObject.name} is already in your currently playing list` })
                } else {
                    userObject.currentGames.push(gameObject)
                    await userObject.save()
                    res.status(201).send(gameObject)
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
router.delete('/:userid/playing/', async (req, res) => {
    try {
        const { gameId } = req.body
        const gameObject = await GameModel.findById({ _id : gameId })
        const userObject = await UserModel.findById({ _id : req.params.userid })
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

// get all completed games 
router.get('/:userid/completed', async( req, res) => {
        const userObject = await UserModel.findById({ _id : req.params.userid })
        .populate("completedGames")
        const sendObj=userObject.completedGames
        res.send(sendObj)
    }
)

// Add game to completed list (checks currently playing and removes)
router.patch('/:userid/completed/', async (req, res) => {
    try {
        const { gameId } = req.body
        const gameObject = await GameModel.findById({ _id : gameId })
        const userObject = await UserModel.findById({ _id : req.params.userid })
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
router.delete('/:userid/completed/', async (req, res) => {
    try {
        const { gameId } = req.body
        const gameObject = await GameModel.findById({ _id : gameId })
        const userObject = await UserModel.findById({ _id : req.params.userid })
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