import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class Users {

    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    age: number;

}
