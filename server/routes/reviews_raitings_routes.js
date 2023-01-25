import express from 'express'
import { RatingModel, ReviewModel, GameModel } from '../models/UserModel.js'


const router = express.Router()

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
        const { gameId, content } = req.body
        // const gameId = await GameModel.findById({ gameId: gameId })
        const newReview = { gameId, content }

        const insertedReview = await ReviewModel.create(newReview)
        res.status(201).send(insertedReview)
    } catch (err){
        res.status(500).send({ error: err.message})
    }
})




export default router