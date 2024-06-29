import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { UserEntity } from './entity/user.entity';
import CreateUserDto from './dto/createuser.dto';

@Injectable()
export class UsersService {
    private userRepository;

    constructor(private datasource: DataSource){
        this.userRepository = this.datasource.getRepository(UserEntity);
    }

    // for login information don't use it to fetch information
    async findOneWithUserName(userName: string):Promise<UserEntity>{
        return await this.userRepository.findOne({
            where:{
                username: userName
            }
        })
    }

    async createUser(createUserDto: CreateUserDto): Promise<UserEntity>{
        try{
            const user = await this.userRepository.create(createUserDto);
            return await this.userRepository.save(user);
        }catch(err){
            console.log(err)
            throw new HttpException("Something went wrong", HttpStatus.BAD_REQUEST);
        }
    }

    async fetchUserDetails(username:string){
        try{
            const user = await this.userRepository.findOne({
                where:{
                    username: username
                }
            })
           const {password,...result} = user;
            return result 

        }catch(e){
            throw new HttpException("Something went wrong", HttpStatus.BAD_REQUEST)
        }
    }

}
