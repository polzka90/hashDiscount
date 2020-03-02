import {createConnection } from "typeorm";
import { tbl_users } from "../Entities/UserEntity"
import * as myConfig from '../config.json';
import "reflect-metadata";
import { join } from "path";
import { resolve } from "dns";
import { rejects } from "assert";

export class AclUsers
{
    constructor(){}
    GetUser(id: string) : Promise<tbl_users | undefined> {

        return new Promise((resolve, rejects) => {
        createConnection(
            {
                type: "postgres",
                host: myConfig.DbConnection.host,
                port: myConfig.DbConnection.port,
                username: myConfig.DbConnection.username,
                password: myConfig.DbConnection.password,
                database: myConfig.DbConnection.database,
                entities: [
                    //join(__dirname, '/../Entities/UserEntity.{.ts,.js}')
                    tbl_users
                ],
                synchronize: true,
                logging: false
            }
        ).then(connection => {
            let userRepository = connection.getRepository(tbl_users);
            userRepository.findOne({
                select: ["id","first_name"],
                where: `id = '42975333080'`
            }).then((tbl_users) =>{
                console.log(tbl_users);
                resolve(tbl_users);
            });
            // here you can start to work with your entities
            
        }).catch(error => console.log(error));
    });

    }
}