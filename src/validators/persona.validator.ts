import { check, validationResult} from 'express-validator';
import { Request, Response, NextFunction } from 'express';
export const validatePersona = [
    check('nombrecompleto').exists().notEmpty().isString().isLength({min:3, max:50}),
    check('email').exists().notEmpty().isEmail().isLength({max:100}),
    check('fechanacimiento').exists().notEmpty().isDate(),
    check('direccion').exists().notEmpty().isString().isLength({min:3, max:200}),
    check('ci').exists().notEmpty().isInt({min:0}),
    (req:Request, res:Response, next:NextFunction)=>{
        try{ 
            validationResult(req).throw();
            return next();
        }catch(err:any){
            return res.status(422).json({message:err.array()});
        }
        
    }
]