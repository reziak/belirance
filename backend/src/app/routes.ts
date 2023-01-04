import { Router } from "express";
import { authRoutes } from "../features/auth/authRoutes";
import { entryRoutes } from "../features/entries/entryRoutes";
import { tagRoutes } from "../features/tags/tagRoutes";
import { userRoutes } from "../features/users/userRoutes";
import { ensureAuthenticateUser } from "./middlewares/ensureAuthenticateUser";

const routes = Router();
routes.use("/auth", authRoutes);
routes.use("/users", userRoutes);
routes.use("/tags", ensureAuthenticateUser, tagRoutes);
routes.use("/entries", ensureAuthenticateUser, entryRoutes);

export { routes };