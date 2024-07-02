import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { PostEntity } from './entity/post.entity';

@Injectable()
export class PostsService {
    private postsRepository;
    constructor(private datasource: DataSource){
        this.postsRepository= this.datasource.getRepository(PostEntity)
    }

    async getAllPosts(id: number): Promise<PostEntity[]>{
        try{
        const data = await this.postsRepository.find({
            relations:{
                user: true
            },
            where:{
                user:{
                    id: id
                }
            }
        })
        return data;
    }catch(e){
        console.log(e)
        return []
    }
        
    }
}
