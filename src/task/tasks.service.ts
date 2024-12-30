import { TaskModel } from '../data/models/tasks.model'
import { CustomError } from '../errors/customError'
import { TaskEntity } from './entity/task.entity'

export class TaskService {
	async createTask(payload: TaskEntity) {
		const task = new TaskModel(payload)
		await task.save()
		return task
	}

	async getTasks() {
		const tasks = await TaskModel.find()
		if (tasks.length < 1) {
			throw new CustomError('Tasks not found', 404)
		}
		return await TaskModel.find()
	}

	async getTaskById(id: string) {
		const task = await TaskModel.findById(id)
		if (!task) {
			throw new CustomError('Task not found', 404)
		}

		return task
	}

	async updateTask(id: string, taskEntity: TaskEntity) {
		const task = await TaskModel.findById(id)

		if (!task) {
			throw new CustomError('Task not found', 404)
		}

		task.title = taskEntity.title
		task.description = taskEntity.description || task.description
		task.status = taskEntity.status

		await task.save()
		return task
	}

	async deleteTask(id: string) {
		const task = await TaskModel.findById(id)
		if (!task) {
			throw new CustomError('Task not found', 404)
		}
		return await TaskModel.findByIdAndDelete(id)
	}
}
