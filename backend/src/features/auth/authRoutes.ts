import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUser.controller";

const authRoutes = Router();

const authenticateUserController = new AuthenticateUserController();

authRoutes.post('/', authenticateUserController.handle);

export { authRoutes }
