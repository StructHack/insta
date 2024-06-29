import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { UserEntity } from 'src/users/entity/user.entity';
import {JwtService} from '@nestjs/jwt'

@Injectable()
export class AuthService {

    constructor(private readonly userService: UsersService,
                private jwtService: JwtService
    ){}

    async validateUser(username:string, password:string){
        const user = await this.userService.findOneWithUserName(username);
        if(user && (await bcrypt.compare(password, user.password))){
            const {password,...result} = user;
            return result;
        }
        return null;
    }

    async login(user: UserEntity){
        const payload = {
            id: user.id,
            email: user.email,
            sub:{
                username: user.username
            }
        }

        return{
            ...user,
            access_token: this.jwtService.sign(payload,{secret:process.env.jwt_secret, expiresIn: '20s'}),
            refresh_token: this.jwtService.sign(payload, {secret:process.env.jwt_secret, expiresIn: '30d'})
        }
    }

async refreshToken({user}:{user: UserEntity}){
        const payload = {
            id: user.id,
            email: user.email,
            sub:{
                username: user.username
            }
        }

        return{
            access_token: this.jwtService.sign(payload,{secret:process.env.jwt_secret, expiresIn: '60s'})
        }
    }

}
