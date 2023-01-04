import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUser.controller";

const userRoutes = Router();

const createUserController = new CreateUserController();

userRoutes.post('/', createUserController.handle);

export { userRoutes }
