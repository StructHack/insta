import { PostsService } from './posts.service';
export declare class PostsController {
    private postService;
    constructor(postService: PostsService);
    getAllPosts(req: any): Promise<import("./entity/post.entity").PostEntity[]>;
}
