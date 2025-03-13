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

    async findUserById(id: string): Promise<User | null> {
        return this.userepository.findById(id);
    }

    async updateUser(id: string, data: Partial<User>): Promise<User | null> {
        return this.userepository.update(id, data);
    }

    async deleteUser(id: string): Promise<boolean> {
        return this.userepository.delete(id);
    }
}   
