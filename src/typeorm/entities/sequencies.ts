import { Entity, Column, CreateDateColumn, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

interface ISequence {
    id: string,
    sequence: string,
    specie: string,
    created_at: Date
}

@Entity("sequencies")
export class Sequence implements ISequence{

    @PrimaryColumn()
    id: string;

    @Column()
    sequence: string;

    @Column()
    specie: string;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if(!this.id) {
            this.id = uuid();
        }
    }

}