import { UserModel } from "../models/UserModel.js"
import jwt from "jsonwebtoken"

const jwtVerify = async( req, res, next ) => {
    const token = req.headers.authorization.split(" ")[1]
    if (!token) {
        res.status(401)
        .send()
    } else {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)
        req.user = await UserModel
            .findById(decoded.id)
            .populate("currentGames")
            .populate("completedGames")
            .select("-password")
        next()
    }
}



  export default jwtVerify