import { DataSource } from 'typeorm';
import { PostEntity } from './entity/post.entity';
export declare class PostsService {
    private datasource;
    private postsRepository;
    constructor(datasource: DataSource);
    getAllPosts(id: number): Promise<PostEntity[]>;
}
