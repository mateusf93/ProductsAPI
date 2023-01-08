import { User } from "../entity/entityUser"

declare global {
	namespace Express {
		export interface Request {
			user: Partial<User>
		}
	}
}