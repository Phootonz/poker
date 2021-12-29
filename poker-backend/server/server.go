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
	lis, err := net.Listen("tcp", "127.0.0.1:50051")

	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}
	s := grpc.NewServer()

	pokerpb.RegisterPokerServiceServer(s, &server{})

	if err := s.Serve(lis); err != nil {
		log.Fatalf("failed to listen: %v", err)
	}
}
