import {createConnection } from "typeorm";
import { tbl_users } from "../Entities/UserEntity"
import * as myConfig from '../config.json';
import "reflect-metadata";

export class AclUsers
{
    constructor(){}
    GetUser(id: string) {

        let user : tbl_users | undefined;

        createConnection(
            {
                type: "postgres",
                host: myConfig.DbConnection.host,
                port: myConfig.DbConnection.port,
                username: myConfig.DbConnection.username,
                password: myConfig.DbConnection.password,
                database: myConfig.DbConnection.database,
                entities: [
                    __dirname + "../entity/*.js"
                ],
                synchronize: true,
                logging: false
            }
        ).then(connection => {
            let userRepository = connection.getRepository(tbl_users);
            userRepository.findOne({id: id}).then(dbuser =>{ user = dbuser});
            // here you can start to work with your entities
        }).catch(error => console.log(error));

        return user;
    }
}