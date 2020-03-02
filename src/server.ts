import "reflect-metadata";
import myConfig from './config.json';
import { AclUsers } from './Acls/AclUsers';
import { tbl_users } from './Entities/UserEntity';

let acl = new AclUsers();
acl.GetUser("42975333080").then((tbl_users) => {
    console.log(tbl_users?.first_name);
});

