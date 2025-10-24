#!/bin/sh

if grep -rEn --exclude-dir=node_modules --include='*.js' 'console\.(log|table|warn|error|info)' .; then
    echo "oops, console.log found"
    exit 1
fi