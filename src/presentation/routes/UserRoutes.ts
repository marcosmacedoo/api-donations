import { Router } from "express"
import { CreateUser } from "../../domain/useCases/users/commands/CreateUser"
import { UserRepository } from "../../infra/repositories/UserRepository"

const userRoutes = Router()
const userRepository = new UserRepository()

const createUser = new CreateUser(userRepository)

userRoutes.post('/user', createUser.execute)

export { userRoutes }
