<img width="550" height="684" alt="unnamed" src="https://github.com/user-attachments/assets/816e8ba9-b462-4103-b9b3-120df5b9e502" />

<table>
  <tr>
    <td><img width="1100" height="1283" alt="unnamed" src="https://github.com/user-attachments/assets/637b9747-af12-4d1f-9e0b-7376024ad5f7" /></td>
    <td><img width="550" height="645" alt="unnamed" src="https://github.com/user-attachments/assets/80d01068-a14b-4546-96d7-7cd82e832763" /></td>
  </tr>
</table>

<img width="1559" height="1536" alt="unnamed" src="https://github.com/user-attachments/assets/5877579c-b198-4c42-902e-6deed5c61635" />

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

<img width="1600" height="1272" alt="unnamed" src="https://github.com/user-attachments/assets/cc8b15a4-75de-4183-a180-521d637bae5c" />

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

A Cheatsheet to Build Secure APIs

<img width="550" height="817" alt="unnamed" src="https://github.com/user-attachments/assets/2bd5b97a-26aa-4828-8f29-ccddd53add0b" />

An insecure API can compromise your entire application. Follow these strategies to mitigate the risk:

Using HTTPS
Encrypts data in transit and protects against man-in-the-middle attacks.
This ensures that data hasn’t been tampered with during transmission.

Rate Limiting and Throttling
Rate limiting prevents DoS attacks by limiting requests from a single IP or user.
The goal is to ensure fairness and prevent abuse.

Validation of Inputs
Defends against injection attacks and unexpected data format.
Validate headers, inputs, and payload

Authentication and Authorization
Don’t use basic auth for authentication. Instead, use a standard authentication approach like JWTs
Use a random key that is hard to guess as the JWT secret
Make token expiration short
For authorization, use OAuth

Using Role-based Access Control
RBAC simplifies access management for APIs and reduces the risk of unauthorized actions.
Granular control over user permission based on roles.

Monitoring
Monitoring the APIs is the key to detecting issues and threats early.
Use tools like Kibana, Cloudwatch, Datadog, and Slack for monitoring
Don’t log sensitive data like credit card info, passwords, credentials, etc.

Over to you: What else would you do to build a secure API?

Na última edição, exploramos vários estilos arquitetônicos de APIs, cada um com seus pontos fortes únicos. Apesar das muitas opções, o REST continua sendo o mais popular. No entanto, sua popularidade não implica simplicidade. O REST apenas define recursos e o uso de métodos HTTP. Para dominar a arte de criar APIs REST, precisamos seguir certas diretrizes para garantir que projetemos APIs eficientes e amigáveis ao usuário.

Nesta edição, abordamos os detalhes mais específicos do design da API REST. Isso inclui:

Detectando problemas de API. Aprendemos a identificar os sinais evidentes de APIs ineficientes. Os "maus cheiros" indicam a necessidade de um redesenho ou melhoria.

Entendendo a maturidade da API. Mergulhamos no Modelo de Maturidade Richardson (RMM), um modelo que nos ajuda a distinguir o bom do mau design de APIs ao avaliar o quão próximo um API se alinha ao framework REST.

Voltando ao básico. Para garantir que todos estamos alinhados, revisamos os componentes centrais das APIs REST - verbos HTTP e códigos de status.

Para dar vida a esses conceitos, vamos abordar o primeiro dos três exemplos práticos desta edição, com o design de um componente de cadastro e login. Na próxima edição, continuaremos e exploraremos como construir uma API para carrinho de compras e estudar o redesenho da API de pagamento da Stripe.

Detecção de Problemas de API
Como podemos saber quando uma API não está correspondendo ao seu potencial e precisa de um redesenho? Assim como o código, APIs podem emitir um "cheiro" distinto quando não estão funcionando como deveriam. Reconhecer esses sinais de alerta é crucial. Vamos analisar alguns cenários concretos que sugerem que uma API pode não estar à altura.

