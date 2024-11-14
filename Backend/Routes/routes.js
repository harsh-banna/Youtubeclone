import { login, signup } from "../Controller/user.controller.js";
import { fetchspecificvideo, fetchvideos, addcomment, addLike, adddisLike } from "../Controller/videos.controller.js";
import jwt from "jsonwebtoken";

// function login(req,res) {
//     const user = req.body.username;
//         const accessToken = jwt.sign({user: user},"harsh", {expiresIn:"20m"})
//         res.send({token: accessToken});
// }

function authUser(req,res,next) {
    const authHeader = req.headers['authorization']; // get's the token from the header
    const token = authHeader && authHeader.split(" ")[1]; // extract only the required part

    // jwt.verify is a function that helps us to verify the jwt token 
    jwt.verify(token,"harsh",(err,user) => {
        if (err) {
            return res.status(403).json({message: "invalid jwt token"});
        }
        req.user = user;
        next();
} )
}


export function routes(app) {
    app.get("/api/videos",authUser,fetchvideos);
    app.get("/api/video/:id",fetchspecificvideo);
    app.put("/api/video/comment",addcomment);
    app.post('/api/signup',signup);
    app.post('/api/login',login);
    app.post('/api/video/like/:id',addLike);
    app.post('/api/video/dislike/:id',adddisLike);
}