
import { inject } from "inversify";
import { DiscountService } from "../Domains/DiscountService";

export class DiscountController
{
    protected discountService: DiscountService;

    constructor(@inject(DiscountService) discountServices: DiscountService ){
        this.discountService = discountServices;
    }
    
}