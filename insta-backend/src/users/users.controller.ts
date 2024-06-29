import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService){}

    @UseGuards(JwtGuard)
    @Get()
    async getUserDetails(@Request() req){
        console.log(req.user)
        return 'ok';
    }
}
