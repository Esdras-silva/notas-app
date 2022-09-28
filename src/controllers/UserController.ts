import { Request, Response } from "express";
import { User } from "../database/associations";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'
import {userModel} from './authController'




class userController {

    //Cadastro de usuarios
    async index(req: Request, res: Response){
        
        try {
            const {userName, email, password} = req.body;
            
            const userExists = await User.findOne({where:{email}}) as unknown as userModel;

           

           if(userExists)  throw new Error("Email em uso!");
            

            const user = await User.create({userName, email, password: await bcrypt.hash(password,8)}) as unknown as userModel ;

            const token = jwt.sign({id: user.id},`${process.env.SECRET}`)
            req.userId = user.id;
           return res.status(200).json({userData:{name: user.userName, email: user.email}, auth: true, token: token});

        } catch (e: any) {
            res.status(500).json({auth: false, errorMessage: e.message})
        }
    }

}


export const UserController = new userController();