// package: discount
// file: Discount.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as Discount_pb from "./Discount_pb";

interface IDiscountService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getDiscount: IDiscountService_IGetDiscount;
}

interface IDiscountService_IGetDiscount extends grpc.MethodDefinition<Discount_pb.DiscountRequest, Discount_pb.DiscountResponse> {
    path: string; // "/discount.Discount/GetDiscount"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<Discount_pb.DiscountRequest>;
    requestDeserialize: grpc.deserialize<Discount_pb.DiscountRequest>;
    responseSerialize: grpc.serialize<Discount_pb.DiscountResponse>;
    responseDeserialize: grpc.deserialize<Discount_pb.DiscountResponse>;
}

export const DiscountService: IDiscountService;

export interface IDiscountServer {
    getDiscount: grpc.handleUnaryCall<Discount_pb.DiscountRequest, Discount_pb.DiscountResponse>;
}

export interface IDiscountClient {
    getDiscount(request: Discount_pb.DiscountRequest, callback: (error: grpc.ServiceError | null, response: Discount_pb.DiscountResponse) => void): grpc.ClientUnaryCall;
    getDiscount(request: Discount_pb.DiscountRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: Discount_pb.DiscountResponse) => void): grpc.ClientUnaryCall;
    getDiscount(request: Discount_pb.DiscountRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: Discount_pb.DiscountResponse) => void): grpc.ClientUnaryCall;
}

export class DiscountClient extends grpc.Client implements IDiscountClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getDiscount(request: Discount_pb.DiscountRequest, callback: (error: grpc.ServiceError | null, response: Discount_pb.DiscountResponse) => void): grpc.ClientUnaryCall;
    public getDiscount(request: Discount_pb.DiscountRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: Discount_pb.DiscountResponse) => void): grpc.ClientUnaryCall;
    public getDiscount(request: Discount_pb.DiscountRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: Discount_pb.DiscountResponse) => void): grpc.ClientUnaryCall;
}
