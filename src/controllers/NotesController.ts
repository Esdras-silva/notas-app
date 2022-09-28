import { Request, Response } from "express";
import { Notes } from "../database/associations";

interface NotesLoad{
    save(): unknown;
    id: string;
    title: string;
    description: string;
    createdAt: string;
    updatedAt: string;
}

class notesController {

    async create(req: Request, res: Response) {
        try {
            const { title, description } = req.body;

            const newNote = await Notes.create({ title, description, userId: req.userId })

            res.status(200).json(newNote);
        } catch (e: any) {
            res.status(500).json(e.message)
        }
    }

    async find(req: Request, res: Response){
        try {
            const notes = await Notes.findAll({where:{userId: req.userId}})

            res.status(200).json(notes)
        } catch (e:any) {
            res.status(400).json(e.message)
        }
    }

    async update(req: Request, res: Response){
        try {
            const {title, description} = req.body;

            if(!title && !description) throw new Error("Insira os valores");
            
            
            const {id} = req.params;

            const note= await Notes.findByPk(id) as unknown as NotesLoad;
            
            if(title) note.title= title;

            if(description) note.description= description;

            await note.save();

            res.status(200).json(note)
        } catch (e:any) {
            res.status(402).json(e.message)
        }
    }

    async destroy(req: Request, res: Response){
        try {
            const {id} = req.params;

            const noteDeleted= await Notes.destroy({where:{id}});

            res.status(200).json(noteDeleted)
        } catch (e: any) {
            res.status(500).json(e.message)
        }
    }
}

export const NotesController= new notesController();