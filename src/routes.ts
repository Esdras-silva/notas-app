import { Router } from "express";
import { UserController } from "./controllers/UserController";

const routes = Router();

routes.post('/signUp', UserController.index)



export {routes}