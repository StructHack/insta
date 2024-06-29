export declare class UserEntity {
    id: number;
    fullName: string;
    email: string;
    username: string;
    password: string;
    hashPassword(): Promise<void>;
}
