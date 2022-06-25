import { check, validationResult} from 'express-validator';
import { Request, Response, NextFunction } from 'express';
export const validateUser = [
    check('name').exists().notEmpty().isString().isLength({min:3, max:50}),
    check('password').exists().notEmpty().isLength({max:100}),
    (req:Request, res:Response, next:NextFunction)=>{
        try{ 
            validationResult(req).throw();
            return next();
        }catch(err:any){
            return res.status(422).json({message:err.array()});
        }
    }
]