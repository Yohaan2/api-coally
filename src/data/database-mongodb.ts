import mongoose from 'mongoose'

interface Options {
	url: string
	dbName: string
}

export class DatabaseMongoDB {
	static async connect(options: Options) {
		try {
			const { url, dbName } = options
			const db = await mongoose.connect(url, {
				dbName,
			})

			console.log(`MongoDB connected to ${db.connection.name}`)
		} catch (error) {
			console.log(error)
			throw error
		}
	}
}
