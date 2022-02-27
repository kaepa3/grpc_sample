package client

import (
	"context"
	"fmt"
	"sync"

	"sample/gen/api"

	"github.com/pkg/errors"
	"google.golang.org/grpc"
)

type TestClient struct {
	sync.RWMutex
	started  bool
	finished bool
}

func NewClient() *TestClient {
	return &TestClient{}
}

func (r *TestClient) Run() int {
	if err := r.run(); err != nil {
		fmt.Println(err)
		return 1
	}
	return 0
}
func (t *TestClient) run() error {
	ctx, cancel := context.WithCancel(context.Background())
	defer cancel()

	conn, err := grpc.Dial("localhost:50051", grpc.WithInsecure())
	if err != nil {
		return errors.Wrap(err, "Failed to connect to grpc server")
	}
	defer conn.Close()

	err = t.reportRequest(ctx, api.NewSampleReturnServiceClient(conn))
	if err != nil {
		fmt.Printf("err:%v", err)
	}

	fmt.Println("end")

	return nil
}

func (r *TestClient) reportRequest(ctx context.Context, cli api.SampleReturnServiceClient) error {

	responce, err := cli.Report(ctx, &api.SampleRequest{Data: 1})
	if err != nil {
		return err
	}

	fmt.Printf("responce:%v\n", responce)
	return nil

}
