<table>
  <tr>
    <td><img width="1100" height="1283" alt="unnamed" src="https://github.com/user-attachments/assets/637b9747-af12-4d1f-9e0b-7376024ad5f7" /></td>
    <td><img width="550" height="645" alt="unnamed" src="https://github.com/user-attachments/assets/80d01068-a14b-4546-96d7-7cd82e832763" /></td>
  </tr>
</table>

> Versículo chave: "Consagre ao Senhor tudo o que você faz, e os seus planos serão bem-sucedidos." - Provérbios 16:3

Desenvolvimento backend exige conhecimento de múltiplos aspectos. Aqui está um mapa mental do que tudo o que um desenvolvedor deve aprender:

1. Fundamentos: Isso inclui tópicos como backend vs frontend, cliente-servidor, DNS, etc.

2. Linguagens de Programação Backend Escolha entre uma ou mais linguagens de programação como Java, Python, JS, Go, Rust e C#.

3. Bancos de Dados Inclui tópicos como tipos de bancos de dados como SQL (Postgres, MySQL, SQLite), NoSQL (MongoDB, Firebase, DynamoDB), NewSQL (CockroachDB, Spanner). Outros tópicos incluem trabalho com ORMs e Cache de Banco de Dados.

4. APIs e Serviços Web Aprenda sobre tipos de APIs (REST, GraphQL, gRPC, SOAP) e técnicas de autenticação (como JWT, OAuth 2, chaves API).

5. Servidor e Hospedagem: Isso envolve tópicos como serviços de hospedagem backend (AWS, Azure, GCP), Containerização usando Docker & Kubernetes, e Configuração de Servidores para Nginx, Apache, etc.

6. DevOps: aprenda sobre pipelines CI/CD usando GitHub Actions e Jenkins, IaC (Terraform, Ansible) e Monitoramento com ferramentas como Prometheus, Grafana, ELK.

A Arte do Design de APIs REST: Idempotência, Paginação e Segurança

APIs são a porta de entrada da maioria dos sistemas.

Eles expõem funcionalidades, possibilitam integrações e definem como equipes, serviços e usuários interagem. Mas, embora seja fácil fazer uma API funcionar, é muito mais difícil projetar uma que sobreviva às mudanças, lidasse com falhas com elegância e continue sendo um prazer trabalhar com ela seis meses depois.

APIs mal projetadas não irritam apenas os consumidores. Eles desaceleram as equipes, vazam dados, causam quedas e quebram integrações. Uma estrutura de resposta inconsistente pode se transformar em dezenas de parsers personalizados de clientes. Uma verificação de idempotência ausente pode resultar em cobranças duplicadas. Um caminho de autorização fraco pode causar uma violação de segurança.

APIs bem projetadas, por outro lado, criam alavancagem e ajudam a equipe a fazer mais. Algumas características definidoras são as seguintes:

Eles funcionam como contratos, não apenas como pontos de acesso.

Eles escalam com o uso.

Eles reduzem surpresas para os desenvolvedores e outros stakeholders.

E eles são confiáveis, interna e externamente.

A maior parte da dor nos sistemas de API não vem do desenvolvimento inicial. Vem da evolução deles: adicionar novos campos sem quebrar clientes antigos, lidar com tentativas sem duplicação de estado e sincronizar dados entre sistemas sem perder eventos.

Um bom design de API é defensivo e antecipa crescimento, chances de uso indevido e falhas. Ela entende que os pontos de integração são duradouros e que toda decisão tem impacto no futuro.

Neste artigo, exploramos os princípios e técnicas fundamentais de um bom design de APIs que tornam as APIs confiáveis, utilizáveis e seguras. Embora nosso foco seja principalmente nas APIs REST, também exploraremos alguns conceitos relacionados a APIs gRPC para ter uma visão um pouco mais holística.

Dominando a Idempotência: Construindo APIs Confiáveis
 
Idempotência é a propriedade de uma operação que garante que realizar a mesma ação várias vezes produza o mesmo resultado que fazê-la uma vez.

No contexto das APIs, isso significa que um cliente pode enviar a mesma solicitação várias vezes sem causar consequências não intencionais, como entradas duplicadas ou efeitos colaterais repetidos.

