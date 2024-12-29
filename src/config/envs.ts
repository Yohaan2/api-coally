import dotenv from 'dotenv'
import env from 'env-var'
const { get } = env
dotenv.config()

export const ENVS = {
	PORT: get('PORT').default(3000).asPortNumber(),
	MONGO_URL: get('MONGO_URL').required().asString(),
	MONGO_DB_NAME: get('MONGO_DB_NAME').required().asString(),
	JWT_SECRET: get('JWT_SECRET').required().asString(),
}
