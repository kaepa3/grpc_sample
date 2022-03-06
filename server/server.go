package main

import (
	"context"
	"errors"
	"fmt"
	"log"
	"net"
	"os"
	"os/signal"

	"sample/gen/api"
	"sample/handler"

	grpc_auth "github.com/grpc-ecosystem/go-grpc-middleware/auth"
	"google.golang.org/grpc"
	"google.golang.org/grpc/reflection"
)

func main() {
	port := 50051
	lis, err := net.Listen("tcp", fmt.Sprintf(":%d", port))
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}
	authInterceptor := grpc.UnaryInterceptor(grpc_auth.UnaryServerInterceptor(authenticate))
	server := grpc.NewServer(authInterceptor)
	api.RegisterSampleReturnServiceServer(
		server,
		handler.NewSampleHandler(),
	)
	reflection.Register(server)

	go func() {
		log.Printf("strt gRPC server port:%v", port)
		server.Serve(lis)
	}()

	quit := make(chan os.Signal)
	signal.Notify(quit, os.Interrupt)
	<-quit
	log.Println("stopping gRPC server...")
	server.GracefulStop()

}

func authenticate(ctx context.Context) (context.Context, error) {
	token, err := grpc_auth.AuthFromMD(ctx, "Bearer")
	if err != nil {
		return nil, err
	}
	if token != "testtoken" {
		return nil, errors.New("unauthorized")
	}
	return ctx, nil
}
