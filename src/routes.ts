import { Router } from "express";
import { AuthController } from "./controllers/authController";
import { ListController } from "./controllers/listController";
import { NotesController } from "./controllers/NotesController";
import { TaskController } from "./controllers/taskController";
import { UserController } from "./controllers/UserController";
import { AuthMiddleware } from "./middlewares/authMiddleware";

const routes = Router();

//Rotas Get
routes.get('/notes', AuthMiddleware, NotesController.find)
routes.get('/lists', AuthMiddleware,ListController.find)
routes.get('/lists/:id', AuthMiddleware, TaskController.find)

//Rotas Post
routes.post('/signUp', UserController.index);
routes.post('/signIn', AuthController.authenticate);
routes.post('/newNote', AuthMiddleware, NotesController.create)
routes.post('/newList', AuthMiddleware, ListController.create)
routes.post('/lists/:id', AuthMiddleware, TaskController.create)

// Rotas Put
routes.put('/notes/:id', AuthMiddleware, NotesController.update)
routes.put('/lists', AuthMiddleware, ListController.update)
routes.put('/lists/:id', AuthMiddleware,TaskController.update)

//Rotas Delete
routes.delete('/notes/:id', AuthMiddleware, NotesController.destroy)
routes.delete('/lists', AuthMiddleware, ListController.dell)
routes.delete('/lists/:id', AuthMiddleware, TaskController.dell)


export {routes}