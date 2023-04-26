import {Router} from 'express'

import { CreateUserController } from './controllers/user/CreateUserController'
import { AuthUserController } from './controllers/user/AuthUserController'

const routers = Router()

routers.post('/users', new CreateUserController().handle)

routers.post('/session', new AuthUserController().handle)

export {routers}