import express from 'express'
import { GameModel } from '../db.js'

const router = express.Router()

router.get('/', async (req, res) => res.send(await GameModel.find().
    populate({ path: 'platform', select: 'name'}).
    populate({ path: 'genre', select: 'name'})
 // Will return all games with platform and genre names
))
export default router