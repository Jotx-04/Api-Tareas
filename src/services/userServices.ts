//Lógica del negocio

import { IUserRepository, IUserService, User } from "../types/UserTypes";


export class UserServices implements IUserService {
    private userepository: IUserRepository;

    constructor(userRepository: IUserRepository) {
        this.userepository = userRepository;
    }

    async createUser(user: User): Promise<User> {
        return this.userepository.create(user);
    }

    async findUsers(): Promise<User[]> {
        return this.userepository.read();
    }
}   