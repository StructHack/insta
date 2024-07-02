import { PostEntity } from "src/posts/entity/post.entity";
export declare class UserEntity {
    id: number;
    fullName: string;
    email: string;
    username: string;
    password: string;
    post: PostEntity[];
    hashPassword(): Promise<void>;
}
