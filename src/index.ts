import Express,{json, NextFunction, Request, Response}  from "express";
import { routes } from "./routes";
import './database/associations'
import {db} from './database/db'
import cors from 'cors'
const App = Express();


App.use(json());


App.use((req: Request, res: Response, next: NextFunction) => {
	//Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    res.header("Access-Control-Allow-Origin", "*");
	//Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Headers","Content-Type, Authorization")
    App.use(cors());
    next();
});
App.use(routes);


App.listen(3030,()=>{
    db.sync()
    console.log("Servidor iniciado em http://localhost:3030");
    
})