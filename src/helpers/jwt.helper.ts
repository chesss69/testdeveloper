import jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';
dotenv.config();

export const verifyToken= (token:string)=>{
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret');
        return decoded;
    }catch(err){
        return null;
    }
}
export const signToken = (id:number, name:string)=>{
    try{
        const token = jwt.sign(
            {id,name},
            process.env.JWT_SECRET || 'secret',
            {expiresIn:'24h'});
        return token;
    }catch(err){
        return null;
    }
}

//last commit
