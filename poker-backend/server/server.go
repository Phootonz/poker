package main

import (
	"context"
	"fmt"
	"log"
	"net"
	"poker/poker-backend/pokerpb"

	"google.golang.org/grpc"
)

type server struct{}

func (*server) Poker(ctx context.Context, req *pokerpb.PokerRequest) (*pokerpb.PokerResponse, error) {

	fmt.Printf("Poker function was invoked %v\n", req)

	firstName := req.GetPokering().GetFirstName()
	result := "Hello " + firstName
	res := &pokerpb.PokerResponse{
		Result: result,
	}
	return res, nil
}

func main() {
	fmt.Println("Hello World")

	// creds, err := credentials.NewServerTLSFromFile("../certs/server-cert.pem", "../certs/server-key.pem")
	// if err != nil {
	// 	log.Fatalf("Failed to setup tls: %v", err)
	// }

	lis, err := net.Listen("tcp", "0.0.0.0:9090")

	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}

	// s := grpc.NewServer(grpc.Creds(creds))
	s := grpc.NewServer()

	pokerpb.RegisterPokerServiceServer(s, &server{})

	if err := s.Serve(lis); err != nil {
		log.Fatalf("failed to listen: %v", err)
	}
}
