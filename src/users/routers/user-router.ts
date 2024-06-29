import {Router} from "express";
import {UserEntity, UserRepository} from "../entity/user-entity";

export const UserRouter = (router: Router) => {
    router.get("/", async (req, res) => {
        const users: UserEntity[] = await UserRepository.find();

        res.send(users)
    })

    router.post("/", async (req, res) => {
        const {name, email, role, password} = req.body;
        const newUser: UserEntity = new UserEntity()
        newUser.name = name;
        newUser.email = email;
        newUser.role = role;
        newUser.password = password;
        await UserRepository.save(newUser);

        res.send(newUser);
    })

    router.delete('/:id', async (req, res) => {
        const {id} = req.params;
        const target: UserEntity = new UserEntity()
        target.id = id;

        await UserRepository.remove(target);
        res.send("Deleted")
    })

    return router
}