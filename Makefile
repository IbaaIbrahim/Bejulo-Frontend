.PHONY: all run stop kill restart up down restart-docker logs status stamp check-stamp

all: run

# Local Python server management
run:
	@./run.sh

stop:
	@./kill.sh

kill: stop

restart: stop
	@sleep 1
	@./run.sh

# Cache busting — rewrite the ?v= stamps on every CSS/JS reference so a
# returning visitor is not left on the previous build's JS. See stamp-assets.py.
stamp:
	@python3 stamp-assets.py

check-stamp:
	@python3 stamp-assets.py --check

# Docker container management
up: stamp
	@echo "Starting Docker containers..."
	@docker compose up -d --build

down:
	@echo "Stopping Docker containers..."
	@docker compose down

restart-docker: down
	@sleep 1
	@$(MAKE) up

logs:
	@docker compose logs -f

status:
	@docker compose ps
