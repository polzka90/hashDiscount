// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var Discount_pb = require('./Discount_pb.js');

function serialize_greeter_DiscountRequest(arg) {
  if (!(arg instanceof Discount_pb.DiscountRequest)) {
    throw new Error('Expected argument of type greeter.DiscountRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_greeter_DiscountRequest(buffer_arg) {
  return Discount_pb.DiscountRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_greeter_DiscountResponse(arg) {
  if (!(arg instanceof Discount_pb.DiscountResponse)) {
    throw new Error('Expected argument of type greeter.DiscountResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_greeter_DiscountResponse(buffer_arg) {
  return Discount_pb.DiscountResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var DiscountService = exports.DiscountService = {
  getDiscount: {
    path: '/greeter.Discount/GetDiscount',
    requestStream: false,
    responseStream: false,
    requestType: Discount_pb.DiscountRequest,
    responseType: Discount_pb.DiscountResponse,
    requestSerialize: serialize_greeter_DiscountRequest,
    requestDeserialize: deserialize_greeter_DiscountRequest,
    responseSerialize: serialize_greeter_DiscountResponse,
    responseDeserialize: deserialize_greeter_DiscountResponse,
  },
};

exports.DiscountClient = grpc.makeGenericClientConstructor(DiscountService);
