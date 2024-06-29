import {DataSource, Entity} from "typeorm";
import {UserEntity} from "../users/entity/user-entity";
import {AttendanceEntity} from "../attendances/entity/attendance-entity";
import {WorkPermitEntity} from "../work-permits/entity/work-permit-entity";
import {LeaveEntity} from "../leaves/entity/leave-entity";


export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: 5432,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: "erp_assignment",
    schema: "public",
    synchronize: false,
    logging: true,
    entities: [UserEntity, AttendanceEntity, WorkPermitEntity, AttendanceEntity, LeaveEntity],
    subscribers: [],
    migrations: [],
})