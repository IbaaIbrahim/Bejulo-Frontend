mkdir -p logs
echo "Starting Server..."
(python3 -m http.server 4173 > ./logs/server.log 2>&1) &