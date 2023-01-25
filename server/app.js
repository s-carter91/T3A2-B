import express from 'express'
import gamesRoutes from './routes/games_routes.js'
import reviewsRoutes from './routes/reviews_raitings_routes.js'
import { GenreModel, ReviewModel, PlatformModel, GameModel } from './models/UserModel.js'

import usersRoutes from './routes/user_routes.js'

const app = express()

app.use(express.json())

app.use('/games', gamesRoutes)

app.get('/', (request, response) => response.send({ info: 'Backloggo'}))


app.get('/genres', async (req,res) => res.send(await GenreModel.find()))

app.get('/platforms', async (req,res) => res.send(await PlatformModel.find()))

app.use('/users', usersRoutes)

// app.get('/reviews/:id', async (req,res) => res.send(await ReviewModel.find()))

app.use('/reviews', reviewsRoutes)

// app.post('/reviews', async (req,res) => res.send(await ReviewModel.find()))

console.log("Greet Friends")


export default app