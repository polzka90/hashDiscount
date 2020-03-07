// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var Discount_pb = require('./Discount_pb.js');

function serialize_discount_DiscountRequest(arg) {
  if (!(arg instanceof Discount_pb.DiscountRequest)) {
    throw new Error('Expected argument of type discount.DiscountRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_discount_DiscountRequest(buffer_arg) {
  return Discount_pb.DiscountRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_discount_DiscountResponse(arg) {
  if (!(arg instanceof Discount_pb.DiscountResponse)) {
    throw new Error('Expected argument of type discount.DiscountResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_discount_DiscountResponse(buffer_arg) {
  return Discount_pb.DiscountResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var DiscountService = exports.DiscountService = {
  getDiscount: {
    path: '/discount.Discount/GetDiscount',
    requestStream: false,
    responseStream: false,
    requestType: Discount_pb.DiscountRequest,
    responseType: Discount_pb.DiscountResponse,
    requestSerialize: serialize_discount_DiscountRequest,
    requestDeserialize: deserialize_discount_DiscountRequest,
    responseSerialize: serialize_discount_DiscountResponse,
    responseDeserialize: deserialize_discount_DiscountResponse,
  },
};

exports.DiscountClient = grpc.makeGenericClientConstructor(DiscountService);
