protoc --proto_path=protobuf --go_out=plugins=grpc:poker-backend protobuf/poker.proto
protoc --proto_path=protobuf --js_out=import_style=commonjs,binary:poker-frontend/src/gen --grpc-web_out=import_style=commonjs,mode=grpcwebtext:poker-frontend/src/gen protobuf/poker.proto

# protoc --proto_path=protobuf --grpc-web_out=import_style=commonjs,mode=grpcweb:poker-frontend/src/gen protobuf/poker.proto