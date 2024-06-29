import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({
    schema: "public",
    name: "attendances"
})
export class AttendanceEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column({type: "timestamp with time zone", name: "clock_in",})
    clock_in: string
}