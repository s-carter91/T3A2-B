import express from 'express'
import gamesRoutes from './routes/games_routes.js'
import reviewsRoutes from './routes/reviews_routes.js'
import ratingsRoutes from './routes/ratings_routes.js'
import cors from 'cors'
import { GenreModel } from './models/GenreModel.js'
import { PlatformModel } from './models/PlatformModel.js'

import usersRoutes from './routes/user_routes.js'

const app = express()

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => res.send({ info: 'Backloggo'}))


// app.get('/genres', async (req,res) => res.send(await GenreModel.find()))

// app.get('/platforms', async (req,res) => res.send(await PlatformModel.find()))

app.use('/games', gamesRoutes)

app.use('/users', usersRoutes)

app.use('/reviews', reviewsRoutes)

app.use('/ratings', ratingsRoutes)

console.log("Greet Friends")


export default app