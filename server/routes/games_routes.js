import express from 'express'
import { GameModel } from '../db.js'

const router = express.Router()

router.get('/', async (req, res) => res.send(await GameModel.find()
    .populate({ path: 'platform', select: 'name'})
    .populate({ path: 'genre', select: 'name'})
 // Will return all games with platform and genre names
))

// Return specified game with ID
router.get('/:id', async (req,res) =>{
    try {
        const game = await GameModel.findById(req.params.id)
        if (game) {
            res.send(game)
        } else {
            res.status(404).send({error:'Game not found'})
        }
    }
    catch (err) {
        res.status(500).send({error: err.message})

    }

})

// Add a game to games list test
router.post('/', async (req, res) => {
    try {
    //1. Create a new game object
    const { name, genre, platform, multiplayer } = req.body;
    const newGame = { name, genre, platform, multiplayer }
    //2. Push new game into games list
    const insertedGame = await GameModel.create(newGame)
    res.status(201).send(insertedGame)
    }
    catch(err) {
        res.status(500).send({error: err.message})
    }
})

//Edit game card
router.put('/:id', async (req, res) => {
    const { name, genre, platform, multiplayer } = req.body;
    const newGame = { name, genre, platform, multiplayer }

    try {
        const game = await GameModel.findByIdAndUpdate(req.params.id, newGame, {returnDocument: 'after'})
        if (game) {
            res.send(game)
    } else {
        res.status(404).send({error: 'Entry not found'})
    }
    }
    catch (err) {
        res.status(500).send({error: err.message})
    }

})

// Delete a game from list
router.delete('/:id', async(req, res) => {
    try {
        const game = await GameModel.findByIdAndDelete(req.params.id)
        if (game) {
            res.sendStatus(204)
    } else {
        res.status(404).send({error: 'Entry not found'})
    }
    }
    catch (err) {
        res.status(500).send({error: err.message})
    }
})

//Genres
// app.get('/genres', async (req,res) => res.send(await GenreModel.find()))

export default router