import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({
    schema: "public",
    name: "work_permits"
})
export class WorkPermitEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    work: string

    @Column()
    reason: string

    @Column({type: "timestamp with time zone", name: "start_date"})
    startDate: Date

    @Column({type: "timestamp with time zone", name: "end_date"})
    endDate: Date
}