import { Express } from 'express'
import { GameModel } from '../db.js'

const router = express.Router()

router.get('/', async (req, res) => (await GameModel.find().populate({ path: 'platform', select: 'name'})))  // Will return all games with platform 

export default router