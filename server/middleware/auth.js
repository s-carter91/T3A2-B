import { UserModel } from "../models/UserModel.js"
import jwt from "jsonwebtoken"

const jwtVerify = async( req, res, next ) => {
    const token = req.headers.authorization.split(" ")[1]
    console.log( token )
    if (!token) {
        res.status(401)
        .send()
        // .json({})
    } else {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)
        req.user = await UserModel.findById(decoded.id)
        next()
    }
}



  export default jwtVerify