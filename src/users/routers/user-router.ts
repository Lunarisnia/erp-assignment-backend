import {Router} from "express";
import {UserEntity} from "../entity/user-entity";
import {AppDataSource} from "../../database/data-source";

export const UserRouter = (router: Router) => {
    router.get("/", async (req, res) => {
        const users: UserEntity[] = await AppDataSource.getRepository(UserEntity).find();

        res.send(users)
    })

    router.post("/", async (req, res) => {
        const {name, email, role, password} = req.body;
        const newUser: UserEntity = new UserEntity()
        newUser.name = name;
        newUser.email = email;
        newUser.role = role;
        newUser.password = password;
        await AppDataSource.getRepository(UserEntity).save(newUser);

        res.send(newUser);
    })

    router.delete('/:id', async (req, res) => {
        const {id} = req.params;
        const target: UserEntity = new UserEntity()
        target.id = parseInt(id);

        await AppDataSource.getRepository(UserEntity).remove(target);
        res.send("Deleted")
    })

    return router
}