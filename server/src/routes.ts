import { Router } from 'express'

import classController from './controllers/classController'
import connectionsController from './controllers/connectionsController'

const routes = Router()

routes.post('/classes', classController.store)
routes.get('/classes', classController.index)

routes.post('/connections', connectionsController.store)
routes.get('/connections', connectionsController.index)

export default routes
