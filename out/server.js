"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var AclUsers_1 = require("./Acls/AclUsers");
var acl = new AclUsers_1.AclUsers();
acl.GetUser("42975333080").then(function (tbl_users) {
    console.log(tbl_users === null || tbl_users === void 0 ? void 0 : tbl_users.first_name);
});
//# sourceMappingURL=server.js.map