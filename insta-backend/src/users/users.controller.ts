import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtGuard } from 'src/auth/guards/jwt-auth.guard';

@UseGuards(JwtGuard)
@Controller('users')
export class UsersController {
    constructor(private userService: UsersService){}

    @Get()
    async getUserDetails(@Request() req){
        console.log('username')
        return this.userService.fetchUserDetails(req.user.userName);
    }

}
