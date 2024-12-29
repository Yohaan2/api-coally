import { Router } from 'express'
import { TaskRoutes } from './task/routes'

export class AppRoutes {
	static get routes(): Router {
		const router = Router()

		router.use('/api', TaskRoutes.routes)
		return router
	}
}
