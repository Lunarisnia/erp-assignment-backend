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
    start_date: string

    @Column({type: "timestamp with time zone", name: "end_date"})
    end_date: string
}