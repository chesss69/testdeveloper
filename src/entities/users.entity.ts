import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, UpdateDateColumn, CreateDateColumn } from "typeorm";
import bcrypt from 'bcryptjs';

@Entity()
export class Users extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!:number

    @Column({length:50,nullable:false, unique:true})
    name!:string

    @Column({length:200,nullable:false})
    password!:string

    @CreateDateColumn()
    created_at!:Date

    @UpdateDateColumn()
    updated_at!:Date
    
    async hashPassword(password:string):Promise<string>{
        return bcrypt.hash(password,12);
    }
    async comparePassword(password:string):Promise<boolean>{
        return bcrypt.compare(password,this.password);
    }
}