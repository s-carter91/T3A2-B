import express from 'express'
import { RatingModel, ReviewModel, GameModel } from '../db'

const app = express()

// GET all reviews for a game
app.get('/reviews/:gameid', async (req, res) => {
    try {
        const game = await GameModel.findById(req.params.gameid)
        if (game) {
            const reviews = await ReviewModel.findByID(game.id)
            if (reviews) {
                res.send(reviews)
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

// GET all ratings for a game
app.get('/rating/:gameid', async (req, res) => {
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

// POST a review
app.post('/reviews', async (req, res) => {
    try {
        const { gameId, content } = req.body
        const gameObject = await GameModel.findByID({ gameId: gameId })
        const newReview = { gameId: gameObject._id, content }

        const insertedReview = await ReviewModel.create(newReview)
        res.status(201).send(insertedReview.populate({ path: 'game', select: 'name'}))
    } catch (err){
        res.status(500).send({ error: err.message})
    }
})

// POST a rating
app.post('/ratings/gameid', async (req, res) => {
    try {
        const { gameId, stars } = req.body
        const ratingObject = await GameModel.findByID[req.params.gameid]
        const newReview = { gameId: ratingObject}
    
        const insertedRating = await RatingModel.create(newReview)
        res.status(201).send(insertedRating.populate({ path: 'game', select: 'name'}))
    } catch (err){
    res.status(500).send({ error: err.message})
    }
})
    // create a new review and insert the gameid into the review model
