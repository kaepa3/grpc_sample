package handler

import (
	"context"
	"sample/gen/api"
	"sync"

	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

type SampleHandler struct {
	response *response
}

type response struct {
	sync.Mutex
	data map[api.Sample_Test]int
}

func NewSampleHandler() *SampleHandler {
	return &SampleHandler{
		response: &response{
			data: make(map[api.Sample_Test]int),
		},
	}
}

func (h *SampleHandler) Report(ctx context.Context, req *api.SampleRequest) (*api.SampleResponse, error) {
	if req.Data == api.Sample_UNKNOWN {
		return nil, status.Errorf(codes.InvalidArgument, "未知のデータです！")
	}
	h.response.Lock()
	h.response.data[req.Data] = h.response.data[req.Data] + 1
	h.response.Unlock()

	return &api.SampleResponse{
		Sp: &api.Sample{
			Name: "hoge",
		},
	}, nil
}
