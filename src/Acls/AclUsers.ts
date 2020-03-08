import { createConnection, Connection } from "typeorm";
import { tbl_users } from "../Entities/UserEntity"
import * as myConfig from '../config.json';
import "reflect-metadata";
import { User } from "../Models/User";
import { injectable } from "inversify";

@injectable()
export class AclUsers {
    constructor() { }
    GetUser(id: string): Promise<User> {

        return new Promise(async (resolve, rejects) => {
            try{
            let cnn = await createConnection(
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
            )

            let userRepository = cnn.getRepository(tbl_users);

            let entityUser = await userRepository.findOne({
                select: ["id", "first_name", "last_name", "date_of_birth"],
                where: `id = '` + id + `'`
            });

            await cnn.close();

            if (entityUser) {
                let user: User = {
                    Id: entityUser.id,
                    BirthDate: entityUser?.date_of_birth,
                    FirstName: entityUser?.first_name,
                    LastName: entityUser.last_name
                };
                resolve(user);
            }
            else {
                rejects(new Error('Usuario não achado'));
            }
        }catch(error)
        {
            console.log(error);
        }
        });
    }
}