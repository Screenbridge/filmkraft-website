#!/bin/bash

# Filmkraft Website - Local Preview Server
# This script starts a simple local web server to preview the site

echo "🎬 Starting Filmkraft Website Preview..."
echo ""
echo "📍 Server will be available at:"
echo "   http://localhost:8000"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""

# Check if Python 3 is available
if command -v python3 &> /dev/null; then
    python3 -m http.server 8000
# Fall back to Python 2
elif command -v python &> /dev/null; then
    python -m SimpleHTTPServer 8000
else
    echo "❌ Python not found. Please install Python to run the preview server."
    echo ""
    echo "Alternative: Open index.html directly in your browser"
    exit 1
fi
