import {Router} from "express";
import {AppDataSource} from "../../database/data-source";
import {AttendanceEntity} from "../entity/attendance-entity";
import dayjs, {Dayjs} from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc)
dayjs.extend(timezone)

export const AttendanceRouter = (router: Router) => {
    router.get("/", async (req, res) => {
        const dateQuery = req.query.date.toString();
        const a = await AppDataSource.getRepository(AttendanceEntity).createQueryBuilder("a")

        const date: Dayjs = dayjs(new Date(dateQuery));
        const tomorrow = date.add(1, "day")
        const yesterday = date.subtract(1, "day")
        const attendances = await a.where("a.clock_in < :tomorrow AND a.clock_in > :yesterday", {
            tomorrow,
            yesterday,
        }).getMany();

        res.send(attendances);
    });

    router.post("/", async (req, res) => {
        const {name, clock_in: clockIn} = req.body;
        const a = await AppDataSource.getRepository(AttendanceEntity)
        const newAttendance = new AttendanceEntity();
        const convertToUTC = dayjs(clockIn).utc(true);
        newAttendance.name = name;
        newAttendance.clock_in = convertToUTC.toISOString();

        await a.save(newAttendance);

        res.send(newAttendance)
    });

    return router
}