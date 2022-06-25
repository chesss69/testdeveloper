import {Request} from "express";
import {Response} from "express";
import { Persona } from "../entities/persona.entity";

export const store = async (req:Request, res:Response)=>{
    try{
        const {ci, nombrecompleto, email, fechanacimiento, direccion} = req.body;
        const persona = new Persona();
        persona.ci = ci;
        persona.nombrecompleto = nombrecompleto;
        persona.email = email;
        persona.fechanacimiento = fechanacimiento;
        persona.direccion = direccion;
        await persona.save();
        return res.sendStatus(201);
    }catch(error){
        if(error instanceof Error){
            return res.status(500).json({message:error.message});
        }
    }
}
export const index = async (_req:Request, res:Response)=>{
    try{
        const personas = await Persona.find();
        return res.json(personas);
    }catch(error){
        if(error instanceof Error){
            return res.status(500).json({message:error.message});
        }
    }
}
export const update = async (req:Request, res:Response)=>{
    try{
        const {id} = req.params;
        const persona = await Persona.findOneBy({id:parseInt(id)});
        if(!persona) return res.status(404).json({message:"Persona no encontrada"});
        await Persona.update({id:parseInt(id)}, req.body);
        return res.sendStatus(204);
    }catch(error){
        if(error instanceof Error){
            return res.status(500).json({message:error.message});
        }
    }
}
export const destroy = async (req:Request, res:Response) =>{
    try{
        const {id} = req.params;
        const persona = await Persona.findOneBy({id:parseInt(id)});
        if(!persona) return res.status(404).json({message:"Persona no encontrada"});
        await Persona.delete({id:parseInt(id)});
        return res.sendStatus(204);
    }catch(error){
        if(error instanceof Error){
            return res.status(500).json({message:error.message});
        }
    }
}
export const show = async (req:Request, res:Response)=>{
    try{
        const {id} = req.params;
        const persona = await Persona.findOneBy({id:parseInt(id)});
        if(!persona) return res.status(404).json({message:"Persona no encontrada"});
        res.json(persona);
    }catch(error){
        if(error instanceof Error){
            return res.status(500).json({message:error.message});
        }
    }
}