import { Request, Response } from "express";
import { User } from "../database/associations";
import bcrypt from 'bcryptjs';

interface userModel {
    username: string;
    email: string;
    password: string;
    id: string;
    createdAt: Date;
    updatedAt: Date;
}

class userController {

    //Cadastro de usuarios
    async index(req: Request, res: Response){
        
        try {
            const {userName, email, password} = req.body;

            const user = await User.create({userName, email, password: await bcrypt.hash(password,8)}) as unknown as userModel;
           return res.status(200).json(user);
        } catch (e: any) {
            res.status(500).json(e.message)
        }
    }

}


export const UserController = new userController();