Por exemplo: Quando um usuário inicia um pagamento online, mas sofre um timeout devido a problemas de rede, a API de pagamento é chamada novamente como parte do mecanismo de retentativa. Sem idempotência, o usuário pode ser cobrado várias vezes pela mesma transação.

Um cliente adiciona itens ao carrinho e faz um pedido. No entanto, devido à conexão lenta com a internet, eles apertaram repetidamente o botão "Fazer Pedido". Sem idempotência, múltiplos pedidos idênticos podem ser feitos, levando a remessas duplicadas e má gestão de estoque.

Se um usuário se registrar em um serviço, mas a página de confirmação não carregar corretamente, ele é solicitado a enviar o formulário de registro novamente. Sem idempotência, contas de usuário duplicadas podem ser criadas.

A idempotência é fundamental para confiabilidade e consistência devido às seguintes razões:

Problemas de rede podem causar falhas ou prazos de expiração das requisições de API. Nesses casos, os clientes frequentemente tentam novamente solicitações para garantir o sucesso da operação. Sem idempotência, as tentativas podem levar a duplicação indesejada ou corrupção de dados.

Operações idempotentes ajudam a gerenciar condições de corrida onde múltiplas solicitações podem ser processadas simultaneamente.

A idempotência proporciona previsibilidade e estabilidade, garantindo que os usuários não encontrem resultados inconsistentes ou errôneos

Neste artigo, vamos entender como a idempotência funciona no Design de APIs e investigar múltiplas estratégias para implementar a idempotência em aplicações do mundo real.

<img width="1100" height="1316" alt="unnamed" src="https://github.com/user-attachments/assets/6d187ed9-de27-49ad-afef-4c68dcb49317" />

Principais 6 Casos para Aplicar Idempotência

<img width="550" height="674" alt="unnamed" src="https://github.com/user-attachments/assets/e589c042-f0e1-49ac-864d-3cc20532c882" />

A idempotência é essencial em vários cenários, especialmente quando operações podem ser retentadas ou executadas várias vezes. Aqui estão os 6 principais casos de uso onde a idempotência é crucial:

Requisições
de API RESTful Precisamos garantir que tentar novamente uma requisição de API não leve a múltiplas execuções da mesma operação. Implemente métodos idempotentes (como PUT e DELETE) para manter estados consistentes de recursos.

Processamento de Pagamentos
Precisamos garantir que os clientes não sejam cobrados várias vezes devido a tentativas ou problemas de rede. Gateways de pagamento frequentemente precisam tentar transações novamente; A idempotência garante que apenas uma carga seja feita.

Sistemas
de Gerenciamento de Pedidos Precisamos garantir que enviar um pedido várias vezes resulte em apenas um pedido. Desenvolvemos um mecanismo seguro para evitar deduções ou atualizações de inventário duplicado.

Operações de Banco de Dados
Precisamos garantir que reaplicar uma transação não altere o estado do banco de dados além da aplicação inicial.

Gerenciamento
de Conta de Usuário Precisamos garantir que tentar novamente uma solicitação de registro não crie múltiplas contas de usuário. Além disso, precisamos garantir que múltiplas solicitações de redefinição de senha resultem em uma única ação de reset.

Sistemas Distribuídos e Mensagens
Precisamos garantir que o reprocessamento de mensagens de uma fila não resulte em processamento duplicado. Implementamos handlers que podem processar a mesma mensagem várias vezes sem efeitos colaterais.

Um curso intensivo sobre como escalar a camada API

A camada API (Interface de Programação de Aplicações) serve como a espinha dorsal para a comunicação entre clientes e os serviços backend em aplicações modernas baseadas na internet.

Ela atua como a interface principal pela qual clientes, como aplicações web ou móveis, acessam a funcionalidade e os dados fornecidos pelo aplicativo. A Camada API de qualquer aplicação possui várias responsabilidades chave, tais como:

Processe as solicitações recebidas dos clientes com base no contrato de API definido.

Aplicar mecanismos e protocolos de segurança autenticando e autorizando clientes com base em suas credenciais ou tokens de acesso.

Orquestre interações entre vários serviços backend e agregue as respostas recebidas deles.

Gerencie as respostas formatando e retornando o resultado ao cliente.

