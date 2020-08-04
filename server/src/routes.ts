import { Router } from 'express'

import classController from './controllers/classController'

const routes = Router()

routes.post('/classes', classController.store)
routes.get('/classes', classController.index)

export default routes
