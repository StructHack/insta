import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import { JwtGuard } from 'src/auth/guards/jwt-auth.guard';
import { PostsService } from './posts.service';


@UseGuards(JwtGuard)
@Controller('posts')
export class PostsController {

    constructor(private postService: PostsService){}

    @Get()
    async getAllPosts(@Request() req){
        
        const id = req.user.user.id;
        if(id){
            return this.postService.getAllPosts(id)
        }else{
            return []
        }

    }

}
