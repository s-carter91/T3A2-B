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


// GET all ratings for a game
router.get('/rating/:gameid', async (req, res) => {
    try {
        const game = await GameModel.findById(req.params.gameid)
        if (game) {
            const ratings = await RatingModel.findByID(game.id) // want this to return an array
            if (ratings) {
                res.send(ratings)
            } else {
                res.status(404).send({ error: 'that game does not have any reviews' })
            }
        } else {
            res.status(404).send({ error: 'that game does not exist' })
        }
    } catch (err) {
        res.status(500).send({ error: err.message })
    }
})



// POST a rating
router.post('/ratings/gameid', async (req, res) => {
    try {
        const { gameId, stars } = req.body
        const ratingObject = await GameModel.findByID[req.params.gameid]
        const newReview = { gameId: ratingObject}
    
        const insertedRating = await RatingModel.create(newReview)
        res.status(201).send(insertedRating.populate({ path: 'game', select: 'name' }))
    } catch (err){
    res.status(500).send({ error: err.message})
    }
})
    // create a new review and insert the gameid into the review model

export default router