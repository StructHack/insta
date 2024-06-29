import { DataSource } from 'typeorm';
import { UserEntity } from './entity/user.entity';
import CreateUserDto from './dto/createuser.dto';
export declare class UsersService {
    private datasource;
    private userRepository;
    constructor(datasource: DataSource);
    findOneWithUserName(userName: string): Promise<UserEntity>;
    createUser(createUserDto: CreateUserDto): Promise<UserEntity>;
    fetchUserDetails(username: string): Promise<any>;
}
