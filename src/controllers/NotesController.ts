import { Request, Response } from "express";
import { Notes } from "../database/associations";

class notesController {

    async create(req: Request, res: Response) {
        try {
            const { title, description } = req.body;

            const newNote = await Notes.create({ title, description, userId: 'ff' })

            res.status(200).json(newNote);
        } catch (e: any) {
            res.status(500).json(e.message)
        }
    }
}