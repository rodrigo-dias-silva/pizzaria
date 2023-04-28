import {Router} from 'express'

import { CreateUserController } from './controllers/user/CreateUserController'
import { AuthUserController } from './controllers/user/AuthUserController'
import { DetailUserController } from './controllers/user/DetailUserController'
import { isAuthenticated } from './middlewares/isAuthenticated'

const routers = Router()

routers.post('/users', new CreateUserController().handle)

routers.post('/session', new AuthUserController().handle)

routers.get('/user-info', isAuthenticated, new DetailUserController().handle)

export {routers}