.PHONY: build
# Build services
build:
	docker compose build

.PHONY: up
# Start services
up:
	docker compose up -d

.PHONY: bash
# Start bash shell
bash:
	docker exec -it react-express-mysql-backend-1 /bin/bash

.PHONY: start
# Combine build, up and bash
start: build up bash

.PHONY: check
# Check
check:
	docker exec -it react-express-mysql-backend-1 curl localhost/healthz