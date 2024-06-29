import express, {Router} from "express";
import "reflect-metadata";
import {AppDataSource} from "./database/data-source";
import {UserRouter} from "./users/routers/user-router";
const app = express();
const appRouter = express.Router();
const port = 3000;

app.use("/user", UserRouter(appRouter))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, async () => {
    try {
        await AppDataSource.initialize();
        console.log(`Example app listening on port ${port}`)
    } catch (e) {
        console.log("Failed to connect to database");
        console.error(e);
        process.exit(1);
    }
})