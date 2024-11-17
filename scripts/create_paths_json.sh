#!/bin/bash

set -e

if [ "$#" -ne 2 ]; then
    echo "Usage: $0 <public_directory> <output_directory>"
    echo "Example: $0 ./public/preview ./public"
    exit 1
fi

PUBLIC_DIR="$1"
OUTPUT_DIR="$2"
OUTPUT_FILE="$OUTPUT_DIR/paths.json"

if [ ! -d "$PUBLIC_DIR" ]; then
    echo "Error: Directory '$PUBLIC_DIR' does not exist."
    exit 1
fi

if [ ! -d "$OUTPUT_DIR" ]; then
    echo "Output directory '$OUTPUT_DIR' does not exist. Creating it..."
    mkdir -p "$OUTPUT_DIR"
fi

html_files=$(find "$PUBLIC_DIR" -type f -name "*.html" -print0 | xargs -0 -n1 basename)

json_array=$(echo "$html_files" | jq -R . | jq -s .)

echo "$json_array" > "$OUTPUT_FILE"
