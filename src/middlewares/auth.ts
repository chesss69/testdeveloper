import { verifyToken } from '../helpers/jwt.helper';
import {Request, Response, NextFunction} from 'express';

export const checkAuth = (req:Request, res:Response, next:NextFunction)=>{
    const token = req.headers['authorization']?.split(' ')[1];
    if(token){
        const user = verifyToken(token);
        if(user){
            return next();
        }
    }
    return res.status(401).json({message:'Unauthorized'});
}