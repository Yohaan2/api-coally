export class CustomError extends Error {
	constructor(public message: string, public statusCode: number) {
		super(message)
	}

	static BadRequest(message: string) {
		return new CustomError(message, 400)
	}

	static Unauthorized(message: string) {
		return new CustomError(message, 401)
	}

	static Forbidden(message: string) {
		return new CustomError(message, 403)
	}

	static NotFound(message: string) {
		return new CustomError(message, 404)
	}

	static InternalServerError(message: string) {
		return new CustomError(message, 500)
	}
}