Por exemplo, suponha que tenhamos estudado minuciosamente a documentação da API, mas ainda estamos tendo dificuldades para entender as nuances de sua funcionalidade. Essa necessidade de esclarecimento constante dos proprietários da API é uma indicação clara de uma API que poderia ser mais amigável ao usuário.

Considere outro exemplo em que parâmetros e resultados da API são vagamente definidos. Essa falta de clareza pode levar à confusão e possíveis erros. Isso desacelera o desenvolvimento e dificulta a colaboração eficaz entre equipes.

Além disso, pense em uma situação em que nossas equipes de front-end e back-end precisam colaborar extensivamente apenas para testar e validar comportamentos da API. Esse nível de sobrecarga de coordenação sugere uma API que não é tão intuitiva ou bem documentada quanto deveria ser.

Como proprietários de APIs, podemos notar diferentes tipos de sinais de alerta. Se nos vemos constantemente respondendo a dúvidas de uso da API, é como se estivéssemos usando um chapéu de atendimento ao cliente em meio período. Esse cenário aponta para uma API que pode se beneficiar de uma documentação mais detalhada e possivelmente de um design mais intuitivo.

Outro sinal claro pode ser o aumento de pedidos de melhorias menores. Se parece que estamos sempre ajustando e ajustando nossas APIs, isso pode sugerir que elas não são tão robustas ou flexíveis quanto deveriam ser.

Esses exemplos do mundo real destacam os tipos de desafios que indicam que nossas APIs poderiam precisar de alguns ajustes finos.

Entendendo os Níveis de Maturidade da API
O Modelo de Maturidade Richardson (RMM) [3], introduzido por Leonard Richardson em 2008, serve como uma ferramenta valiosa para entender melhor o conceito de maturidade da API e o quão bem uma API se adequa aos conceitos REST. Esse modelo nos ajuda a identificar os pontos fortes e fracos do nosso design de API.

O RMM define quatro níveis para avaliar o quão próximo um API está em conformidade com o framework REST. Os principais fatores que determinam a maturidade de um serviço são seu URI, métodos HTTP e HATEOAS (Hypermedia como Motor do Estado da Aplicação).

<img width="1308" height="709" alt="unnamed" src="https://github.com/user-attachments/assets/fcc1529d-c496-495b-a1ab-704a874932d5" />

Nível 0: O Pântano do POX
No Nível 0, APIs usam um único URI e um único método HTTP, tipicamente POST. Essa abordagem não aproveita as capacidades reais do protocolo HTTP e carece de uma forma uniforme de interagir com os recursos do sistema. Martin Fowler chamou esse nível de "O Pântano do POX (Simples XML)" devido ao seu sistema simplista no estilo RPC.

Nível 1: Recursos
O Nível 1 introduz o conceito de recursos, uma pedra angular do design RESTful. Cada recurso é identificado de forma única por um URI, criando uma forma mais fácil de gerenciar e interagir com diferentes elementos de um sistema. No entanto, ainda utiliza apenas um método HTTP, o POST, limitando todo o potencial do REST.

Nível 2: Verbos HTTP
O Nível 2 representa um avanço no design RESTful. Os serviços desse nível não apenas usam URIs únicos para recursos, mas também aproveitam diferentes métodos HTTP (como GET, POST, PUT, DELETE) que correspondem a operações sobre esses recursos. Essa abordagem torna nossas APIs mais intuitivas e as alinha mais de perto com os princípios da web. Esse nível de maturidade é o mais popular.

Level 3: HATEOAS
O Nível 3 traz o conceito de HATEOAS (Hypermedia como o Motor do Estado da Aplicação). O HATEOAS torna nossas APIs autodescritivas, melhorando sua usabilidade e descoberta. Quando um cliente interage com um recurso, a API fornece informações não apenas sobre o próprio recurso, mas também sobre recursos relacionados e possíveis ações, tudo representado por meio de links de hipermídia.

