.DEFAULT: re
.PHONY: build up down shell dbshell migrate superuser test

re: clean up

force: fclean migrate
	docker-compose build --no-cache
	docker-compose up -d

up: clean build
	docker-compose up -d

build: migrate
	docker-compose build
	
shell:
	docker-compose exec backend python manage.py shell
	
dbshell:
	docker-compose exec db psql -U ${POSTGRES_USER} -d ${POSTGRES_DB}
	
migrate:
	docker-compose run --rm backend python3 backend/manage.py makemigrations
	docker-compose run --rm backend python3 backend/manage.py migrate
	
logs:
	docker-compose logs -f
	
clean:
	docker-compose down --remove-orphans --volumes
	
fclean: 
	docker-compose down --rmi all --volumes --remove-orphans
	docker system prune -a
