import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {AppDataSource} from "../../database/data-source";

@Entity({
    schema: "public",
    name: "users"
})
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    role: string

    @Column()
    email: string

    @Column()
    password: string
}
