import {Column, PrimaryGeneratedColumn, Entity, CreateDateColumn, BaseEntity, UpdateDateColumn} from "typeorm";

@Entity()
export class Persona extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!:number;

    @Column("int", {nullable:false,unsigned:true, unique:true})
    ci!:number;

    @Column({length:50,nullable:false})
    nombrecompleto!:string;

    @Column()
    fechanacimiento!:Date;

    @Column({length:200,nullable:false})
    direccion!:string;

    @Column({length:100,nullable:false, unique:true})
    email!:string;

    @CreateDateColumn()
    created_at!:Date;

    @UpdateDateColumn()
    updated_at!:Date;
}