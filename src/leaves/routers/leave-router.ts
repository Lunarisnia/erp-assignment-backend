import {Router} from "express";
import {AppDataSource} from "../../database/data-source";
import dayjs, {Dayjs} from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from 'dayjs/plugin/timezone';
import {LeaveEntity} from "../entity/leave-entity";

dayjs.extend(utc)
dayjs.extend(timezone)

export const LeaveRouter = (router: Router) => {
    router.get("/", async (req, res) => {
        const l = await AppDataSource.getRepository(LeaveEntity)

        const leaves = await l.find()

        res.send(leaves);
    });

    router.post("/", async (req, res) => {
        const {name, reason, start_date, end_date} = req.body;
        const a = await AppDataSource.getRepository(LeaveEntity)
        const newLeave = new LeaveEntity();
        newLeave.name = name;
        newLeave.reason = reason;
        newLeave.start_date = dayjs(start_date).utc(true).toISOString();
        newLeave.end_date = dayjs(end_date).utc(true).toISOString();

        await a.save(newLeave);

        res.send(newLeave)
    });

    return router
}
