#!/bin/ash

#
# This file is used by Docker
#

openapi-generator generate -g mysql-schema \
                           -i stoplight/reference/contacts.v1.yaml \
                           -o output/mysql \
                           --additional-properties=defaultDatabaseName=contacts

openapi-generator generate -g typescript-node \
                           -i stoplight/reference/contacts.v1.yaml \
                           -o output/code

openapi-generator generate -g graphql-schema \
                           -i stoplight/reference/contacts.v1.yaml \
                           -o output/graphql
