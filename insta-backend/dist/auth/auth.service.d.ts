import { UsersService } from 'src/users/users.service';
import { UserEntity } from 'src/users/entity/user.entity';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly userService;
    private jwtService;
    constructor(userService: UsersService, jwtService: JwtService);
    validateUser(username: string, password: string): Promise<{
        id: number;
        fullName: string;
        email: string;
        username: string;
    }>;
    login(user: UserEntity): Promise<{
        access_token: string;
        refresh_token: string;
        id: number;
        fullName: string;
        email: string;
        username: string;
        password: string;
    }>;
    refreshToken({ user }: {
        user: UserEntity;
    }): Promise<{
        access_token: string;
    }>;
}
