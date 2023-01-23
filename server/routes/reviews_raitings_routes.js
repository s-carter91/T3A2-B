import express from 'express'
import { RatingModel, ReviewModel } from '../db'

const app = express()

app.get('/reviews/:gameid', async (req, res) => {
    try {
        const reviews = await ReviewModel.findByID[req.params.gameid]
        if (reviews) {
            res.send(reviews)
        } else {
            res.status(404).send({ error: 'that game does not have any reviews' })
        }
    } catch (err) {
        res.status(500).send({ error: err.message })
    }
})
