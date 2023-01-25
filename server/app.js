import express from 'express'
import gamesRoutes from './routes/games_routes.js'
import { GenreModel, PlatformModel } from './db.js'
import usersRoutes from './routes/user_routes.js'

const app = express()

app.use(express.json())

app.use('/games', gamesRoutes)

app.get('/', (request, response) => response.send({ info: 'Backloggo'}))


app.get('/genres', async (req,res) => res.send(await GenreModel.find()))

app.get('/platforms', async (req,res) => res.send(await PlatformModel.find()))

app.use('/users', usersRoutes)

console.log("Greet Friends")


export default app