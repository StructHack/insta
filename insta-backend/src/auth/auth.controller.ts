import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import CreateUserDto from 'src/users/dto/createuser.dto';
import { UsersService } from 'src/users/users.service';
import { RefreshJwtGuard } from './guards/refresh-jwt-auth.guard';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService,
                private userService: UsersService
    ){}

    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Request() req){
        return await this.authService.login(req.user)
    }

    @Post('/signup')
    async signup(@Body() createUserDto: CreateUserDto){
        return await this.userService.createUser(createUserDto)
    }

    @UseGuards(RefreshJwtGuard)
    @Post('/refresh')
    async refresh(@Request() req){
        console.log('getting refreshed')
        console.log(req.user)
        return await this.authService.refreshToken(req.user)
    }

}
