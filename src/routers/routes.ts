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

    //Get
    router.get('/users', async (req, res)=>{
        const users = await userService.findUsers();
        res.json(users);
    })

    router.get('/users/:id', async (req, res)=>{
        const id = req.params.id;
        const user = await userService.findUserById(id);
        res.json(user);
    })

    //Create
    router.post('/users', async (req, res)=>{
        const user = req.body;
        const newUser = await userService.createUser(user);
        res.json(newUser);
    })

    router.put('/users/:id', async (req, res)=>{
        const id = req.params.id;
        const data = req.body;
        const user = await userService.updateUser(id, data);
        res.json(user);
    })

    router.delete('/users/:id', async (req, res)=>{
        const id = req.params.id;
        const deleted = await userService.deleteUser(id);
        res.json({ deleted });
    })

    return router;
}