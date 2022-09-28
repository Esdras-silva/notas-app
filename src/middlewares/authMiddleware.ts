import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken';

interface TokenPayLoad{
    id: string;
    iat: number;
    exp: number;
}

export function AuthMiddleware(req: Request, res: Response, next: NextFunction){
   
    try {
        const {authorization} = req.headers;

        if(!authorization) throw new Error("Token inexistente");
    
        const token = authorization.replace('Bearer','').trim();

     const data = jwt.verify(token,`${process.env.SECRET}`) as unknown as TokenPayLoad;
     
     req.userId = data.id;

     return next()
     
    } catch (e:any) {
        res.status(401).json({auth: false, errorMessage: e.message})
    }
}