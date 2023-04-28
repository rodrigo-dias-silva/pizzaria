import {Router} from 'express'

import { CreateUserController } from './controllers/user/CreateUserController'
import { AuthUserController } from './controllers/user/AuthUserController'
import { DetailUserController } from './controllers/user/DetailUserController'
import { isAuthenticated } from './middlewares/isAuthenticated'
import { CreateCategoryController } from './controllers/category/CreateCategoryController'

const routers = Router()

// Rotas user
routers.post('/users', new CreateUserController().handle)

routers.post('/session', new AuthUserController().handle)

routers.get('/user-info', isAuthenticated, new DetailUserController().handle)

// Rotas category
routers.post('/category', isAuthenticated, new CreateCategoryController().handle)

export {routers}