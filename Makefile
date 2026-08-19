.PHONY: all run stop kill restart

all: run

run:
	@./run.sh

stop:
	@./kill.sh

kill: stop

restart: stop
	@sleep 1
	@./run.sh
