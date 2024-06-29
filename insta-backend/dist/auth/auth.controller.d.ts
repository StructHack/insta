import { AuthService } from './auth.service';
import CreateUserDto from 'src/users/dto/createuser.dto';
import { UsersService } from 'src/users/users.service';
export declare class AuthController {
    private authService;
    private userService;
    constructor(authService: AuthService, userService: UsersService);
    login(req: any): Promise<{
        access_token: string;
        refresh_token: string;
        id: number;
        fullName: string;
        email: string;
        username: string;
        password: string;
    }>;
    signup(createUserDto: CreateUserDto): Promise<import("../users/entity/user.entity").UserEntity>;
    refresh(req: any): Promise<{
        access_token: string;
    }>;
}
