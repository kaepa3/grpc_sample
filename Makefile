proto:
	protoc -I./proto --go_out=plugins=grpc:./ --js_out=import_style=commonjs:./client proto/*.proto
