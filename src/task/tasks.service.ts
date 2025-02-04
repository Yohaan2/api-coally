import { TaskModel } from '../data/models/tasks.model'
import { CustomError } from '../errors/customError'
import { TaskEntity } from './entity/task.entity'

export class TaskService {
	async createTask(payload: TaskEntity) {
		const optionsList = { completed: true, pending: false }

		const data = {
			...payload,
			status: optionsList[payload.status],
		}
		const task = new TaskModel(data)
		await task.save()
		return task
	}

	async getTasks() {
		const tasks = await TaskModel.find()
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
		const optionsList = { completed: true, pending: false }
		const task = await TaskModel.findById(id)

		if (!task) {
			throw new CustomError('Task not found', 404)
		}

		task.title = taskEntity.title
		task.description = taskEntity.description || task.description
		task.status = optionsList[taskEntity.status]

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

	async filterTasks(status: 'completed' | 'pending' | 'all') {
		const optionsList = { completed: true, pending: false }
		if (status === 'all') return await TaskModel.find()
		const tasks = await TaskModel.find({ status: optionsList[status] })
		return tasks
	}
}
