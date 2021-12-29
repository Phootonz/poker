/**
 * @fileoverview gRPC-Web generated client stub for poker
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.poker = require('./poker_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.poker.PokerServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.poker.PokerServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.poker.PokerRequest,
 *   !proto.poker.PokerResponse>}
 */
const methodDescriptor_PokerService_Poker = new grpc.web.MethodDescriptor(
  '/poker.PokerService/Poker',
  grpc.web.MethodType.UNARY,
  proto.poker.PokerRequest,
  proto.poker.PokerResponse,
  /**
   * @param {!proto.poker.PokerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.poker.PokerResponse.deserializeBinary
);


/**
 * @param {!proto.poker.PokerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.poker.PokerResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.poker.PokerResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.poker.PokerServiceClient.prototype.poker =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/poker.PokerService/Poker',
      request,
      metadata || {},
      methodDescriptor_PokerService_Poker,
      callback);
};


/**
 * @param {!proto.poker.PokerRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.poker.PokerResponse>}
 *     Promise that resolves to the response
 */
proto.poker.PokerServicePromiseClient.prototype.poker =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/poker.PokerService/Poker',
      request,
      metadata || {},
      methodDescriptor_PokerService_Poker);
};


module.exports = proto.poker;

