import { UserRepository } from "@respositories/userRepository";
import { IUserRepository, IUserService } from "../types/UserTypes";
import { Router } from "express";
import { UserServices } from "@services/userServices";

const router = Router();

const userRepository: IUserRepository = new UserRepository()
const userService: IUserService = new UserServices(userRepository)

export default ()=>{
    router.get('/home', (req, res)=>{
        res.send('Home page');
    })

    router.get('/users', async (req, res)=>{
        const users = await userService.findUsers();
        res.json(users);
    })

    router.post('/users', async (req, res)=>{
        const user = req.body;
        const newUser = await userService.createUser(user);
        res.json(newUser);
    })

    return router;
}