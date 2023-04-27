# Back-end

```yaml
version: "3"
services:
  api:
    build:
      context: .
      dockerfile: Dockerfile
    container_name: rest-api-4
    environment:
     - DB_USER=postgres
     - DB_PASSWORD=Postgres2019!
     - DB_HOST=postgres
     - DB_PORT=5432
     - DN_NAME=blog
    ports:
      - 3000:3000
    volumes: 
      - ./:/usr/src/app
      - /usr/src/app/node_modules
    depends_on: 
      - postgres
    networks:
      - rest-api-4-network
    
  postgres: 
    image: postgres:11
    restart: unless-stopped
    environment: 
      POSTGRES_USER: "postgres"
      POSTGRES_PASSWORD: "Postgres2019!"
      POSTGRES_DB: "blog"
    ports:
      - 15432:5432
    volumes:
      - postgres-data:/data
    networks:
      - rest-api-4-network

  pgadmin:
    image: dpage/pgadmin4
    environment:
      PGADMIN_DEFAULT_EMAIL: ""
      PGADMIN_DEFAULT_PASSWORD: ""
    ports:
      - "16543:80"
    depends_on:
      - postgres
    networks:
      - rest-api-4-network

volumes:
  postgres-data:

networks:
  rest-api-4-network:
    driver: bridge
```
