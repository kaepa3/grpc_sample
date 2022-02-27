package main

import (
	"os"
	"sample/client"
)

func main() {
	os.Exit(client.NewClient().Run())
}
