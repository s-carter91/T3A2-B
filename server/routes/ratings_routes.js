import express from "express"
import { RatingModel, GameModel } from "../models/UserModel.js"

const router = express.Router()

// GET all ratings for a game
router.get('/:gameid', async (req, res) => {
    try {
        const game = await GameModel.findById(req.params.gameid)
        if (game) {
            const ratings = await RatingModel.find({ gameId: req.params.gameid })//.populate({ path : 'game', select: 'gameId'  }) // want this to return an array
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
router.post('/', async (req, res) => {
    try {
        const { gameId, stars } = req.body
        const game = await GameModel.findById(gameId)
        if (game) {
            const newRating = { gameId, stars }
            const insertedRating = await RatingModel.create(newRating)
            res.status(201).send(insertedRating) //.populate ({ path: 'game', select: 'name' }))
        } else {
            res.send({ error: 'Game not found' })
        }
        // const newReview = { gameId: ratingObject}
    } catch (err){
        res.status(500).send({ error: err.message})
    }
})
    // create a new review and insert the gameid into the review model

export default router