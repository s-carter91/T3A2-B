import express from 'express'
import gamesRoutes from './routes/games_routes.js'

const app = express()

app.use(express.json())

app.get('/', (request, response) => response.send({ info: 'Backloggo'}))

console.log("Greet Friends")

app.use('/games', gamesRoutes)

export default app