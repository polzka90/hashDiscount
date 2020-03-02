"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var tbl_users = /** @class */ (function () {
    function tbl_users() {
    }
    __decorate([
        typeorm_1.PrimaryColumn(),
        __metadata("design:type", String)
    ], tbl_users.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], tbl_users.prototype, "first_name", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], tbl_users.prototype, "last_name", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Date)
    ], tbl_users.prototype, "date_of_birth", void 0);
    tbl_users = __decorate([
        typeorm_1.Entity()
    ], tbl_users);
    return tbl_users;
}());
exports.tbl_users = tbl_users;
//# sourceMappingURL=UserEntity.js.map