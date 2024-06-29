import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import * as bcrypt from "bcrypt";

@Entity('users')
export class UserEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    fullName: string;

    @Column()
    email: string;

    @Column()
    username: string;

    @Column()
    password: string;

    @BeforeInsert()
    async hashPassword(){
        if(this.password){
            this.password = await bcrypt.hash(this.password, 10);
        }
    }

}