import Express, { application, Request, Response }  from "express";

const App = Express();

App.get('/', (req: Request, res: Response)=>{
    res.send("<h1>Servidor rodando</h1>")
});

App.get('/secret', (req: Request, res: Response)=>{
    res.send("<p>Esdras Silva</p>")
})

App.listen(3030,()=>{
    console.log("Servidor iniciado");
    
})