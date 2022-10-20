import { Request, Response } from "express";
import { Todolist } from "../database/model/ToDoList";

type ListLoad={
    save(): unknown;
    title:string;
}

class listController{

    async create(req: Request,res:Response){
        try {
            const {title} = req.body;
            const List = await Todolist.create({title, userId: req.userId})
            res.status(200).json({message: 'Criado com sucesso'})
        } catch (e: any) {
            res.status(402).json(e.message)
        }
    }

    async dell(req: Request, res: Response){
        try {
            const {id} = req.body;
            const delList = await Todolist.destroy({where:{id}})
            res.status(200).json({message: 'Deletado com sucesso'})
        } catch (e:any) {
            res.status(401).json(e.message)
        }
    }

    async find(req: Request, res: Response){
        try {
            const Lists = await Todolist.findAll({where:{userId:req.userId}})
            res.status(200).json(Lists)
        } catch (e:any) {
            res.status(400).json(e.message)
        }
    }

    async update(req: Request, res: Response){
        try {
            const {title,id} = req.body;
            const list = await Todolist.findByPk(id) as unknown as ListLoad;
            list.title = title
            list.save();
            res.status(200).json({upadted: true})
        } catch (e:any) {
            res.status(400).json({upadted: false})
        }
    }
}

export const ListController = new listController();