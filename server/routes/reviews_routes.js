import express from 'express'
import { GameModel } from '../models/GameModel.js'
import { ReviewModel } from '../models/ReviewModel.js'
import { UserModel } from '../models/UserModel.js'



const router = express.Router()

//GET all reviews
router.get('/', async (req, res) => res.send(await ReviewModel.find()
// Will return all reviews
))

// GET all reviews for a game
router.get('/:gameid', async (req, res) => {
    try { 
        const game = await GameModel.findById(req.params.gameid)
        if (game) {
            const reviews = await ReviewModel.find({ gameId: req.params.gameid })
            if (reviews) {
                res.send(reviews)                
            } else {
                res.status(404).send({ error: 'that game does not have any reviews' })
            }
        } else { res.send({ error: 'that game does not exist' })
        }   
    } catch (err) {
        res.status(500).send({ error: err.message })
    }
})

// POST a review
router.post('/', async (req, res) => {
    // Testing without user ID
    try {
        const { userId, gameId, content } = req.body
        // const gameId = await GameModel.findById({ gameId: gameId })
        const newReview = { userId, gameId, content }
        const checkReview = await ReviewModel.find({ gameId: gameId, userId: userId })
        if (checkReview) {
            const updateReview = await ReviewModel.findByIdAndUpdate( checkReview._id , { content: content })
            res.status(409).send('Already had reviewed game. Updated existing review!')
        } else {
            const insertedReview = await ReviewModel.create(newReview)
            const returnedReview = await ReviewModel.findById(insertedReview._id)
            .populate('gameId')
            res.status(201).send(returnedReview)
        }
    } catch (err){
        res.status(500).send({ error: err.message})
    }
})

//Edit a review
router.patch('/:id', async (req, res) => {
    const { userId, gameId, content } = req.body
    const newReview = { userId, gameId, content }

    try {
        const reviews = await ReviewModel.findByIdAndUpdate(req.params.id, newReview, {returnDocument: 'after'})
        if (reviews) {
            res.send(reviews)
    } else {
        res.status(404).send({error: 'Review not found'})
    }
    }
    catch (err) {
        res.status(500).send({error: err.message})
    }

})

//Delete a review
router.delete('/:id', async(req, res) => {
    try {
        const review = await ReviewModel.findByIdAndDelete(req.params.id)
        if (review) {
            res.status(204)
    } else {
        res.status(404).send({error: 'Entry not found'})
    }
    }
    catch (err) {
        res.status(500).send({error: err.message})
    }
})


export default router