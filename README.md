<img width="550" height="645" alt="unnamed" src="https://github.com/user-attachments/assets/80d01068-a14b-4546-96d7-7cd82e832763" />

> Versículo chave: "Consagre ao Senhor tudo o que você faz, e os seus planos serão bem-sucedidos." - Provérbios 16:3

Desenvolvimento backend exige conhecimento de múltiplos aspectos. Aqui está um mapa mental do que tudo o que um desenvolvedor deve aprender:

Fundamentos
Isso inclui tópicos como backend vs frontend, cliente-servidor, DNS, etc.

Linguagens de Programação Backend Escolha
entre uma ou mais linguagens de programação como Java, Python, JS, Go, Rust e C#.

Bancos de
Dados Inclui tópicos como tipos de bancos de dados como SQL (Postgres, MySQL, SQLite), NoSQL (MongoDB, Firebase, DynamoDB), NewSQL (CockroachDB, Spanner). Outros tópicos incluem trabalho com ORMs e Cache de Banco de Dados.

APIs e Serviços
Web Aprenda sobre tipos de APIs (REST, GraphQL, gRPC, SOAP) e técnicas de autenticação (como JWT, OAuth 2, chaves API).

Servidor e Hospedagem
Isso envolve tópicos como serviços de hospedagem backend (AWS, Azure, GCP), Containerização usando Docker & Kubernetes, e Configuração de Servidores para Nginx, Apache, etc.

DevOps:
aprenda sobre pipelines CI/CD usando GitHub Actions e Jenkins, IaC (Terraform, Ansible) e Monitoramento com ferramentas como Prometheus, Grafana, ELK.

# Back-end
Contracts:

[![docker-compose.yaml](https://img.shields.io/badge/-docker--compose.yaml-pink?style=social&logo=docker&logoColor=magenta)](#)

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

[![dockerfile](https://img.shields.io/badge/-Dockerfile-blue?style=social&logo=docker&logoColor=blue)](#)

```dockerfile
FROM node:14

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 3000
CMD [ "node", "server/server.js" ]
```

# 🚀 Deploy in AWS - Amazon Web Services

### Inside Amazon EC2 instance (public instance)
```sh
psql -h [endpoint rds] -u [usuário] -w postgres
```

### Inside Database
```sql
INSERT TO blog.post VALUES(7,'Isaac','DevOps Engineer', '2021-11-01 23:54:02');
SELECT * FROM blog.post;
```

### Configurando o banco de dados com psql

```sh
create database IsaacAlves7; # Comando para criar o banco de dados chamado IsaacAlves7
alter user postgres with encrypted password 'senha'; # Comando para alterar a senha do banco de dados do PostgreSQL
\q # saindo do psql
```

### SSM
```
!Sub '{{resolve:ssm-secure:/ECSCluster/${ClusterName}/RDS_ROOT_PASSWORD:1}}'
```
