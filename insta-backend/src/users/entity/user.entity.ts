import { BeforeInsert, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import * as bcrypt from "bcrypt";
import { PostEntity } from "src/posts/entity/post.entity";

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

    @OneToMany(()=>PostEntity, (post)=>post.user)
    post: PostEntity[]

    @BeforeInsert()
    async hashPassword(){
        if(this.password){
            this.password = await bcrypt.hash(this.password, 10);
        }
    }

}