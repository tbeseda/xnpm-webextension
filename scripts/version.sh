#!/bin/sh

if [ -z "$1" ]; then
  echo "Usage: npm run version:set <version>"
  exit 1
fi

sed -i '' "s/\"version\": \"[^\"]*\"/\"version\": \"$1\"/" package.json manifest.json
sed -i '' "s/\(@version[[:space:]]*\)[^[:space:]]*/\1$1/" content.user.js

npm i

echo "Version set to $1"
