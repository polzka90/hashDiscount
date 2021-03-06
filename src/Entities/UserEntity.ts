import {Entity, PrimaryColumn, Column} from "typeorm";

@Entity({ schema: 'public', synchronize: false })
export class tbl_users {

    @PrimaryColumn()
    id: string;

    @Column()
    first_name: string;

    @Column()
    last_name: string;

    @Column()
    date_of_birth: Date;

}