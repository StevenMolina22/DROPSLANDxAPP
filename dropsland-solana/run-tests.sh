#!/bin/bash

echo "🚀 Building and testing Soulbound Token Minter..."

# Build the program
echo "📦 Building program..."
anchor build

if [ $? -ne 0 ]; then
    echo "❌ Build failed!"
    exit 1
fi

echo "✅ Build successful!"

# Run tests
echo "🧪 Running tests..."
anchor test --skip-local-validator

if [ $? -eq 0 ]; then
    echo "🎉 All tests passed!"
else
    echo "❌ Tests failed!"
    exit 1
fi


