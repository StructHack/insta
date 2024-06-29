import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";

@Injectable()
export class RefreshJwtStrategy extends PassportStrategy(Strategy, 'jwt-refresh'){
    constructor(){
        super({
            jwtFromRequest: ExtractJwt.fromBodyField("refresh"),
            ignoreExpiration: false,
            secretOrKey: process.env.jwt_secret
        })
    }

    async validate(payload:any){
        console.log(payload)
        return {
            user:{
                id: payload.id,
                username: payload.sub.username,
                email: payload.email
            }
        }
    }
}