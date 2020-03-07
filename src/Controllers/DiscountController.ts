
import { inject } from "inversify";
import * as grpc from 'grpc';
import { DiscountService as MyDiscountService } from "../Domains/DiscountService";
import { DiscountRequest, DiscountResponse } from '../Protos/Discount/Discount_pb';
import { DiscountService as GrpcDiscountService, IDiscountServer } from '../Protos/Discount/Discount_grpc_pb';
import DIContainer from '../di-container';

class DiscountController implements  IDiscountServer
{
    protected discountService: MyDiscountService;

    constructor(@inject(MyDiscountService) discountServices: MyDiscountService ){
        this.discountService = discountServices;
    }

    /**
     * Greet the user nicely
     * @param call
     * @param callback
     */
    getDiscount =  (call: grpc.ServerUnaryCall<DiscountRequest>, callback: grpc.sendUnaryData<DiscountResponse>): void => {
        const reply: DiscountResponse = new DiscountResponse();
        this.discountService.GetAllDiscountByUser(call.request.getUserid()).then(value => {
            reply.setPct(value);
            callback(null, reply);
        });
    };
    
}

export default {
    service: GrpcDiscountService,                // Service interface
    handler: new DiscountController(DIContainer.resolve<MyDiscountService>(MyDiscountService)),          // Service interface definitions
};