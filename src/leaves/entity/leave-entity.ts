import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({
    schema: "public",
    name: "leaves"
})
export class LeaveEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column({type: "timestamp with time zone", name: "start_date"})
    start_date: string

    @Column({type: "timestamp with time zone", name: "end_date"})
    end_date: string

    @Column()
    reason: string
}