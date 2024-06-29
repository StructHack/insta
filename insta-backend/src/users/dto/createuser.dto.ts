import { ApiProperty } from "@nestjs/swagger";

export default class CreateUserDto{
    @ApiProperty()
    fullName: string;

    @ApiProperty()
    email: string;

    @ApiProperty()
    username: string;

    @ApiProperty()
    password:string
}