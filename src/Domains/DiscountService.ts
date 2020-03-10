import { Discount } from "../Models/Discount";
import { AclUsers } from '../Acls/AclUsers'
import { injectable, inject } from "inversify";
import { User } from "../Models/User";
import * as myConfig from '../config.json';

@injectable()
export class DiscountService {
    protected aclUser: AclUsers;

    constructor(@inject(AclUsers) aclUsers: AclUsers) {
        this.aclUser = aclUsers;
    }
    async GetAllDiscountByUser(userId: string) {

        let today = new Date();
        let user: User;
        let Discount: number = 0;
        
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0');

        if (dd + '/' + mm == myConfig.DiscountParameters.DateBlackFriday) {
            Discount += myConfig.DiscountParameters.PtcBlackFriday;
        }

        try {
            user = await this.aclUser.GetUser(userId);
            if (user) {

                let userDay = String(user.BirthDate.getDate()).padStart(2, '0');
                let userMonth = String(user.BirthDate.getMonth() + 1).padStart(2, '0');
                if ((dd == userDay && mm == userMonth)) {
                    Discount += myConfig.DiscountParameters.BirthDayDiscountPtc;
                }else{
                    console.log("nao e aniversario");
                    console.log("user birthday "+user.BirthDate);
                    console.log("today "+today);
                }
            }
        }
        catch (rejected) {
            console.log("error getting the user");
            
        }

        Discount = Discount > myConfig.DiscountParameters.MaximumDiscountPtc ? myConfig.DiscountParameters.MaximumDiscountPtc : Discount;

        return Discount;
    }
}