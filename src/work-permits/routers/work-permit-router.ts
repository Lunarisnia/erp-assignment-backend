import {Router} from "express";
import {AppDataSource} from "../../database/data-source";
import dayjs, {Dayjs} from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from 'dayjs/plugin/timezone';
import {WorkPermitEntity} from "../entity/work-permit-entity";

dayjs.extend(utc)
dayjs.extend(timezone)

export const WorkPermitRouter = (router: Router) => {
    router.get("/", async (req, res) => {
        const w = await AppDataSource.getRepository(WorkPermitEntity)

        const workPermits = await w.find();

        res.send(workPermits);
    });

    router.post("/", async (req, res) => {
        const {name, reason, start_date, end_date, work} = req.body;
        const a = await AppDataSource.getRepository(WorkPermitEntity)
        const workPermit = new WorkPermitEntity();
        workPermit.name = name;
        workPermit.reason = reason;
        workPermit.work = work;
        workPermit.start_date = dayjs(start_date).utc(true).toISOString();
        workPermit.end_date = dayjs(end_date).utc(true).toISOString();

        await a.save(workPermit);

        res.send(workPermit)
    });

    return router
}
