import express from 'express'

const app = express()

app.use(express.json())

app.get('/', (request, response) => response.send({ info: 'Backloggo'}))

console.log("Greet Friends")

export default app