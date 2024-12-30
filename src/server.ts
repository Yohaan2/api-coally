import express, {
	ErrorRequestHandler,
	NextFunction,
	Request,
	Response,
	Router,
} from 'express'
import swaggerUi from 'swagger-ui-express'
import swaggerJsDoc from 'swagger-jsdoc'
import cors from 'cors'

export class Server {
	public app = express()
	private port: number
	private routes: Router

	constructor(port: number = 3000, router: Router) {
		this.port = port
		this.routes = router
	}

	async start() {
		this.app.use(
			cors({
				origin: ['http://localhost:5173'],
				allowedHeaders: [
					'Content-Type',
					'Authorization',
					'Content-Length',
					'X-Requested-With',
				],
				methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
			})
		)
		this.app.use(express.json())
		this.app.use(express.urlencoded({ extended: true }))

		this.app.use(this.routes)

		this.app.use((err: any, req: Request, res: Response, next: NextFunction) => {
			const status = err.statusCode || 500
			const message = err.message || 'Error interno del servidor'
			res.status(status).json({ message })
		})

		const swaggerOptions = {
			swaggerDefinition: {
				info: {
					version: '1.0.0',
					title: 'Task API',
					description: 'Task API Information',
					contact: {
						name: 'Yohan Garcia',
						url: 'https://www.linkedin.com/in/yohan-garcia/',
					},
					servers: ['http://localhost:3001'],
				},
			},
			basePath: '/docs',
			apis: ['./src/swagger/*.yml'],
		}
		const swaggerDocs = swaggerJsDoc(swaggerOptions)
		this.app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

		this.app.listen(this.port, () => {
			console.log(`Server is running on http://localhost:${this.port}`)
		})
	}
}
