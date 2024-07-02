import { UserEntity } from "src/users/entity/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('posts')
export class PostEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    attachment: string;

    @Column({default: 0})
    likes: number;

    @ManyToOne(()=>UserEntity, (user)=>user.post)
    user: UserEntity

}