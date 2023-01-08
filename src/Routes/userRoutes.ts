import { Router } from "express";
import { UserController } from "../Controllers/UserController";
import { authMiddleware } from "../middlewares/authMiddleware";


const router: Router = Router()

router
    .get('/users', UserController.listAllUser)
    .get('/users/:id', UserController.listUserById)
    .get('/users/email/:id', UserController.getEmailById)
    .get('/profile',authMiddleware, UserController.getProfile)
    .post('/users', UserController.createUser)
    .post('/login', UserController.login)
    .put('/users/:id', UserController.updateUser)
    .delete('/users/:id', UserController.deleteUser)
    
export default router