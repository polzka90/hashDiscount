"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var UserEntity_1 = require("../Entities/UserEntity");
var myConfig = __importStar(require("../config.json"));
require("reflect-metadata");
var AclUsers = /** @class */ (function () {
    function AclUsers() {
    }
    AclUsers.prototype.GetUser = function (id) {
        return new Promise(function (resolve, rejects) {
            typeorm_1.createConnection({
                type: "postgres",
                host: myConfig.DbConnection.host,
                port: myConfig.DbConnection.port,
                username: myConfig.DbConnection.username,
                password: myConfig.DbConnection.password,
                database: myConfig.DbConnection.database,
                entities: [
                    //join(__dirname, '/../Entities/UserEntity.{.ts,.js}')
                    UserEntity_1.tbl_users
                ],
                synchronize: true,
                logging: false
            }).then(function (connection) {
                var userRepository = connection.getRepository(UserEntity_1.tbl_users);
                userRepository.findOne({
                    select: ["id", "first_name"],
                    where: "id = '42975333080'"
                }).then(function (tbl_users) {
                    console.log(tbl_users);
                    resolve(tbl_users);
                });
                // here you can start to work with your entities
            }).catch(function (error) { return console.log(error); });
        });
    };
    return AclUsers;
}());
exports.AclUsers = AclUsers;
//# sourceMappingURL=AclUsers.js.map