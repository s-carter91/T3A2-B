import express from 'express'
import { GameModel } from '../models/GameModel.js'
import { GenreModel } from '../models/GenreModel.js'
import { PlatformModel } from '../models/PlatformModel.js'


const router = express.Router()

router.get('/', async (req, res) => res.send(await GenreModel.find()
 // Will return all games with platform and genre names
))

export default router