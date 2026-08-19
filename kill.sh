#!/bin/bash

echo "Stopping Server..."

PID=$(pgrep -f "python3 -m http.server 4173")

if [ -n "$PID" ]; then
    kill $PID
    echo "Server stopped (PID: $PID)."
else
    echo "No running server found on port 4173."
fi
