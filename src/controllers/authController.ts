import { Request, Response } from "express";
import { User } from "../database/associations";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';


export interface userModel {
    userName: string;
    email: string;
    password: string;
    id: string;
    createdAt: Date;
    updatedAt: Date;
}

class authController{

    async authenticate(req: Request, res: Response){
        try {
            const {email, password} = req.body;

            const user = await User.findOne({where:{email}}) as unknown as userModel;
            if(!user) throw new Error("Usuario não existe!");

            const passwordIsValid = await bcrypt.compare(password,user.password)
            if(!passwordIsValid) throw new Error("Senha invalida");

            const token = jwt.sign({id: user.id},`${process.env.SECRET}`,{
                expiresIn: 86000
            });
            
            res.status(200).json({
                user:{
                    id: user.id,
                    email: user.email,
                    userName: user.userName,
                    createdAt: user.createdAt,
                    updatedAt: user.updatedAt
                },
                auth: true,
                token: token
            })
        } catch (e: any) {
            res.status(500).json({auth: false, errorMessage: e.message})
        }
    }
}

export const AuthController = new authController()