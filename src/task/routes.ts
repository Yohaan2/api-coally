import { Router } from 'express'
import { TaskController } from './tasks.controllers'
import {
	validateCreateTask,
	validateFilterBody,
	validateIdParam,
} from '../middleware/validators'
import { TaskService } from './tasks.service'

export class TaskRoutes {
	static get routes(): Router {
		const router = Router()
		const service = new TaskService()
		const controller = new TaskController(service)
		router.post('/tasks', validateCreateTask, controller.createTask)
		router.get('/tasks', controller.getTasks)
		router.get('/tasks/:id', validateIdParam, controller.getTaskById)
		router.put('/tasks/:id', controller.updateTask)
		router.delete('/tasks/:id', controller.deleteTask)
		router.post('/tasks/filter', validateFilterBody, controller.filterTask)
		return router
	}
}
