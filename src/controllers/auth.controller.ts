import { Request, Response } from 'express';
import {Users} from '../entities/users.entity';
import { signToken } from '../helpers/jwt.helper';

export const login = async (req: Request, res: Response)=>{
    try{
        const credentials = req.body;
        const user = await Users.findOneBy({name:credentials.name});
        if(user){
            const isValid = await user.comparePassword(credentials.password);
            if(isValid){
                const token = signToken(user.id, user.name);
                return res.json({token});
            }
        } 
        return res.status(401).json({message:"Unhauthorized"});
    }catch(error){
        if(error instanceof Error){
            return res.status(500).json({message:error.message});
        }
    }
}
export const register = async (req: Request, res: Response)=>{
    try{
        const user = new Users();
        user.name = req.body.name;
        user.password = await user.hashPassword(req.body.password);
        await user.save();
        return res.sendStatus(201);
    }catch(error){
        if(error instanceof Error){
            return res.status(500).json({message:error.message});
        }
    }
}
