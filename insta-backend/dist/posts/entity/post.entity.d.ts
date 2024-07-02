import { UserEntity } from "src/users/entity/user.entity";
export declare class PostEntity {
    id: number;
    title: string;
    attachment: string;
    likes: number;
    user: UserEntity;
}
