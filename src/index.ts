import Express,{json}  from "express";
import { routes } from "./routes";
import './database/associations'
import {db} from './database/db'

const App = Express();


App.use(json());
App.use(routes);




App.listen(3030,()=>{
    db.sync()
    console.log("Servidor iniciado em http://localhost:3030");
    
})