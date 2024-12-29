import { AppRoutes } from './routes'
import { Server } from './server'
import { ENVS } from './config/envs'
import { DatabaseMongoDB } from './data/database-mongodb'
;(() => main())()

export default async function main() {
	await DatabaseMongoDB.connect({
		url: ENVS.MONGO_URL,
		dbName: ENVS.MONGO_DB_NAME,
	})

	const server = new Server(ENVS.PORT, AppRoutes.routes)
	await server.start()
}
