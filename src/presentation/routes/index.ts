import { Router } from 'express'
import { userRoutes } from './UserRoutes'

const routes = Router()

routes.use(userRoutes)

export default routes
