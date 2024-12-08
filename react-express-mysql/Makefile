.PHONY: build
# Build services
build:
	docker compose build

.PHONY: up
# Start services
up:
	docker compose up -d

.PHONY: start
# build and up
start: build up bash

.PHONY: backend-bash
# Start backend bash shell
bash:
	docker exec -it react-express-mysql-backend-1 /bin/bash

.PHONY: db-mysql
# Start mysql in interactive mode
# Input the content inside db/password.txt when prompt
db-mysql:
	docker exec -it react-express-mysql-db-1 mysql -u root -p

.PHONY: check
# Check route healthz
check:
	docker exec -it react-express-mysql-backend-1 curl localhost/healthz

.PHONY: inspect
# Inspect health log
inspect:
	docker inspect --format '{{json .State.Health}}' react-express-mysql-backend-1 | jq
