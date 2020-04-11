#!/bin/bash

sudo rm -rf ./output
mkdir -p ./output/code
mkdir -p ./output/mysql
mkdir -p ./output/graphql

docker build --tag=alibe-openapi-generator .

docker run -v $(pwd)/stoplight:/development/stoplight \
           -v $(pwd)/output/mysql:/development/output/mysql \
           -v $(pwd)/output/code:/development/output/code \
           -v $(pwd)/output/graphql:/development/output/graphql \
           -it alibe-openapi-generator ./generator-calls.sh
