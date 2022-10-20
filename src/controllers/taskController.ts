import { Request, Response } from "express";
import { Task } from "../database/model/Task";

type TaskLoad ={
    save(): unknown;
    name: string;
    active: boolean;
}

class taskController{

    async create(req: Request, res: Response){
        try {
            const id = req.params.id
            const {name,active} = req.body;
            const task = await Task.create({name,active,listId:id})
            res.status(200).json({message:'Criado com sucesso', task})
        } catch (e:any) {
            res.status(400).json(e.message)
        }
    }

    async dell(req: Request, res: Response){
        try {
            const id = req.params.id;
            const dell = await Task.destroy({where:{id}});
            res.status(200).json({message:'Deletado com sucesso'})
        } catch (e:any) {
            res.status(400).json(e.message)
        }
    }

    async find(req: Request, res: Response){
        try {
            const idTask = req.params.id;
            const tasks = await Task.findAll({where:{listId:idTask}});
            res.status(200).json(tasks)
        } catch (e:any) {
            res.status(400).json(e.message)
        }
    }

    async update(req: Request, res: Response){
        try {
            const {name,active, id} = req.body;
            const task = await Task.findByPk(id) as unknown as TaskLoad;
            if(name) task.name = name;
            if(active) task.active = active;

            task.save()

            res.status(200).json({upadted: true})
        } catch (e:any) {
            res.status(400).json({updated: false})
        }
    }
}

export const TaskController = new taskController();