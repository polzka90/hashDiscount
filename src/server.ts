
import * as myConfig from './config.json';
import { AclUsers } from './Acls/AclUsers';

let acl = new AclUsers();

console.log(acl.GetUser("42975333080")?.first_name)