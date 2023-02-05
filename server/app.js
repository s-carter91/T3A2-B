import express from 'express'
import gamesRoutes from './routes/games_routes.js'
import reviewsRoutes from './routes/reviews_routes.js'
import ratingsRoutes from './routes/ratings_routes.js'
import cors from 'cors'
import usersRoutes from './routes/user_routes.js'
import authRoutes from './routes/user_auth.js'

const app = express()

app.use(cors())

app.use(express.json())

app.get('/', (req, res) => res.send({ info: 'Backloggo'}))

app.use('/games', gamesRoutes)

app.use('/users', usersRoutes)

app.use('/reviews', reviewsRoutes)

app.use('/ratings', ratingsRoutes)

app.use('/auth', authRoutes)

export default app