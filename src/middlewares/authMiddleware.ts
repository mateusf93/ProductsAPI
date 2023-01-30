import { NextFunction, Request, Response } from 'express'
import { UnauthorizedError } from '../helpers/api-error'
import { UserServices } from '../services/UserServices'
import jwt from 'jsonwebtoken'

const userServices = new UserServices()
type JwtPayload = {
    id:number
}
export const authMiddleware = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const { authorization } = req.headers

	if (!authorization) {
		throw new UnauthorizedError('Não autorizado')
	}

	const token : string = authorization.split(' ')[1]

	const { id } = jwt.verify(token, process.env.JWT_PASS ?? '') as JwtPayload

	const user = await userServices.listById({id})

	if (!user) {
		throw new UnauthorizedError('Não autorizado')
	}

	const { password: _, ...loggedUser } = user

	req.user = loggedUser

	next()
}