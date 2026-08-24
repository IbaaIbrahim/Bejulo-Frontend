.PHONY: all run stop kill restart up down restart-docker logs status

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

# Docker container management
up:
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
