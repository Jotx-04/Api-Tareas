import { UserModel } from "@models/Users";
import { IUserRepository, User } from "../types/UserTypes";

export class UserRepository implements IUserRepository {
    

    async create(data: User): Promise<User> {
        const newUser = new UserModel(data);
        return await newUser.save()
    }

    async read(): Promise<User[]> {
        return await UserModel.find()
    }

    async findById(id: string): Promise<User | null> {
        return await UserModel.findById(id).exec()
    }

    async update(id: string, data: Partial<User>): Promise<User | null> {
        return await UserModel.findByIdAndUpdate(id, data, {new: true}).exec()
    }

    async delete(id: string): Promise<boolean> {
        const deleted = await UserModel.findByIdAndDelete(id).exec()
        return deleted ? true : false
    }
}