import { Router } from "express";
import UsersController from "../controllers/usersController.js";

const usersRouter = Router();
const usersController = new UsersController();

usersRouter.post("/create", usersController.create);

export default usersRouter;