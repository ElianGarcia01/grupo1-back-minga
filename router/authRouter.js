import { Router } from "express";
import signIn from "../controllers/auth/signIn.js";
import logOut from "../controllers/auth/logOut.js";
import validator from "../middlewares/validator.js";
import SchemaSignIn from "../schemas/auth/signIn.js";
import accountNotExists from "../middlewares/accountNotExists.js";
import validatePassword from "../middlewares/validatePassword.js"
import validateRole from "../middlewares/validateRole.js";
import generateToken from "../middlewares/generateToken.js"
import passport from "../middlewares/passport.js"


const authRouter = Router()

authRouter.post('/signIn', validator(SchemaSignIn), accountNotExists, validatePassword, validateRole, geneimporrateToken, signIn)
authRouter.get('/logOut', passport.authenticate('jwt', {session: false}), logOut)

export default authRouter