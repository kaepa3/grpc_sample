#!/bin/bash
grpcurl -plaintext -d '{"data":1}' localhost:50051 sample.data.SampleReturnService/Report
