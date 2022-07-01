import { Router, Request, Response } from "express"
import { UserController } from "../controllers/UserController"

const userRoutes = Router()
const userController = new UserController()

userRoutes.post('/user', userController.save)
userRoutes.get('/user/:cpf', userController.get)

export { userRoutes }
