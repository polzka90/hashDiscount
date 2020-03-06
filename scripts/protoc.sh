#!/usr/bin/env bash

BASEDIR=$(dirname "$0")
cd "${BASEDIR}"/../

PROTOC_GEN_TS_PATH="C:/PrivateWorkSpace/hashDiscount/node_modules/.bin/protoc-gen-ts.cmd"
GRPC_TOOLS_NODE_PROTOC_PLUGIN="C:/PrivateWorkSpace/hashDiscount/node_modules/.bin/grpc_tools_node_protoc_plugin.cmd"
GRPC_TOOLS_NODE_PROTOC="C:/PrivateWorkSpace/hashDiscount/node_modules/.bin/grpc_tools_node_protoc.cmd"

for f in ./src/protos/*; do

  # skip the non proto files
  if [ "$(basename "$f")" == "index.ts" ]; then
      continue
  fi

  # loop over all the available proto files and compile them into respective dir
  # JavaScript code generating
  ${GRPC_TOOLS_NODE_PROTOC} \
      --js_out=import_style=commonjs,binary:"${f}" \
      --grpc_out="${f}" \
      --plugin=protoc-gen-grpc="${GRPC_TOOLS_NODE_PROTOC_PLUGIN}" \
      -I "${f}" \
      "${f}"/*.proto

  ${GRPC_TOOLS_NODE_PROTOC} \
      --plugin=protoc-gen-ts="${PROTOC_GEN_TS_PATH}" \
      --ts_out="${f}" \
      -I "${f}" \
      "${f}"/*.proto

done