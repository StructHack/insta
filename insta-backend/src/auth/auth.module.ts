import { Module } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { LocalStrategy } from './strategies/local-strategy';
import { JwtStrategy } from './strategies/jwt-strategy';
import { RefreshJwtStrategy } from './strategies/refreshToken.strategy';

@Module({
    providers:[AuthService,UsersService,JwtStrategy, LocalStrategy,RefreshJwtStrategy],
    controllers:[AuthController],
    imports:[JwtModule.register({
        secret: process.env.jwt_secret,
        signOptions: { expiresIn: '6s' },

    }),
]
})
export class AuthModule {}

