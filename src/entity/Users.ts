import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class Users {

    @PrimaryColumn()
    id: string | undefined;

    @Column()
    name: string | undefined;

    @Column()
    age: number | undefined;

}
