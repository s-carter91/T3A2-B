import express from "express"
import { GameModel } from "../models/GameModel.js"
import { RatingModel } from "../models/RatingModel.js"

const router = express.Router()

// GET all rating objects for a game
router.get('/:gameId/', async (req, res) => {
    try {
        const game = await GameModel.findById(req.params.gameId)
        if (game) {
            const ratings = await RatingModel.find({ gameId: req.params.gameId }).populate( 'gameId' ) // want this to return an array
            if (ratings.length > 0) {
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

// GET all ratings starsin an array for a game
router.get('/stars/:gameId/', async (req, res) => {
    try {
        const game = await GameModel.findById(req.params.gameId)
        if (game) {
            const ratings = await RatingModel.find({ gameId: req.params.gameId }).populate( 'gameId' ) // want this to return an array
            if (ratings) {
                const list = []
                ratings.map(obj => {
                    list.push(obj.stars)
                })
                console.log(list)
                res.send(list)
                
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
router.post('/:gameId', async (req, res) => {
    try {
        const { stars, userId } = req.body
        const game = await GameModel.findById(req.params.gameId)
        if (game) {
            const newRating = { gameId: req.params.gameId, stars, userId }
            const checkForRating = await RatingModel.findOne({ gameId: req.params.gameId, userId: userId })
            if (checkForRating) {
                res.status(409).send({ error: 'that user already has made a review for this game' })
            }
            else {
            const insertedRating = await RatingModel.create(newRating)
            res.status(201).send(insertedRating) //.populate ({ path: 'game', select: 'name' }))
            }
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