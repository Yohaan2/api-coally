import mongoose, { connect, disconnect } from 'mongoose'
import { TaskModel } from '../src/data/models/tasks.model'
import { TaskController } from '../src/task/tasks.controllers'
import { TaskService } from '../src/task/tasks.service'
import { MongoMemoryServer } from 'mongodb-memory-server'

jest.mock('../src/data/models/tasks.model', () => {
	return {
		TaskModel: jest.fn().mockImplementation(() => ({
			save: jest.fn().mockResolvedValue({
				title: 'Test Task',
				description: 'This is a test task',
				status: false,
			}),
		})),
	}
})

describe('Task controller', () => {
	let mongoServer: any
	let req: any
	let res: any
	let next: any

	const service = new TaskService()
	const controller = new TaskController(service)

	const dbConnect = async () => {
		mongoServer = new MongoMemoryServer()
		await mongoServer.start()
		const uri = mongoServer.getUri()

		await connect(uri)
	}

	beforeAll(async () => {
		await dbConnect()
	})

	afterEach(async () => {
		jest.clearAllMocks()
	})

	afterAll(async () => {
		await disconnect()
		await mongoose.connection.close()
		await mongoServer.stop()
	})

	describe('GetTasks ', () => {
		beforeEach(() => {
			req = {
				query: {},
				body: {},
				headers: {},
			}
			res = {
				status: jest.fn().mockReturnThis(),
				json: jest.fn(),
			}
			next = jest.fn()
		})

		it('should be 200', async () => {
			const resultMock = [
				{ title: 'new task', description: 'soy una tarea', status: false },
			]
			jest
				.spyOn(TaskModel, 'find')
				//@ts-ignore
				.mockReturnValueOnce(resultMock)

			await controller.getTasks(req, res, next)

			expect(res.json).toHaveBeenCalledWith(resultMock)
			expect(res.status).toHaveBeenCalledWith(200)
		})
	})

	describe('Create Task', () => {
		beforeEach(() => {
			req = {
				query: {},
				body: {},
				headers: {},
			}
			res = {
				status: jest.fn().mockReturnThis(),
				json: jest.fn(),
			}
			next = jest.fn()
		})

		it('create task correctly', async () => {
			req = {
				body: {
					title: 'New task',
					description: 'A new task',
					status: false,
				},
			}

			await controller.createTask(req, res, next)

			expect(res.status).toHaveBeenCalledWith(200)
			expect(res.json).toHaveBeenCalledWith(200)
			// expect(res.json).toHaveBeenCalledWith({
			//   message:  'Task created',
			// })
		})
	})
})