No exemplo acima, quando solicitamos a consulta da conta 12345, não só recebemos o saldo da conta ($100), mas a resposta também nos orienta sobre os próximos passos e como executá-los via URIs. Por exemplo, poderíamos depositar mais dinheiro na conta 12345 navegando para /account/12345/deposit.

O RMM oferece uma estrutura eficaz para nos ajudar a compreender e implementar melhor os princípios do RESTful no design da nossa API. É essencial lembrar, enquanto buscamos melhorar nossas APIs, que o Nível 2 é pré-requisito para o REST [3].

Fundamentos
Verbos HTTP
Ao projetar um sistema, frequentemente encontramos duas camadas: a camada de serviço web, responsável por lidar com requisições web, e a camada de serviço, onde ocorre o trabalho real, como interagir com bancos de dados, lidar com filas de mensagens e se comunicar com outros serviços.

Na camada de serviço web, utilizamos verbos HTTP. Esses verbos definem as operações que podemos realizar em vários recursos. Na camada de serviço, utilizamos operações CRUD (Crear, Lender, Atualizar, Deletar) para definir essas operações.

O diagrama abaixo lista os verbos HTTP comuns e seus mapeamentos para métodos de serviço. É essencial entender que nem sempre há um mapeamento direto um a um entre verbos HTTP e métodos de serviço. Por exemplo, o verbo GET pode ser usado para recuperar um único recurso ou uma lista inteira de recursos. Da mesma forma, tanto os verbos PUT quanto PATCH podem ser usados para modificar um recurso. No entanto, o verbo PATCH é usado especificamente quando queremos fazer modificações parciais em um recurso.

Embora os cinco métodos HTTP devam satisfazer a maioria das nossas necessidades, pode haver cenários em que precisamos definir operações personalizadas. Temos duas formas de abordar isso:

Mapear operações personalizadas para verbos HTTP padrão. Por exemplo, poderíamos mapear uma operação de busca para o verbo GET. No entanto, isso pode levar a alguma confusão, pois o verbo pode não estar totalmente alinhado com o propósito da operação. É vital ter uma documentação abrangente da API para esclarecer esses mapeamentos.

Defina um método HTTP personalizado. Em alguns casos, podemos precisar de uma operação específica que não é coberta por verbos HTTP padrão. Por exemplo, em jogos online, podemos precisar resetar uma partida. Podemos definir um método personalizado, como RESET, para esse propósito.

<img width="1600" height="494" alt="unnamed" src="https://github.com/user-attachments/assets/561efae2-2dbd-44fc-aa78-b5e15d0fb066" />

Códigos de Status
O REST é construído sobre o protocolo HTTP. Portanto, nossas APIs devem usar códigos de status HTTP para garantir um comportamento consistente e previsível. O diagrama abaixo mostra alguns códigos de status HTTP comuns.

<img width="1312" height="1178" alt="unnamed" src="https://github.com/user-attachments/assets/67a4107d-89f5-4c2a-9b5a-b4490dc5e1ef" />

No entanto, os códigos de status HTTP não são exaustivos para todos os possíveis resultados de uma chamada de API. Também devemos estabelecer nosso próprio conjunto de códigos de status internos ou códigos de erro para comunicar questões específicas relacionadas ao serviço. Uma forma eficiente de gerenciar esses códigos é mantendo uma biblioteca comum para todos os códigos do sistema. Isso facilita o registro e compartilhamento entre diferentes repositórios de código.

Por exemplo, vamos supor que o serviço de usuário use códigos de mensagem na faixa de 50000 a 59999, enquanto o serviço de carrinho de compras usa códigos de 60000 a 69999. Podemos envolver esses detalhes da mensagem em uma resposta HTTP e enviá-los de volta aos clientes. Essa prática beneficia muito o atendimento ao cliente, pois eles conseguem identificar facilmente problemas com base no código retornado.

Uma regra de ouro que devemos sempre seguir é devolver um código para cada resposta, mesmo que seja um timeout. Seguir essa regra garante um comportamento previsível e consistente. É crucial para manter um serviço de alta qualidade.

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
