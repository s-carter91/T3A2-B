import express from "express"
import { UserModel } from '../models/UserModel.js'
import { GameModel } from "../models/GameModel.js"
import { ReviewModel } from "../models/ReviewModel.js"
import { RatingModel } from "../models/RatingModel.js"
import jwt from 'jsonwebtoken'
import jwtVerify from "../middleware/auth.js"

const router = express.Router()

router.get('/playing', async( req, res) => {
        const userObject = await UserModel
            .findOne({ username : "Testuser" })
            .populate("currentGames")
        const list= userObject.currentGames
        res.json(list)
    }
)

// router.get('/who_am_i', jwtVerify,async (req, res) => {
//     console.log(req.user)
//     res.send(req.user)
// })

// router.post('/signup', async( req, res) => {
//     const jwtobj = jwt.sign({
//         id: "63db5a04d111a98f4568a662"
//     }, "secreetKey")
//     console.log(jwtobj)
//     res.send(jwtobj)
// })

// Add game to users playing list
router.patch('/playing/', async (req, res) => {
    try {
        const { gameId } = req.body
        const gameObject = await GameModel.findById({ _id : gameId })
        const userObject = await UserModel.findOne()
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
        const userObject = await UserModel.findOne({ _id: userId })
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
router.get('/completed', async( req, res) => {
    // try {
        
        const userObject = await UserModel
        .findOne({ username : "Testuser" })
        .populate("completed Games")
        const sendObj=userObject.completedGames
        // const sendy = sendObj.map(async(id, index) => (
        //     await GameModel.findById(id)
        //     ))
            // console.log(sendy)
        res.send(sendObj)
    // } catch (err){
    //     res.status(500).send({ error: err.message })
    }
)

// Add game to completed list (checks currently playing and removes)
router.patch('/completed/', async (req, res) => {
    try {
        const { userId , gameId } = req.body
        const gameObject = await GameModel.findById({ _id : gameId })
        const userObject = await UserModel.findById({ _id: userId })
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
        const userObject = await UserModel.findOne({ _id: userId })
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