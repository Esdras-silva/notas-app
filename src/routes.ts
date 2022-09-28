import { Router } from "express";
import { AuthController } from "./controllers/authController";
import { NotesController } from "./controllers/NotesController";
import { UserController } from "./controllers/UserController";
import { AuthMiddleware } from "./middlewares/authMiddleware";

const routes = Router();

//Rotas Get
routes.get('/notes', AuthMiddleware, NotesController.find)

//Rotas Post
routes.post('/signUp', UserController.index);
routes.post('/signIn', AuthController.authenticate);
routes.post('/newNote', AuthMiddleware, NotesController.create)

// Rotas Put
routes.put('/notes/:id', AuthMiddleware, NotesController.update)

//Rotas Delete
routes.delete('/notes/:id', AuthMiddleware, NotesController.destroy)


export {routes}