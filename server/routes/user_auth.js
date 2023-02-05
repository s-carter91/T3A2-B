import express from 'express'
import { UserModel } from '../models/UserModel.js'
import jwt from 'jsonwebtoken'
import jwtVerify from '../middleware/auth.js'
import dotenv from 'dotenv'
dotenv.config()

const router = express.Router()

// check who is logged in
router.get('/loggedin', jwtVerify,async (req, res) => {
    res.send(req.user)
})

// login to user account
router.post('/login', async( req, res) => {
    const { username, password } = req.body
    const userObject = await UserModel
        .findOne({ username : username, password : password })
        .populate("currentGames")
        .populate("completedGames")
        .select('-password')
    if (userObject) {
            const jwtobj = jwt.sign({
                id: userObject._id
            }, process.env.JWT_SECRET_KEY)
            res.send({token:jwtobj, user: userObject})
    }
    else {
        res.status(401).send({ error: 'Username or password is incorrect' })
    }
})

// create new user account
router.post('/signup', async( req, res) => {
    try {
        const { username, password, name } = req.body
        const checkUser = await UserModel.findOne({ username : username })
        if (checkUser) {
            res.status(401).send({ error: 'Username is already in use' })
        } else {
            const newUserObject = { username, password, name }
            const createNewUser = await UserModel.create(newUserObject)
            const returnedNewUser = await UserModel
                .findById(createNewUser._id)
                .select('-password')
                .populate("currentGames")
                .populate("completedGames")
            const jwtobj = jwt.sign({
                id: createNewUser._id
            }, process.env.JWT_SECRET_KEY)
            res.send({token:jwtobj, user: returnedNewUser})
        }
    } catch (err){
        res.status(500).send({ error: err.message})
    }
})

router.post('/signout', async( req, res) => {
    try {

    }
    catch (err) {
        res.status(500).send({ error: err.message })
    }
})

export default router