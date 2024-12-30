import { body, param } from 'express-validator'
import { validateResult } from '../helpers/validateHelper'
import { NextFunction, Request, Response } from 'express'

export const validateCreateTask = [
	body('title', 'Parametro requerido').exists().not().isEmpty().isString(),
	body('description').optional().isString(),
	body('status').exists().isString(),
	(req: Request, res: Response, next: NextFunction) => {
		validateResult(req, res, next)
	},
]

export const validateIdParam = [
	param('id').exists().not().isEmpty().isString(),
	(req: Request, res: Response, next: NextFunction) => {
		validateResult(req, res, next)
	},
]
