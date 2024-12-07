.PHONY: build up start bash check

# Build services
build:
	docker compose build

# Start services
up:
	docker compose up -d

# Start bash shell
bash:
	docker exec -it react-express-mysql-backend-1 /bin/bash

# Combine build, up and bash
start: build up bash

# Check
check:
	docker exec -it react-express-mysql-backend-1 curl localhost/healthz