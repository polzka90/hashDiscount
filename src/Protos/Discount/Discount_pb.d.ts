// package: greeter
// file: Discount.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class DiscountRequest extends jspb.Message { 
    getUserid(): string;
    setUserid(value: string): void;

    getProductid(): string;
    setProductid(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DiscountRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DiscountRequest): DiscountRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DiscountRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DiscountRequest;
    static deserializeBinaryFromReader(message: DiscountRequest, reader: jspb.BinaryReader): DiscountRequest;
}

export namespace DiscountRequest {
    export type AsObject = {
        userid: string,
        productid: string,
    }
}

export class DiscountResponse extends jspb.Message { 
    getPct(): number;
    setPct(value: number): void;

    getValueInCents(): number;
    setValueInCents(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DiscountResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DiscountResponse): DiscountResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DiscountResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DiscountResponse;
    static deserializeBinaryFromReader(message: DiscountResponse, reader: jspb.BinaryReader): DiscountResponse;
}

export namespace DiscountResponse {
    export type AsObject = {
        pct: number,
        valueInCents: number,
    }
}
