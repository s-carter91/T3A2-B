import { connect } from 'mongoose'
import app from './app.js'
import { connectToDb } from './db.js'
// import dotenv from 'dotenv'
// dotenv.config()

connectToDb()

const port = process.env.PORT || 4002

app.listen(port, () => console.log(`App running at http://localhost:${port}/`))
