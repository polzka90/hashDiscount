import {createConnection } from "typeorm";
import { tbl_users } from "../Entities/UserEntity"
import * as myConfig from '../config.json';
import "reflect-metadata";
import { User } from "../Models/User";
import { injectable } from "inversify";

@injectable()
export class AclUsers
{
    constructor(){}
     GetUser(id: string) : Promise<User> {

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
                    tbl_users
                ],
                synchronize: true,
                logging: false
            }
        ).then(connection => {
            let userRepository = connection.getRepository(tbl_users);
            userRepository.findOne({
                select: ["id","first_name", "last_name", "date_of_birth"],
                where: `id = '`+id+`'`
            }).then((tbl_users) =>{

                if(tbl_users)
                {
                let user : User = {
                    Id : tbl_users.id,
                    BirthDate : tbl_users?.date_of_birth,
                    FirstName : tbl_users?.first_name,
                    LastName : tbl_users.last_name
                };
                resolve(user);
                }
                else{
                    rejects(new Error('Usuario não achado'));
                }   
            });
            // here you can start to work with your entities
            
        }).catch(error => console.log(error));
    });

    }
}