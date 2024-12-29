import { Request, Response } from 'express'
import { TaskService } from './tasks.service'
import { NextFunction } from 'connect'

export class TaskController {
	constructor(private readonly taskService: TaskService) {}

	createTask = async (req: Request, res: Response, next: NextFunction) => {
		try {
			const { title, description, status } = req.body
			const task = await this.taskService.createTask({ title, description, status })
			res.status(200).json({ message: 'Task created', task })
		} catch (error) {
			next(error)
		}
	}

	getTasks = async (req: Request, res: Response, next: NextFunction) => {
		try {
			const tasks = await this.taskService.getTasks()
			res.status(200).json(tasks)
		} catch (error) {
			next(error)
		}
	}

	getTaskById = async (req: Request, res: Response, next: NextFunction) => {
		try {
			const task = await this.taskService.getTaskById(req.params.id)
			res.status(200).json(task)
		} catch (error) {
			next(error)
		}
	}

	updateTask = async (req: Request, res: Response, next: NextFunction) => {
		try {
			const { title, description, status } = req.body
			const task = await this.taskService.updateTask(req.params.id, {
				title,
				description,
				status,
			})
			res.status(200).json({ message: 'Task updated', task })
		} catch (error) {
			next(error)
		}
	}

	deleteTask = async (req: Request, res: Response, next: NextFunction) => {
		try {
			await this.taskService.deleteTask(req.params.id)
			res.status(200).json({ message: 'Task deleted' })
		} catch (error) {
			next(error)
		}
	}
}