Devido ao papel central que as APIs desempenham na arquitetura da aplicação, elas se tornam críticas para a escalabilidade da aplicação.

A escalabilidade da camada API é crucial pelos seguintes motivos:

Gerenciando Picos de Carga e Tráfego: À medida que as aplicações se tornam populares, elas enfrentam aumento do tráfego e picos repentinos na demanda dos usuários. Uma API escalável pode gerenciar o aumento da carga de forma eficiente.

Melhor Experiência do Usuário: A expectativa do usuário aumentou. A maioria dos usuários hoje em dia espera aplicações rápidas e responsivas. Uma API escalável garante que o aplicativo possa suportar um grande número de usuários sem comprometer o desempenho.

Otimização de Custos e Recursos: APIs escaláveis desbloqueiam o caminho para uma melhor utilização dos recursos. Em vez de provisionar a infraestrutura antecipadamente para o nível mais alto de demanda, as instâncias são adicionadas e removidas com base na demanda, resultando em custos operacionais reduzidos.

Neste artigo, vamos aprender os conceitos-chave que um desenvolvedor deve entender para a escalabilidade da API. Também vamos analisar algumas estratégias testadas e comprovadas para escalar a camada API com exemplos básicos de código para maior clareza. Por fim, também analisaremos algumas boas práticas que podem ajudar na escalabilidade da camada da API.

<img width="1437" height="1600" alt="unnamed" src="https://github.com/user-attachments/assets/dacdf0f5-22e7-40f1-9aa0-fe56f9b94e6a" />

Como realizamos a paginação no design de API?

<img width="1100" height="1293" alt="unnamed" src="https://github.com/user-attachments/assets/25e5916e-3646-47a0-9a14-2e8131967bae" />

A paginação é crucial no design de APIs para lidar com grandes conjuntos de dados de forma eficiente e melhorar o desempenho. Aqui estão seis técnicas populares de paginação:

Paginação baseada em deslocamento:
Essa técnica utiliza um deslocamento e um parâmetro limite para definir o ponto inicial e o número de registros a serem retornados.
- Exemplo: GET /orders?offset=0&limit=3
- Prós: Simples de implementar e entender.
- Contras: Pode se tornar ineficiente para grandes deslocamentos, pois exige escanear e pular linhas.

Paginação baseada em cursor:
Esta técnica usa um cursor (um identificador único) para marcar a posição no conjunto de dados. Normalmente, o cursor é uma string codificada que aponta para um registro específico.

Exemplo: GET /orders?cursor=xxx
- Prós: Mais eficiente para grandes conjuntos de conjuntos, pois não exige escanear registros pulados.
- Contras: Um pouco mais complexo de implementar e entender.

Paginação baseada em páginas:
Esta técnica especifica o número da página e o tamanho de cada página.

Exemplo: GET /items?page=2&size=3
- Prós: Fácil de implementar e usar.
- Desvantagens: Problemas de desempenho semelhantes à paginação baseada em offset para números grandes de página.

Paginação baseada em conjunto de chaves:
Essa técnica usa uma chave para filtrar o conjunto de dados, geralmente a chave primária ou outra coluna indexada.

Exemplo: GET /items?after_id=102&limit=3
- Prós: Eficiente para grandes conjuntos de dados e evita problemas de desempenho com grandes deslocamentos.
- Contras: Requer uma chave única e indexada, podendo ser complexo de implementar.

Paginação baseada em tempo:
Essa técnica utiliza um carimbo de data ou hora para paginar os registros.

Exemplo: GET /items?start_time=xxx&end_time=yyy
- Prós: Útil para conjuntos de dados ordenados por tempo, garante que nenhum registro seja perdido caso novos sejam adicionados.
- Desvantagens: Requer um carimbo de tempo confiável e consistente.

Paginação Híbrida:
Essa técnica combina múltiplas técnicas de paginação para aproveitar seus pontos fortes.
Exemplo: Combinar paginação por cursor e baseada no tempo para rolar de forma eficiente por registros ordenados no tempo.

Exemplo: GET /items?cursor=abc&start_time=xxx&end_time=yyy
- Prós: Pode oferecer o melhor desempenho e flexibilidade para conjuntos de dados complexos.
- Desvantagens: Mais complexo de implementar e requer design cuidadoso.

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
