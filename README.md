> Versículo chave: "Consagre ao Senhor tudo o que você faz, e os seus planos serão bem-sucedidos." - Provérbios 16:3

# ☁️ REST - Representational State Transfer
<a href=""><img src="https://img.shields.io/badge/dev.to-REST-0A0A0A?style=flat&logo=dev.to&logoColor=white"></a> <a href=""><img src="https://img.shields.io/badge/Medium-REST-000000?style=flat&logo=Medium&logoColor=white"></a> <img src="https://img.shields.io/badge/GitBook-REST-000000?style=flat&logo=GitBook&logoColor=white"> <a href="https://github.com/IsaacAlves7/js/blob/vanilla/README.md#js-axios"><img src="https://img.shields.io/badge/Axios-REST-purple?style=flat&logo=Axios&logoColor=white"></a> <img src="https://img.shields.io/badge/GraphQL-REST-magenta?style=flat&logo=GraphQL&logoColor=white"> <img src="https://img.shields.io/badge/Insomnia-REST-4000BF?style=flat&logo=Insomnia&logoColor=white"> <img src="https://img.shields.io/badge/Postman-REST-orange?style=flat&logo=Postman&logoColor=white"> <img src="https://img.shields.io/badge/Swagger-REST-85EA2D?style=flat&logo=Swagger&logoColor=white"> 

<a href="https://personal.ntu.edu.sg/ehchua/programming/webprogramming/HTTP_Basics.html"><img src="https://github.com/IsaacAlves7/DevSecOps/assets/61624336/47a9a30b-943f-48e7-8f41-1ce39fe8b583" align="right" height="77"></a>

Uma API **REST** (**Re**presentational **S**tate **T**ransfer - Transferência representacional de estado) é um estilo arquitetônico de software para sistemas distribuídos baseados em hipermídia, como a World Wide Web (WWW), e construção de APIs que possui um conjunto de regras e convenções para a construção e integração de serviços web, ou seja, é usado para construção de web services. Sua comunicação é feita unicamente pelo protocolo <a href="https://github.com/IsaacAlves7/devsecops/blob/master/pages/cn.md#-http---hypertext-transfer-protocol">HTTP (HyperText Transfer Protocol)</a> para permitir que diferentes sistemas se comuniquem entre si, frequentemente é usado para criar serviços da web que são leves, escaláveis e fáceis de manter. O termo "REST" foi introduzido por Roy Fielding em sua tese de doutorado em 2000 e descreve um conjunto de princípios e restrições para criar serviços da web baseados na representação do estado dos recursos (`resources`). 

Ele não é um padrão de design prescritivo para construção de APIs. Ele estabelece um conjunto de princípios que guiam como os sistemas distribuídos (como APIs) devem ser construídos para serem escaláveis, eficientes e fáceis de entender e manter. Isso significa que REST oferece diretrizes gerais, mas deixa espaço para os desenvolvedores tomarem decisões de design com base nas suas necessidades específicas. 

Com o decorrer dos anos de uso do SOAP, surgiu o REST em 2000, onde são abordagens distintas para a criação de web services. A principal diferença entre elas, é que o SOAP é um protocolo rigoroso que usa um envelopamento próprio em XML para a troca de mensagens e define um conjunto específico de regras e padrões, os envelopes SOAP usando o HTTP para fazer chamadas RPC trafegando em XML. Ele pode operar sobre diferentes protocolos, como HTTP e SMTP, mas frequentemente é considerado mais complexo devido à sua estrutura formal e suporte a funcionalidades como segurança e transações. Já o REST faz requisições HTTP e suporta diferentes formatos de arquivo para enviar e receber dados.

Por outro lado, REST é um padrão arquitetural basicamente leve por natureza. Então, quando você tiver limitações de banda prefira web services REST, sendo uma arquitetura que se baseia nos princípios da web e utiliza os métodos HTTP (verbos), como `GET`, `POST`, `PUT` e `DELETE`, para a manipulação de recursos. Uma das grandes vantagens do REST é a flexibilidade, pois permite a utilização de diferentes formatos de dados, como JSON, XML e até texto simples, tornando-o mais leve e fácil de trabalhar. 

Além disso, enquanto SOAP pode ser usado em serviços com estado, REST é fundamentalmente stateless, significando que cada requisição é independente e não mantém informações entre as chamadas. Isso simplifica a escalabilidade e o desempenho das aplicações. Em termos de uso, SOAP é mais comum em ambientes corporativos que exigem segurança rigorosa e operações complexas, enquanto REST é amplamente adotado em aplicações web e móveis devido à sua simplicidade e eficiência. 

Essas diferenças fundamentais tornam cada abordagem mais adequada a contextos distintos, dependendo das necessidades do projeto. O REST chama simplesmente **serviços** via URL PATH ou endpoint (caminho ou rota da aplicação "`/`"). A arquitetura REST é simples e fornece acesso aos recursos para que o cliente REST acesse e renderize os recursos no lado do cliente. No estilo REST, URI ou IDs globais ajudam a identificar cada recurso.

Para falar de **endpoints** (substantivos) devemos falar um pouco de gramática. Na gramática da língua portuguesa, por exemplo temos substantivos, verbos, adjetivos, advérbios, pronomes...e por ai vai. São ao todo 10 classes gramaticais. Mas o que isso tem haver com endpoints? Para criar bons endpoints você precisa saber o que é substantivo e verbo (Assim como no paradigma de programação orientada a objetos - OOP). Pois, usamos estes conceitos para criá-los.

<details><summary><b title="(click to open)">A tabela a seguir mapeia as operações SOAP para seus equivalentes REST correspondentes:</b></summary><br />

| SOAP Operation | REST Operation | Notes          | 
|:---------------|:---------------|:---------------|
| `add` 	 | `POST`         |                |
| `addList` 	 |               |                |
| `changeEmail`  |               | Os serviços web REST não oferecem suporte a login por meio de credenciais de usuário. |
| `changePassword`  |            | Os serviços web REST não oferecem suporte a login por meio de credenciais de usuário. |
| `checkAsyncStatus`  | `GET`     | Você pode usar o serviço `async` para recuperar o status de uma única operação `async`. |
| `delete`  | `DELETE`     |                                                                                         |
| `deleteList`  |      |                                                                                            |
| `get`  | `GET`     |                                                                                               |
| `getAccountGovernanceInfo`  |      |                                                                              |
| `getAll`  | `GET`     |                                                                                            | 
| `getAsyncResult`  |      | Você pode usar o serviço assíncrono para recuperar o resultado de uma única operação assíncrona. | 
| `getBudgetExchangeRate`  |      | Você pode obter o equivalente em REST enviando uma solicitação `GET` para um registro específico. | 
| `getCurrencyRate`  |      | Você pode obter o equivalente em REST enviando uma solicitação `GET` para um registro específico. | 
| `getCustomizationId`  |      | Você pode obter o equivalente em REST enviando uma solicitação `GET` para um registro específico. | 
| `getDataCenterUrls`  |      | Os serviços web REST usam apenas domínios específicos da conta | 
| `getDeleted`  |      |  | 
| `getIntegrationGovernanceInfo`  |      |  | 
| `getItemAvailability`  |      | Você pode obter o equivalente em REST enviando uma solicitação `GET` para um registro específico. | 
| `getList`  | `GET`     | Você pode recuperar uma lista de registros do mesmo tipo de registro em REST. | 
| `getPostingTransactionSummary`  |      | Você pode obter o equivalente em REST enviando uma solicitação `GET` para um registro específico. | 
| `getSavedSearch`  |      | A Pesquisa Salva não é suportada em serviços web REST. Os serviços web REST suportam conjuntos de dados do SuiteAnalytics. | 
| `getSelectValue`  |      |  | 
| `getServerTime`  |      |  | 
| `initialize / initializeList`  |  | Em serviços web REST, você pode transformar um registro de um tipo em outro, usando dados de registros existentes. Isso é o equivalente à operação `initialize` SOAP. Para mais informações, veja <a href="">Transformando Registros.</a> | 
| `search`  | `GET` | | 
| `searchMoreWithId`  |  | | 
| `update`  | `PATCH` | | 
| `updateList`  |  | | 
| `updateInviteeStatus`  |  | Você pode obter o equivalente em REST enviando uma solicitação `PATCH` para um registro específico. | 
| `upsert`  | `PUT` |  | 
| `upsertList`  |  |  | 

</details>

Além disso, o REST é baseado em um conjunto de constraints, em sua tese, Roy Fielding definiu seis restrições (principles) para o REST:

<img src="https://github.com/IsaacAlves7/DevSecOps/assets/61624336/44b1b5c9-d5cc-4c5e-a351-4647ad8c93e7">

<br>

1. **Client-server** (Cliente-servidor): As duas partes devem estar separadas. A separação entre o cliente e o servidor permite que eles evoluam independentemente um do outro. Isso também possibilita a escalabilidade.
   
2. **Statelessness** (Sem estado): Ele dita que cada interação entre cliente e servidor deve ser independente e autossuficiente. Isso significa que o servidor não deve armazenar o estado do cliente entre as requisições. O protocolo HTTP, que é onde a internet "roda" é por design sem estado. Isso significa que toda requisição feita a um servidor é única pois estas requisições não guardam dados (estados) entre uma requisição e outra. É como se toda vez que você encontrasse um amigo tivesse que se apresentar para ele novamente. Pois, nem você nem seu amigo guardam dados (estados) entre vocês. O REST não muda isso, mas coloca toda a responsabilidade de "lembrar" os dados (estados) da requisição no cliente, que pode ser seu navegador/computador/aplicação. Isso porque a cada requisição, o servidor que responde pela mesma pode ser diferente. Ele pode nunca ter tido contato com o cliente que o está contactando. Por outro lado, o cliente é o mesmo e o cliente sabe quais dados precisa seja para realizar autenticações ou mesmo para acessar diferentes **endpoints**.
	- Se tiver dados, vamos supor dados de Login, essa informação será salva em cookies ou banco de dados do navegador. Por que se não salvar essas informações, toda vez que você entrar no site vai precisar fazer login novamente.

	- Qualquer informação necessária para processar a requisição deve ser enviada pelo cliente, geralmente nos cabeçalhos HTTP, no corpo da mensagem ou na URL, portanto, o servidor não deve guardar o estado do cliente e cada request de um cliente contém todas as informações necessárias para atendê-la, ou seja, para que a request seja acessada por completo. Esse constraint promove escalabilidade e simplicidade no design de sistemas distribuídos, pois elimina a dependência de sessões no servidor. As solicitações (`requests`) de um cliente para o servidor devem conter todas as informações necessárias para entender e processar a solicitação. O servidor não deve manter informações de estado entre solicitações. Cada solicitação feita pelo cliente ao servidor deve conter todas as informações necessárias para o servidor processá-la, sem depender de qualquer estado mantido entre as requisições. 

	- A **transferência de estado** (State Transfer) é realizada por meio da representação dos recursos, que pode incluir a transição de estados por meio da aplicação de operações, como atualizações. **Stateless Server** é a implementação prática desse princípio, caracterizando um servidor que não mantém estados entre requisições, refere-se a um servidor que opera em conformidade com o constraint de statelessness. Em um stateless server, cada requisição é tratada como uma nova interação, sem depender de contexto armazenado em sessões. O servidor não mantém informações persistentes sobre o cliente além do que é estritamente necessário para processar uma requisição específica. O termo descreve a implementação prática de um servidor que adere ao constraint.
 
3. **Cacheable** (Cacheável): O cliente deve ser informado sobre as propriedades do cache de um recurso para que possa decidir quando deve ou não utilizar o cache. As respostas (`responses`) de recursos podem ser marcadas como cacheáveis (Cacheable), permitindo que os clientes armazenem em cache as respostas para reduzir a carga no servidor.
   
4. **Uniform interface** (Interface uniforme): Existe uma interface uniforme entre cliente e servidor. Ela compreende as identificações dos recursos por URI, as manipulações dos recursos a partir de suas representações, as mensagens serem autodescritivas, e o Hypermedia as the engine of application state - HATEOAS. Sobre a interação uniforme (Uniform Interface) conforme a interação entre o cliente e o servidor segue um conjunto uniforme de princípios, simplificando a compreensão e o uso da API.

5. **Layered System** (Sistema em camadas): Deve suportar conceitos como <a href="">balanceamento de carga</a>, <a href="">proxies</a> e <a href="">firewalls</a>. Uma API REST pode ser composta por várias camadas (Sistema em camadas), onde um cliente pode não estar ciente da existência de camadas intermediárias. Ou seja, é possível implementar diversas tecnologias complementares em conjunto entre o cliente e o servidor, e isso sendo feita de modo transparente, a API deve tornar isso de modo transparente para seus clientes.

6. **Code On-Demand** (Código sob demanda) [opcional]: O cliente pode solicitar o código do servidor e executá-lo. Uma analogia que podemos fazer é o JavaScript, que trafega por HTTP e é executado desde que sigam um contrato sempre irá funcionar.

APIs bem projetadas se comportam de forma consistente, justa e previsível, e crescem sem atritos. Algumas boas práticas a serem consideradas são as seguintes:

<table>
	<tr>
		<td><img src="https://github.com/user-attachments/assets/e8c8c02d-b231-44f2-a995-c5768df5184c" height="477"></td>
		<td><a href="https://medium.com/api-center/api-design-practice-7fce69e6336c"><img src="https://github.com/user-attachments/assets/c9511728-8a4e-417b-9846-591f40c8fa29" height="477"></a></td>
		<td><img src="https://github.com/user-attachments/assets/a30e2252-805a-4f91-b359-ebb5e81ef610" height="477"></td>
	</tr>
</table>

1. Caminhos orientados a recursos e o uso adequado de verbos HTTP ajudam as APIs a se alinharem com ferramentas padrão.

2. Use uma abordagem adequada de versionamento de API.

3. Use códigos de erro padrão ao gerar respostas de API.

4. As APIs devem ser idempotentes. Elas garantem novas tentativas seguras, fazendo solicitações repetidas para produzir o mesmo resultado, especialmente para operações POST.

5. Chaves de idempotência permitem que os clientes eliminem operações duplicadas com segurança, evitando efeitos colaterais.

6. As APIs devem suportar paginação para evitar gargalos de desempenho e inchaço da carga útil. Algumas estratégias comuns de paginação são baseadas em deslocamento, em cursor e em conjunto de chaves.

7. A segurança da API é obrigatória para APIs bem projetadas. Use autenticação e autorização adequadas com APIs, utilizando chaves de API, JWTs, OAuth2 e outros mecanismos. HTTPS também é essencial para APIs em produção.

Portanto, APIs REST são amplamente utilizadas na construção de serviços da web, pois são simples, eficientes e bem adaptadas para uma variedade de aplicações, sendo seu desenvolvimento fácil e rápido. 

<table>
	<tr>
		<td><img src="https://github.com/user-attachments/assets/8fd139f0-9d19-4c70-86e3-48b8a8fac80b"></td>
		<td><img src="https://github.com/user-attachments/assets/e2d2a3c6-885a-4311-8176-d7dc2efe0f99"></td>
	</tr>
</table>

APIs são a espinha dorsal dos sistemas modernos. Mas também é importante projetá-los da maneira correta. Aqui estão algumas coisas que um desenvolvedor deve considerar ao projetar APIs

- O Design de Interface da API preocupa-se em definir as entradas e saídas de uma API. Por exemplo, definir como as operações CRUD podem ser expostas ao usuário ou ao cliente.

- APIs Paradigmas APIs podem ser construídas seguindo diferentes paradigmas, cada um com seu próprio conjunto de protocolos e padrões. Algumas opções são REST, GraphQL e gRPC.

- Relacionamentos em APIs de API frequentemente precisam estabelecer relações entre as diversas entidades. Por exemplo, um usuário pode ter vários pedidos relacionados à sua conta. Os endpoints da API devem refletir essas relações para uma melhor experiência do cliente.

- Versionamento Ao modificar endpoints da API, o versionamento adequado e o suporte à compatibilidade retroativa são importantes.

- Limitação de Taxa é usada para controlar o número de solicitações que um usuário pode fazer a uma API dentro de um determinado período de tempo. Isso é crucial para manter a confiabilidade e disponibilidade da API.

Elas são frequentemente escolhidas para implementar serviços da web para aplicativos móveis, sistemas de gerenciamento de conteúdo, integrações de terceiros e muitos outros casos de uso, portanto, um serviço REST ganha muito mais performance, e claro, consome bem menos recursos. 

REST (Representational State Transfer) é um estilo arquitetural para a construção de APIs e ele define um conjunto de restrições e princípios para o design de sistemas distribuídos, permitindo a interação entre cliente e servidor de forma escalável e eficiente. O REST é leve, sem codificação e implantação de script necessária no lado do servidor, adequado para dispositivos móveis. 

O REST torna o reúso e a integração com o serviço bem simples e teoricamente, qualquer cliente autenticado e autorizado pode consumir essa operação. Atualmente, o REST é praticamente onipresente e praticamente todas as empresas utilizam o REST. Existem um clube de empresas que recebem mais de 1 bilhão de requests por dia, que são a: Netflix, eBay, AccuWeather, Sabre Travel Network. Já empresas como Google, Twitter, Facebook, Uber e Amazon Web Services recebem mais de 5 bilhões de requests por dia, e Mercado Livre recebendo mais de 7,2 bilhões de requisições por dia.

Ou seja, é possível criar APIs REST tanto no front-end quanto no back-end, mas com objetivos e responsabilidades diferentes, no back-end, normalmente, as APIs REST são criadas no back-end para expor recursos e funcionalidades para outros sistemas ou aplicações, sendo responsável por: Gerenciar dados e lógica de negócios, Autenticação e autorização (Auth), integração com bancos de dados ou serviços externos, implementar regras de validação e segurança, as tecnologias comuns: Node.js (<a href="">Express</a>/<a href="">Request</a>/<a href="">Axios</a>), Python (<a href="">Flask</a>/<a href="">Django</a>/<a href="">FastAPI</a>), PHP (<a href="">Laravel</a>, <a href="">CakePHP</a>, <a href="">Lumen</a>, <a href="">Symfony</a>), Java (<a href="">Spring</a>), C# (<a href="">.NET</a>), Go (<a href="">Gin</a>), <a href="">Ruby on Rails</a> (<a href="">net::http</a>). 

Em alguns casos, o front-end pode criar APIs REST para consumir APIs externas, simular uma API para testes ou prototipagem, criar uma camada de abstração para APIs complexas, gerenciar a interface do usuário, lidar com requisições HTTP e tratamento de erros, implementar lógica de client-side, as tecnologias comuns: JavaScript (React, Angular, Vue.js), HTML, CSS. No entanto, é importante notar que o front-end não deve expor dados sensíveis ou lógica de negócios crítica. A segurança e autenticação devem ser tratadas no back-end. Assim como também aplicativos mobile (Apps Android/ iOS) tem ganhado cada vez mais espaço e precisam interagir rapidamente com os servidores e o padrão REST é mais rápido no processamento de dados das requests e responses.

Exemplos de APIs REST no front-end:

- Utilizar a API <a href="">Fetch</a> ou <a href="">Axios</a> para consumir APIs externas.
- Criar uma fake API com JSON Server ou Mocky para testes.
- Utilizar bibliotecas como React Query ou Apollo Client para gerenciar requisições HTTP.

Em resumo, embora seja possível criar APIs REST no front-end, o back-end é o local mais apropriado para expor recursos e funcionalidades críticas, enquanto o front-end se concentra em consumir e apresentar dados. 

Embora seja comumente usado para guiar o design de APIs, REST em si não é um "API design" específico. Ele oferece diretrizes gerais, como a separação entre cliente e servidor, o uso de métodos do protocolo HTTP (`GET`, `POST`, `PUT`, `DELETE`, etc.), e a comunicação stateless, mas a implementação exata da API (ou seja, o "design" de como ela será organizada) pode variar de acordo com as necessidades específicas do sistema. Portanto, REST é um estilo arquitetural que influencia o design de APIs, mas não é um design prescritivo em si.

> Para fazermos testes de requisições e respostas na API REST pelo protocolo HTTP, você pode usar o navegador, o `curl` do linux, o Postman, como também o Insomnia ou o Thunder Client, uma extensão do VS Code.

Uma API nada mais é do que uma interface de comunicação de aplicações de forma programática. Ou seja, criamos uma interface para que diferentes aplicações se comuniquem de forma simples e eficiente. Portanto, criamos estas interfaces chamadas APIs utilizando padrões de design chamados RESTful.

Agora, uma **RESTful API** é um estilo arquitetônico que usa uma requisição HTTP para os verbos: `GET`, `POST`, `PUT` e `DELETE` de dados. É uma API que implementa os princípios REST de maneira eficaz e coerente. Essencialmente, uma RESTful API é um tipo específico de API REST que adere corretamente aos padrões e práticas recomendadas do REST para criação de **CRUDs** (**C**reate **R**ead **U**pdate **D**elete). 

Uma RESTful API suporta vários tipos de dados, formatos ou mime types, mas os mais comuns são:

- <a href="">JSON (JavaScript Object Notation)</a>: Leve, fácil de ler e escrever, amplamente utilizado.
- <a href="">XML (eXtensible Markup Language)</a>: Estruturado, usado em sistemas legados.
- <a href="">HTML</a>: Para representar recursos web.
- <a href="">Imagens</a>.
- <a href="">PDF</a>.
- <a href="">Binário</a>.
- <a href="">Texto simples</a>: Simples e direto, sem formatação complexa.
- <a href="">CSV</a>: CSV - Comma-Separated Values, é um formato de arquivo utilizado para armazenar dados tabulares em texto simples, onde os valores de cada linha são separados por vírgulas (ou outro delimitador, como ponto e vírgula). É amplamente usado por ser fácil de ler, criar e processar por diferentes sistemas.
- <a href="">YAML</a>: Usado ocasionalmente para configurações, menos comum que JSON e XML.

Esses formatos permitem a troca de dados entre cliente e servidor de maneira eficiente e flexível. Os principais benefícios dos serviços web REST incluem o seguinte: 

- Acesso simples aos metadados dos registros. Isso inclui metadados específicos do usuário e da empresa. Para obter mais informações sobre como trabalhar com metadados de registros, consulte trabalhando com metadados de recursos.
- Manuseio mais fácil de registros personalizados e campos personalizados.
- API fácil de navegar.
- Ao contrário dos <a href="">RESTlets</a>, você não precisa escrever, implantar e executar scripts personalizados. 

Portanto, as principais características e conceitos de uma API REST são que tudo é um **recurso** (`resource`), que pode ser um <a href="">objeto de dados</a> (`object`), uma <a href="">entidade</a> (`entity`) ou qualquer coisa que seja identificável por uma <a href="">URI (Uniform Resource Identifier)</a>. Por exemplo, em um sistema de gerenciamento de tarefas, tarefas individuais, listas de tarefas e usuários podem ser considerados recursos. Um resource pode ser por exemplo um **model** na nossa aplicação. Então, imagine que tenhamos uma aplicação que tenha um model '`categorias`' outro '`produtos`', cada um desses seria um resource.

<div align="center"><a href="https://medium.com/@mehmetbaz/rest-api-naming-conventions-and-best-practices-31635ee11c0d"><img src="https://github.com/user-attachments/assets/68bb547f-ff6d-476c-a273-42fbab6d8c83"></a></div>

Recursos são como entidades principais, cada elemento significativo no sistema é tratado como um "recurso" (por exemplo: um usuário, uma postagem, um produto). Cada recurso é identificado por uma URL única. Um recurso representa alguns dados que podem ser identificados exclusivamente. Cada recurso tem seu próprio URL exclusivo, e cada recurso pode referenciar outros recursos. Os dois principais tipos de recursos são os seguintes: <a href="">Recursos singulares</a> e <a href="">Recursos de coleção</a> que contêm vários recursos singulares. Os recursos podem existir em hierarquia e podem formar uma estrutura de árvore, consistindo em recursos filho e pai. 

São esses recursos que nós queremos realizar operações CRUD (Create, Retrieve, Update, Delete) através da nossa API. Nós fazemos isso através de URI específicas na nossa aplicação (endpoints), por exemplo:

```url
http://www.meusistema.com.br/api/v1/produtos
```

ou

```url
http://www.meusistema.com.br/api/v1/categorias
```

Estas URIs são endpoints, em alguns casos, como no Oracle NetSuite, o recurso mais importante é um **registro** (`record`). Um registro é um recurso singular. No entanto, pode haver outros recursos no NetSuite também. Um registro geralmente referencia outros recursos - outros registros. 

Um exemplo de um recurso de coleção é uma sublista porque contém várias linhas. Cada linha é um recurso filho singular, e o registro é um recurso pai. Um registro com várias sublistas, cada uma delas com várias linhas, forma um recurso hierárquico. Vale ressaltar que o REST não se limita a solicitações e respostas de registros. Também é possível inserir um novo registro ou deletar um já existente.

Um endpoint pode representar uma **coleção de registros** (generalização) ou um **registro individual** (`ID`). Exemplo:

- Coleção (endpoint base, nunca o identificador): /api/v1/produtos
- Individual (sempre com identificador): /api/v1/produtos/42

Veja que a URI é a mesma (substantivo no plural), pois se trata do mesmo recurso. O que diferencia a URI de acesso a uma coleção para um indivíduo é que no indivíduo estamos especificando um identificador. O design da criação correta de endpoints faz toda a diferença na boa utilização da API que você está criando. Veja a URI do acesso ao recurso individual que estamos fazendo acesso ao recurso `'42'` com identificador `'produto'`. Ou seja, é um acesso invertido, onde a leitura é confusa e não deveria ser utilizado. Inclusive está fora do especificado pelo padrão RESTFul. Além disso, um recurso deve por recomendação ser um substantivo no plural.

> Obs: Você pode utilizar um substantivo no singular, desde que mantenha um padrão em toda a sua API.

Portanto, as representações dos recursos contêm informações suficientes para o cliente entender e manipular o **estado do recurso** (Resource State). Isso pode ser no formato de JSON, XML ou outros formatos. No contexto de REST, o estado de um recurso geralmente é representado no corpo (`body`) da resposta (`response`). Quando você faz uma requisição `GET` para um endpoint, por exemplo, a API retorna o estado atual do recurso no corpo da resposta (em formato JSON, XML, etc.). 

O `header` (cabeçalho) da resposta contém metadados, como status HTTP, tipo de conteúdo (`Content-Type`), e informações de cache, mas não o estado do recurso em si. Se for um `POST` ou `PUT`, o estado do recurso pode estar no corpo da requisição, onde você envia dados para criar ou atualizar o recurso. Sobre as autorizações suportadas são token-based authentication, OAuth 1.0, OAuth 2.0, user credentials, Bearer Token, JWT - JSON Web Token, API Key. 

<img width="1337" height="378" alt="image" src="https://github.com/user-attachments/assets/3672d739-65f3-4df0-9b3c-14d6259db5f0" />

Cada recurso é identificado (`Resource Identification`) de forma exclusiva por uma URI. As URIs são usadas para acessar e manipular os recursos. Cada URI corresponde a um <a href="">endpoint</a> (rota ou caminho da aplicação) da API, que é a localização onde o recurso pode ser acessado ou manipulado. Um endpoint é uma URL específica (ou URI) que identifica um recurso ou uma coleção de recursos dentro de uma API. É o ponto de comunicação onde as requisições HTTP (como `GET`, `POST`, `PUT`, `DELETE`) são feitas para interagir com o recurso. Em REST, o endpoint é o "endereço" do recurso, e as operações (ou ações) são determinadas pelos métodos HTTP aplicados ao endpoint. Portanto, uma URI refere-se ao identificador exclusivo do recurso, por exemplo, uma URI pode ser `/api/v1/users/123`, que identifica um recurso específico (um `usuário` com ID `123`). 

Agora, o endpoint é a URL ou URI onde o cliente envia as requisições HTTP. Quando falamos de endpoint, estamos nos referindo à URL completa onde o cliente envia a requisição HTTP, incluindo o caminho que leva a um recurso e o protocolo que define como essa comunicação acontece. Cada recurso ou conjunto de recursos expõe seu próprio endpoint, e é isso que permite que o cliente saiba exatamente “onde bater” para criar, buscar, atualizar ou excluir alguma coisa.

A **versão** (`versioning`) numa API como esse `/v1` existe por uma razão muito simples, mas absolutamente essencial: *garantir evolução sem quebrar quem já usa*. Ela é a fronteira entre o que a API *era* e o que ela *vai se tornar*, permitindo que o sistema cresça, mude, melhore e até seja reescrito, sem destruir aplicações, integrações, mobile apps, parceiros externos ou clientes que dependem da interface antiga. Em conjunto com versionamento de código, isso se torna ainda mais eficaz. 

![unnamed](https://github.com/user-attachments/assets/521df4f3-737e-4509-a9c3-200c4e3050d1)

Em APIs profissionais, especialmente REST, GraphQL e microsserviços, você nunca consegue manter a mesma interface para sempre. Em algum momento você precisa alterar a estrutura de um objeto, mudar o formato de resposta, remover campos legados, renomear rotas, alterar regras de negócio, adicionar validações mais rígidas ou até repensar completamente o domínio. Quando isso acontece, os clientes antigos não podem simplesmente parar de funcionar. Eles dependem da versão anterior. Por isso a versão serve como um acordo explícito: “se você está usando `v1`, nada vai mudar para você, mesmo que eu lance uma `v2` totalmente diferente”.

É também uma forma de arquitetura evolutiva: a `v1` permanece estável, congelada, enquanto a empresa desenvolve uma `v2`, `v3`, ou até múltiplas versões coexistindo durante anos. Um banco, por exemplo, pode manter três versões simultâneas para dar tempo de todo mundo migrar. Sem versionamento, cada melhoria técnica viraria um risco. Com versionamento, você cria uma linha do tempo clara de mudanças e mantém compatibilidade retroativa.

Em síntese, a versão é o mecanismo que transforma uma API em um contrato duradouro. Ela permite inovar sem quebrar ninguém, permite corrigir erros estruturais sem traumas e garante que uma API real — usada por apps, empresas, sistemas críticos — possa evoluir no próprio ritmo. A `v1` é o “mundo” original; a `v2` é quando esse mundo cresce; e ambas coexistem até que a anterior possa ser aposentada com segurança. É por isso que praticamente toda API madura, seja REST ou GraphQL, carrega sua versão bem na rota.

Cada recurso ou grupo de recursos tem seu próprio endpoint. A diferença é que a URI identifica um recurso, enquanto o endpoint inclui o contexto de operação (ação realizada sobre o recurso) baseado no método HTTP:

<div align="center"><a href="https://medium.com/@abu7midan/rest-api-basics-and-terminologies-21d64511968d"><img src="https://github.com/user-attachments/assets/f5702679-c3a7-4efa-bb87-70e610957115"></a></div>

Sobre os **parâmetros** (PATH params) é necessário passar uma URL e é mandatório, e se não definir nenhum valor, isso pode gerar um erro de validação ou solicitar outra operação similar que usa o mesmo verbo. 

Exemplo: Imagine uma URL que nos permite devolver uma lista de livros de forma paginada. Essa URL tem 3 parametros de escolha, tamanho da página e a página atual.

```url
https://your_host/api/books/v1/find-with-paged-search/asc/10/1
```

- `asc` (ascending sort order) significa simplesmente *ordem crescente*. É a forma como você quer que os resultados sejam ordenados quando a API fizer a busca.
- `10` para uma página com dez itens
- `1` para começar (a partir de 1/10)

Todos esses parâmetros são passados via PATH. Em acréscimo, também existe um conceito de método de busca (search) em REST APIs, utilizando **parâmetros de consulta** (Query Parameters), que é muito similar ao PATH Params mas ele não é padronizado como os métodos HTTP (`GET`, `POST`, `PUT`, `DELETE`). No entanto, na verdade, a busca geralmente é realizada utilizando o método `GET`, que é usado para recuperar dados e eles não são mandatórios, então nesse caso eu não uso a barra para enviar esses parâmetros.

```url
https://your_host/api/books/v1/find-by-title?firstName=Clean&lastName=Coder
```

Eu uso ponto de interrogação `?`, por exemplo, `firstName=`, aí eu passo o parâmetro e o sinal de `&` (indicando continuidade), `lastName` igual e o valor. Se eu tivesse mais parâmetros, um terceiro parâmetro adicionaria outro `&` novamente e assim por diante, enquanto necessário.

Além disso, como são opcionais, eu poderia excluir um ou mais deles. Por exemplo, eu poderia buscar apenas pelo **sobrenome** (`lastName`) ou apenas pelo primeiro **nome** (`firstName`). Isso só é possível porque esses parâmetros são opcionais.

Quando uso o parâmetro path, sou obrigado a passá-lo, caso contrário, recebo um erro como resposta. Além do parâmetro especificado pela URL, também temos parâmetros enviados via cabeçalho ou corpo. Os parâmetros de cabeçalho, como o nome indica, são enviados no cabeçalho da requisição.

https://substack.com/redirect/7705b228-353e-409b-aff6-79326ff224a0?j=eyJ1IjoiMmRpcmZwIn0.DgQpD9vnxeDXnbOGqr5r4QICWGtxf2wFAnKNG8yY6Aw

Como vimos anteriormente na classe `request` e `response`, esses parâmetros não podem ser enviados diretamente pelo navegador. Para isso, precisamos de um cliente específico, como o Postman.

Em nosso exemplo, estamos enviando um parâmetro no cabeçalho informando que aceitamos texto simples, JSON, tipo de conteúdo e nossas credenciais de autorização, meu token, que é um token de portador. E é assim que podemos enviar parâmetros para nossas APIs através do cabeçalho da requisição.

Finalmente, temos os parâmetros enviados pelo corpo, que é o corpo da requisição. Imagine que fazemos uma requisição para fazer login, estamos enviando um JSON sem nenhuma formatação. Os parâmetros no corpo da requisição são usados ​​para enviar dados complexos de um recurso.

Esses dados podem ser formatados em JSON, como em nosso exemplo, ou em qualquer outro formato, como HTML, YAML;

Em resumo, qualquer formato que sua API suporte. Esses parâmetros são muito usados ​​na persistência de informações.

Em uma API padrão, na maioria das vezes, uso parâmetros de caminho ou parâmetros de consulta para passar parâmetros de busca.

- Os **parâmetros de cabeçalho** geralmente são interceptados pelo framework no qual a API foi implementada. Existem parâmetros de cabeçalho HTTP padrão, mas também podemos passar parâmetros personalizados.

- Os **parâmetros no corpo** da requisição são usados ​​com mais frequência para operações `POST`, `PUT` e `PATCH`, que são usadas para registrar e atualizar informações.

Existem algumas abordagens comuns para implementar a busca em REST APIs:

1. **Query Parameters**: Você pode usar parâmetros de consulta na URL (`?`) para especificar os critérios de busca. Por exemplo:

[![index.js](https://img.shields.io/badge/-GET-fff?style=social&logo=JSON&logoColor=gray)](#)

```http
GET /items?search=termo_de_busca HTTP/1.1
Host: exemplo.com
```

Para dar espaço no dado filtrado pela query de busca, use o símbolo `%`:

```http
GET /items?search=21%2099945-4631 HTTP/1.1
Host: exemplo.com
```

2. **Path Parameters**: Em alguns casos, a busca pode ser feita através de um endpoint específico, como:

[![index.js](https://img.shields.io/badge/-GET-fff?style=social&logo=JSON&logoColor=gray)](#)

```http
GET /search/items?query=termo_de_busca HTTP/1.1
Host: exemplo.com
```

3. **Payloads**: Para buscas mais complexas, algumas APIs permitem que você envie um corpo de requisição (`payload`) com dados para a busca, geralmente usando o método `POST`:

[![index.js](https://img.shields.io/badge/-POST-fff?style=social&logo=JSON&logoColor=gray)](#)

```http
POST /search/items
{
    "query": "termo_de_busca",
    "filters": {
        "categoria": "exemplo"
    }
}
```

O cliente e o servidor HTTP se comunicam enviando mensagens de texto. O cliente envia uma mensagem de **solicitação** (`request`) ao servidor. O servidor, por sua vez, retorna uma mensagem de **resposta** (`response`). O formato de uma mensagem de solicitação HTTP é o seguinte:

![image](https://github.com/user-attachments/assets/23e5ecd1-c2b6-4d82-ae6a-126f55fdbfdf)

Uma mensagem HTTP consiste em um **cabeçalho** (`header`) de mensagem e um **corpo** (`body`) de mensagem opcional, separados por uma linha em branco, conforme ilustrado abaixo. Em uma representação de uma solicitação/requisição (`request`) nós temos a **linha da request** (Request line) chamada `GET /doc/test.html HTTP/1.1`, o cabeçalho (`header`) com as informações do `Host`, MIME types e idiomas (`Accept`, `Accept-Language`, `Accept-Encoding`), `User-Agent`, `Connection`, `Authorization`, `Content-Type`, `Content-Length` e entre outros tipos. A Request line e o cabeçalho da request formam o cabeçalho da mensagem de request. 

Coisas importantes sobre cabeçalhos HTTP que você talvez não saiba!

![unnamed](https://github.com/user-attachments/assets/79679415-22b5-4686-9e11-cc7dd06c1e54)

As requisições HTTP (HTTP Requests) são como pedir algo a um servidor, e as respostas HTTP são as respostas do servidor. É como enviar uma mensagem e receber uma resposta.

Um cabeçalho de requisição HTTP é uma informação extra que você inclui ao fazer uma requisição, como que tipo de dados você está enviando ou quem você é. Nos cabeçalhos de resposta, o servidor fornece informações sobre a resposta que está enviando, como o tipo de dados que você está recebendo ou se você tem instruções especiais.

Um cabeçalho desempenha um papel vital ao possibilitar a comunicação cliente-servidor ao construir aplicações RESTful. Para enviar as informações corretas junto com as solicitações deles e interpretar corretamente as respostas do servidor, você precisa entender esses cabeçalhos.

A palavra é sua: o cabeçalho "referer" é um erro de digitação. Você sabe qual é o nome correto?

> [!Note]
> O <a href="">CORS - Cross-Origin Resource Sharing</a> é um mecanismo de segurança que permite que recursos de uma página da web sejam solicitados de um domínio diferente daquele que serviu a página. Por padrão, navegadores bloqueiam essas solicitações por motivos de segurança, mas o CORS permite que servidores especifiquem quais domínios podem acessar seus recursos, através de cabeçalhos HTTP. Isso é essencial para permitir a comunicação entre diferentes origens de forma segura.

Exemplo de header da request:

```yaml
HEADERS
=======
GET /doc/test.html HTTP/1.1
Host: localhost:5003
Accept: application/json
Accept-Language: en-us 
Accept-Encoding: gzip, deflate, br
User-Agent: PostmanRuntime/7.42.0
Connection: keep-alive
Authorization: Bearer [token]
Content-Type: application/json
Content-Length: 54
Postman-Token: [token]
```

Depois, temos uma linha em branco que separa o `header` do `body` chamada de `BLANK line`. No `body` vão os **parâmetros** (`parameters`) que são usados para fornecer informações adicionais que o cliente envia ao servidor para influenciar como os recursos são manipulados ou retornados, do nosso exemplo são `query parameters` (parâmetros de consulta).

Em APIs REST, uma **carga útil** (`payload`) refere-se aos dados enviados no corpo (`body`) de uma solicitação ou resposta HTTP. Esses dados podem ser em formatos como JSON, XML, ou outros, dependendo do que a API suporta, geralmente em formato JSON (JavaScript Object Notation), XML (Extensible Markup Language) ou outro formato de serialização de dados. Em uma requisição de API REST, o `content` (ou corpo da requisição) fica dentro da `payload`. Portanto, o payload é utilizado para enviar informações adicionais sobre a solicitação no corpo da mensagem de solicitação HTTP, como dados para criar ou atualizar um recurso, parâmetros para filtrar ou ordenar dados e autenticação e autorização.

<img width="1336" height="465" alt="image" src="https://github.com/user-attachments/assets/9e3f753c-350b-448a-bc68-2c35c2e4e821" />

Desse modo, uma API REST usa os **métodos/verbos HTTP** padrão (HTTP Verbs/methods), como `GET`, `POST`, `PUT` e `DELETE`, para realizar operações em recursos. Cada verbo HTTP tem um significado específico: `GET` para recuperar, `POST` para criar, `PUT` para atualizar e `DELETE` para excluir recursos. Vamos ver exemplos de URIs criadas para simular cada funcionalidade do recurso, no caso, contendo a descrição perfeita para os métodos HTTP: 

- `PUT` para atualizar o endereço (http://eg.com/customers/33245);
- `GET` para obter o (http://eg.com/customers/33245) e (http://eg.com/customers/33245/orders/);
- `POST` para criar `customers` em (http://eg.com/customers);
- `DELETE` para deletar o `customer` (http://eg.com/customers/33245).

Exemplo de uma solicitação `POST` com payload em JSON:

[![index.js](https://img.shields.io/badge/-POST-fff?style=social&logo=JSON&logoColor=gray)](#)

```http
POST /usuarios HTTP/1.1
Host: api.exemplo.com
Content-Type: application/json

{
  "nome": "João",
  "email": "joao@example.com",
  "senha": "minhasenha"
}
```

Nesse exemplo, o payload é o JSON contendo `nome`, `email` e `senha` do usuário. O servidor processa esses dados para criar um novo usuário, através da URI: http://api.exemplo.com/usuarios

<img width="698" height="415" alt="Captura de tela 2025-12-18 152408" src="https://github.com/user-attachments/assets/a53280e0-1d27-46d2-a7a3-dbd8f420b590" />

Existe uma distinção entre APIs REST e RESTful, enfatizando que uma API pode ser REST, mas não necessariamente RESTful. Leonard Richardson definiu quatro níveis de maturidade REST, que são fundamentais para desenvolver APIs eficazes. O **Richardson Maturity Model**, considerado como os passos rumo à glória do REST, é um modelo (desenvolvido por Leonard Richardson) que decompõe o elementos principais de um REST que se aproximam em três etapas: recursos, verbos HTTP e controles hipermídia.

<a href="https://martinfowler.com/articles/richardsonMaturityModel.html"><img width="673" height="398" alt="image" src="https://github.com/user-attachments/assets/03c95192-20e2-4fc5-8c31-0cadaeeb1f36" /></a>

O Modelo de Maturidade de Richardson, descreve os níveis de maturidade REST para APIs: a verdadeira RESTful API (_REST in piece_)

0. **Nível 0**: Caracterizado pelo 'pântano XML' (Swamp POX - Plain Old XML), onde várias funcionalidades estão reunidas em um único endpoint, usando HTTP para transmitir JSON ou XML sem uma organização adequada. O ponto de partida para o modelo é usar HTTP como transporte sistema para interações remotas, mas sem usar nenhum dos mecanismos da web. Basicamente, o que você está fazendo aqui é usando HTTP como mecanismo de tunelamento para seu próprio controle remoto mecanismo de interação, geralmente baseado em Remote Invocação de Procedimento.

<div align="center">
  <img width="522" height="178" alt="image" src="https://github.com/user-attachments/assets/fb4d8a58-691a-4ab1-bc32-1d0265c67590" />
  <p>Figura 2: Um exemplo interação no Nível 0</p>
</div>

Vamos supor que eu queira marcar uma consulta com meu médico. Meu O software de consulta primeiro precisa saber quais vagas vagas meu médico vai tem em data determinada, então faz um pedido ao hospital Sistema de Agendamento para obter essas informações. Em um nível 0 Cenário, o hospital expõe um endpoint de serviço em algum momento URI. Depois, posto nesse endpoint um documento contendo o Detalhes do meu pedido.

```xml
POST /appointmentService HTTP/1.1
[various other headers]

<openSlotRequest date = "2010-01-04" doctor = "mjones"/>
```

O servidor então devolve um documento com essa informação:

```xml
HTTP/1.1 200 OK
[various headers]

<openSlotList>
  <slot start = "1400" end = "1450">
    <doctor id = "mjones"/>
  </slot>
  <slot start = "1600" end = "1650">
    <doctor id = "mjones"/>
  </slot>
</openSlotList>
```

Estou usando XML aqui para o exemplo, mas o conteúdo pode na verdade, seja qualquer coisa: JSON, YAML, pares-chave-valor ou qualquer customização formatar. Meu próximo passo é marcar uma consulta, o que posso fazer novamente postando um documento no endpoint.

```xml
POST /appointmentService HTTP/1.1
[various other headers]

<appointmentRequest>
  <slot doctor = "mjones" start = "1400" end = "1450"/>
  <patient id = "jsmith"/>
</appointmentRequest>
```

Se tudo estiver bem, recebo uma resposta dizendo que minha consulta é Amarelado.

```xml
HTTP/1.1 200 OK
[various headers]

<appointment>
  <slot doctor = "mjones" start = "1400" end = "1450"/>
  <patient id = "jsmith"/>
</appointment>
```

Se houver um problema, digamos que outra pessoa entrou antes de mim, então Vou receber algum tipo de mensagem de erro no corpo da resposta.

```xml
HTTP/1.1 200 OK
[various headers]

<appointmentRequestFailure>
  <slot doctor = "mjones" start = "1400" end = "1450"/>
  <patient id = "jsmith"/>
  <reason>Slot not available</reason>
</appointmentRequestFailure>
```

Até agora, este é um sistema direto no estilo RPC. É simples pois é apenas trocar XML simples (POX) de um lado para o outro. Se você use SOAP ou XML-RPC, é basicamente o mesmo mecanismo, o único a diferença é que você envolve as mensagens XML em algum tipo de envelope.

1. **Nível 1**: Definir recursos lógicos, organiza informações em recursos distintos, como endpoints separados para clientes, fornecedores e ordens de trabalho, mas ainda depende pesadamente apenas dos métodos `GET` e `POST`. O primeiro passo rumo à Glória do Descanso no RMM é Apresente recursos. Então, agora, em vez de fazer todos os nossos pedidos para Um único endpoint de serviço, agora começamos a conversar com indivíduos recursos.

<div align="center">
<img width="522" height="178" alt="image" src="https://github.com/user-attachments/assets/14abc756-b832-44a1-8a41-1a0199804e5b" />
<p>Figura 3: Nível 1 Adiciona recursos</p>
</div>

Então, com nossa consulta inicial, podemos ter um recurso para dado Doutor.

```xml
POST /doctors/mjones HTTP/1.1
[various other headers]

<openSlotRequest date = "2010-01-04"/>
```

A resposta traz as mesmas informações básicas, mas cada slot é agora um recurso que pode ser abordado individualmente.

```xml
HTTP/1.1 200 OK
[various headers]


<openSlotList>
  <slot id = "1234" doctor = "mjones" start = "1400" end = "1450"/>
  <slot id = "5678" doctor = "mjones" start = "1600" end = "1650"/>
</openSlotList>
```

Com recursos específicos, marcar um horário significa postar em um slot específico.

```xml
POST /slots/1234 HTTP/1.1
[various other headers]

<appointmentRequest>
  <patient id = "jsmith"/>
</appointmentRequest>
```

Se tudo correr bem, recebo uma resposta parecida com antes.

```xml
HTTP/1.1 200 OK
[various headers]

<appointment>
  <slot id = "1234" doctor = "mjones" start = "1400" end = "1450"/>
  <patient id = "jsmith"/>
</appointment>
```

A diferença agora é que, se alguém precisar fazer algo a respeito A consulta, como marcar alguns testes, eles primeiro conseguem o recurso de compromissos, que pode ter um URI como , e postar esse recurso: http://royalhope.nhs.uk/slots/1234/appointment

Para um cara de objetos como eu, isso é como a noção de objeto identidade. Em vez de chamar alguma função no éter e Passando argumentos, chamamos de método em um objeto específico fornecendo argumentos para as outras informações.

2. **Nível 2**: Introduz o uso apropriado dos verbos HTTP — `GET`, `POST`, `PUT` e `DELETE` — enquanto mantém a organização dos recursos. Usei verbos HTTP `POST` para todas as minhas interações aqui no level 0 e 1, mas algumas pessoas usam `GETs` em vez ou adicionalmente. Nesses Níveis não fazem muita diferença, ambos estão sendo usados como mecanismos de tunelamento que permitem tunelar suas interações através do HTTP. O Nível 2 se afasta disso, usando os verbos HTTP o mais próximo possível de como eles são usados no próprio HTTP.

<div align="center">
	<img width="522" height="178" alt="image" src="https://github.com/user-attachments/assets/5a6da4cc-89f3-49f4-9889-f0bfcb391e36" />
	<p>Figura 4: Nível 2 verbos HTTP addes</p>
</div>

Para a lista de slots, isso significa que queremos usar GET.

```http
GET /doctors/mjones/slots?date=20100104&status=open HTTP/1.1
Host: royalhope.nhs.uk
```

A resposta é a mesma que teria sido com o `POST`

```xml
HTTP/1.1 200 OK
[various headers]

<openSlotList>
  <slot id = "1234" doctor = "mjones" start = "1400" end = "1450"/>
  <slot id = "5678" doctor = "mjones" start = "1600" end = "1650"/>
</openSlotList>
```

No Nível 2, o uso do `GET` para um pedido assim é Crucial. HTTP define `GET` como uma operação segura, ou seja, não define Faça qualquer mudança significativa no estado de qualquer coisa. Isso permite nós para invocar `GETs` com segurança qualquer número de vezes em qualquer ordem e obter Os mesmos resultados toda vez. Uma consequência importante disso é que permite que qualquer participante no roteamento de solicitações use cache, que é um elemento-chave para fazer a web funcionar igualmente E como acontece. HTTP inclui várias medidas para suportar cache em cache, que pode ser usado por todos os participantes na comunicação. Por seguindo as regras do HTTP, conseguimos aproveitar isso capacidade.

Para agendar uma consulta, precisamos de um verbo HTTP que realmente mude de estado, um `POST` ou um `PUT`. Vou usar o mesmo `POST` que usei antes.

```xml
POST /slots/1234 HTTP/1.1
[various other headers]

<appointmentRequest>
  <patient id = "jsmith"/>
</appointmentRequest>
```

As trocas entre usar `POST` e `PUT` aqui são maiores do que eu quero entrar aqui. Mas quero apontar que algumas pessoas estão erradamente faça uma correspondência entre POST/PUT e crie/atualize. O A escolha entre eles é bem diferente disso.

Mesmo que eu use o mesmo post do nível 1, tem outro diferença significativa na forma como o serviço remoto responde. Se todo Tudo bem, o serviço responde com um código de resposta `201` para Indique que existe um novo recurso no mundo.

```xml
HTTP/1.1 201 Created
Location: slots/1234/appointment
[various headers]

<appointment>
  <slot id = "1234" doctor = "mjones" start = "1400" end = "1450"/>
  <patient id = "jsmith"/>
</appointment>
```

A resposta `201` inclui um atributo de localização com um URI que o cliente pode usar para `GET` o estado atual desse recurso no futuro. A resposta aqui também inclui uma representação de esse recurso para poupar ao cliente uma ligação extra agora.

Há outra diferença se algo dá errado, como alguém que marca a sessão outra pessoa.

```xml
HTTP/1.1 409 Conflict
[various headers]

<openSlotList>
  <slot id = "5678" doctor = "mjones" start = "1600" end = "1650"/>
</openSlotList>
```

A parte importante dessa resposta é o uso de um HTTP Código de resposta para indicar que algo deu errado. Neste caso, um 409 parece uma boa escolha para indicar que outra pessoa já fez isso Atualizei o recurso de forma incompatível. Em vez de usar um retorno código `200`, mas incluindo uma resposta de erro, no nível 2 nós Use explicitamente algum tipo de resposta por erro assim. Depende de o projetista do protocolo para decidir quais códigos usar, mas lá Deveria ser uma resposta que não seja 2xx se surgir um erro. Nível 2 introduz o uso de verbos HTTP e códigos de resposta HTTP.

Há uma inconsistência surgindo aqui. Defensores do REST falam sobre usar todos os verbos HTTP. Eles também justificam essa abordagem dizendo que o REST está tentando aprender com o prático Sucesso da web. Mas a internet mundial não usa `PUT` nem `DELETE` muito na prática. Existem razões sensatas para o uso `PUT` e `DELETE` mais, mas a prova de existência da web não é uma deles.

Os elementos-chave que são apoiados pela existência do Web são a forte separação entre seguro (por exemplo, `GET`) e não seguro operações, juntamente com o uso de códigos de status para ajudar na comunicação Os tipos de erros que você encontra.

3. **Nível 3**: Incorpora Hypermedia ou <a href="https://en.wikipedia.org/wiki/HATEOAS">HATEOAS</a>, permitindo que as APIs forneçam links para recursos e ações relacionadas, melhorando a navegação e interação do usuário com a API. O nível final apresenta algo que você ouve com frequência referido sob o feio acrônimo HATEOAS (Hypertext As The Estado do Motor de Aplicação). Ele aborda a questão de como Passe de uma lista de vagas abertas para saber o que fazer para reservar um Compromisso.

<div align="center">
  <img width="546" height="255" alt="image" src="https://github.com/user-attachments/assets/99ef2886-0c37-495d-a79f-6c938533d814" />
  <p>Figura 5: Nível 3 adiciona controles de hipermídia</p>
</div>

O HATEOAS pode ser entendido como um **CRUD navegável via API**, onde o cliente não precisa conhecer previamente todos os endpoints nem os fluxos possíveis. A API responde com **dados + links de ações relacionadas**, e esses links dizem ao cliente *o que pode ser feito a seguir* dentro daquele estado do recurso.

Em vez do front-end “codar o caminho” (`/users → /users/{id} → /orders`), a própria API guia a navegação: criar, ler, atualizar, deletar, avançar de estado, voltar, cancelar, confirmar etc. Isso traz **flexibilidade**, porque você pode mudar URLs, versões ou até fluxos internos sem quebrar o cliente, desde que os links e relações semânticas continuem válidos.

> Então, numa frase curta e fiel à prática: **HATEOAS é REST tratando a API como um fluxo navegável de estados, não apenas como um conjunto fixo de endpoints CRUD.**

Começamos com o mesmo `GET` inicial que enviamos no nível 2

```http
GET /doctors/mjones/slots?date=20100104&status=open HTTP/1.1
Host: royalhope.nhs.uk
```

Mas a resposta tem um novo elemento

```xml
HTTP/1.1 200 OK
[various headers]

<openSlotList>
  <slot id = "1234" doctor = "mjones" start = "1400" end = "1450">
     <link rel = "/linkrels/slot/book" 
           uri = "/slots/1234"/>
  </slot>
  <slot id = "5678" doctor = "mjones" start = "1600" end = "1650">
     <link rel = "/linkrels/slot/book" 
           uri = "/slots/5678"/>
  </slot>
</openSlotList>
```

Cada slot agora possui um elemento link que contém um URI para informar Como agendar uma consulta.

O objetivo dos controles hipermídia é que eles nos dizem o que nós pode fazer em seguida, e o URI do recurso que precisamos manipular para Faça isso. Em vez de termos que saber onde postar nossa consulta solicitação, os controles de hipermídia na resposta nos dizem como fazer isso.

O `POST` copiaria novamente o do nível 2:

```xml
POST /slots/1234 HTTP/1.1
[various other headers]

<appointmentRequest>
  <patient id = "jsmith"/>
</appointmentRequest>
```

Portanto, ao contrário de outros tipos de APIs que exigem uma documentação externa ou um contrato pré-estabelecido, o **HATEOAS (Hypermedia as the Engine of Application State)** propõe um modelo onde as próprias respostas da API guiam o cliente em como navegar entre os recursos. Isso transforma a interação com a API em algo dinâmico e adaptável, eliminando a dependência de definições externas e oferecendo uma flexibilidade considerável aos desenvolvedores de aplicações cliente. 

> A pronúncia de HATEOAS varia bastante entre desenvolvedores. Algumas pessoas pronunciam algo parecido com “riteos”, enquanto outras utilizam “reitos” ou ainda “reidôs”. Alternativamente, o termo pode ser referido como um hypermedia-driven system (sistema dirigido por hipermídia).

O HATEOAS (Hypermedia as the Engine of Application State) é uma constraint arquitetural dentro do contexto de aplicações REST. Trata-se de uma característica que permite que uma API HATEOAS forneça informações que ajudam os clientes a navegar dinamicamente entre seus endpoints. Isso ocorre porque as respostas das APIs HATEOAS incluem links que apontam para outros recursos relacionados, o que diferencia este padrão de outras abordagens como os sistemas baseados em SOA (Service-Oriented Architecture) e em interfaces definidas por WSDL (Web Services Description Language). 

Nestes últimos, servidores e clientes geralmente precisam seguir uma especificação estática que pode estar hospedada em algum local externo à API ou mesmo distribuída via outros meios, como por e-mail ou por websites. Por outro lado, o uso de HATEOAS elimina a necessidade de uma especificação formal compartilhada previamente entre servidor e cliente. Isso acontece porque as informações necessárias para navegar pela API são fornecidas diretamente nas respostas, permitindo uma interação mais fluida e adaptável às mudanças na interface da API. A hipermídia como mecanismo de estado da aplicação é um princípio essencial que deve ser respeitado em APIs RESTful.

Na prática, isso significa que você pode navegar para os recursos referenciados sem um conhecimento mais profundo do sistema. Uma resposta típica contém seções de "links" para cada recurso, que pode ser um sub-recurso de um recurso pai ou qualquer outro recurso referenciado. Você pode usar links para trabalhar com esses recursos. Por exemplo, ao obter dados de pedidos de vendas, a resposta contém um campo de referência do cliente que contém uma seção de links. 

Você pode então usar o link para obter dados do cliente específico. Isso permite conectividade com as **paginações** (`Pagination`), pelo qual usa: `first`, `last`, `next` e `prev`. Em REST APIs, paginação é feita com *query parameters*, não com *path parameters*. Isso não é só convenção: é coerência semântica do HTTP e do próprio REST.

<table>
	<tr>
		<td><img src="https://github.com/user-attachments/assets/b3e9d65d-75e0-477c-bb04-9ee2bcb968cd" height="577"></td>
		<td><img src="https://github.com/user-attachments/assets/bc8738af-3d41-42c7-91c8-bdedac5dddfd" height="577"></td>
	</tr>
</table>

> Resumindo de forma direta: path params identificam recursos; query params controlam paginação, filtro, ordenação e forma de leitura. Se você colocar paginação no path, sua API até pode “funcionar”, mas ela vai contra o modelo mental do REST e contra a expectativa de quem consome APIs profissionalmente.

Paginação de Resultados: Este método é usado para otimizar grandes conjuntos de resultados, transmitindo-os de volta ao cliente, melhorando a capacidade de resposta ao serviço e a experiência do usuário.

Registro Assíncrono: Essa abordagem envolve enviar logs para um buffer sem bloqueio e retornar imediatamente, em vez de lidar com o disco em cada chamada. Os logs são periodicamente lavados para o disco, reduzindo significativamente a sobrecarga de I/O.

Cache de dados: Dados acessados com frequência podem ser armazenados em um cache para acelerar a recuperação. Os clientes verificam o cache antes de consultar o banco de dados, com soluções de armazenamento de dados como o Redis oferecendo acesso mais rápido devido ao armazenamento em memória.

Compressão de Payload: Para reduzir o tempo de transmissão de dados, requisições e respostas podem ser comprimidas (por exemplo, usando gzip), tornando os processos de upload e download mais rápidos.

Pooling de Conexões: Essa técnica envolve o uso de um conjunto de conexões abertas para gerenciar a interação com banco de dados, o que reduz a sobrecarga associada à abertura e fechamento de conexões sempre que dados precisam ser carregados. O pool gerencia o ciclo de vida das conexões para uso eficiente dos recursos.

1. Timeouts
2. Asynchronouns processing
3. Documentações
4. Utilizar SSL
5. Versionamento
6. Teste e validação
7. Self-service
8. Divulgação
9. Exportações
10. I18n / Globalization
11. Notificações
12. Limite de campos
13. Monitore sua API
14. Selecione a sua tecnologia adequada
15. etc.

O *path* identifica o recurso. Quando você escreve `/users/123`, está dizendo “o usuário de id 123”. Já a paginação não muda o recurso, muda apenas como ele é apresentado ou qual subconjunto você quer receber. Isso coloca paginação claramente na categoria de parâmetros de consulta, junto com filtros, ordenação e projeção de campos.

Por isso, o padrão correto e amplamente aceito é algo como `/users?page=2&size=50`, `/users?offset=100&limit=50` ou `/users?cursor=abc123`. Em todos esses casos, o recurso continua sendo “a coleção de usuários”; o que muda é a forma como você está navegando por essa coleção. Usar o path para isso, como `/users/page/2`, acaba misturando navegação com identidade de recurso e quebra a legibilidade semântica da API.

Existem estilos diferentes de paginação, mas todos ficam no **query string**. A paginação por página e tamanho (`page` e `size`) é simples e muito comum, embora possa ter problemas de performance em bases grandes. A paginação por deslocamento (`offset` e `limit`) é parecida, mas mais explícita em termos de custo. A paginação por cursor (`cursor`, `after`, `before`) é hoje a mais robusta para sistemas grandes e distribuídos, e ainda assim continua sendo feita via query params, justamente porque representa um critério de consulta, não um recurso novo.

Em APIs bem desenhadas, você também costuma ver paginação combinada com **links HATEOAS**, onde a resposta traz URLs completas para `next`, `prev`, etc., e esses links também usam query params. Isso reforça ainda mais a ideia de que paginação é uma preocupação de consulta, não de estrutura do recurso.

Exemplos: Vamos ilustrar o conceito com um exemplo simples. A seguir, temos uma classe `Cliente` escrita em Java.

[![index.js](https://img.shields.io/badge/-Cliente.java-fff?style=social&logo=OpenJDK&logoColor=chocolate)](#)

```java
class Cliente {
    String nome;
}
```

Em uma representação JSON tradicional, o objeto gerado a partir dessa classe seria algo como:

[![index.js](https://img.shields.io/badge/-POST-fff?style=social&logo=JSON&logoColor=gray)](#)

```json
{
  "nome" : "Leandro"
}
```

É importante documentar como a busca deve ser realizada para que os consumidores da API saibam como utilizá-la corretamente. Esse tipo de parâmetro é muito utilizado por websites na web para filtrar conteúdos.

Agora, vamos ver um exemplo do formato de uma mensagem de resposta HTTP, é o seguinte:

![image](https://github.com/user-attachments/assets/faf01d10-4688-477f-99e6-29cf829c7a4e)

Normalmente, quando uma aplicação via API REST com a URI definida para consumir outra aplicação, geralmente, isso é uma API fornecida por equipes de desenvolvimento de um produto empresarial (Third-party - terceiros) que fornece para empresas que necessitam fazer a integração para seu setor de produtos comerciais, aparecerá no seguinte formato:

[![index.js](https://img.shields.io/badge/-GET-fff?style=social&logo=JSON&logoColor=gray)](#)

```http
GET /oauth2/authorize?client_id={client_id}&response_type=code&redirect_uri={redirect_uri}&scope={scope}&prompt=login HTTP/1.1
Host: id.btgpactual.com
```

Praticamente, todos os third-parties (aplicações de terceiros) que oferecem soluções de APIs, webhooks ou SDKs, necessitam que empresas possuam as credenciais de parceiros, com isso, fornecerá o ID para cadastro de parceiro, fornecendo a autenticação e autorização desse produto. Eles também oferem suporte a essas ofertas, e um ambiente de sandbox, para realizar testes e integrações com a solução deles.

<img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg" align="right" height="77">

Vamos pegar um exemplo de API, com a <a href="">APIBrasil</a>, essa é uma API de nível paga, muito utilizada pelas empresas para coletar e manipular dados relacionados a nação brasileira, os tipos de dados são diversos, no caso, vamos utilizar somente os dados de veículos registrados da APIBrasil. Os tipos válidos são: `estadual`, `estadual-rs`, `crlv-sp`, `crlv-mg`, `buscar-veiculo-pf`, `agregados-basica`, `agregados-propria`, `fipe`, `proprietario-atual`, `nacional`, `gravame`, `renajud`, `leilao`, `roubo-furto`, `renainf`, `placa`, etc. Lembrando, não pode esquecer de passar o Token do tipo Bearer, caso contrário resultará em erro de autorização para realizar a requisição.

Exemplo: Solicitando os dados a partir da `placa` e `tipo` do veículo para a APIBrasil do método `POST` com o Host (https://gateway.apibrasil.io/api/v2/vehicles/base/001/consulta), com ela queremos somente consultar as infrações.

```json
{
    "placa": "RJI4A62",
    "tipo": "renainf"
}
```

<a href=""><img src="https://cdn.worldvectorlogo.com/logos/openapi-1.svg" align="right" height="77"></a>

Além disso, o **contrato de uma API** é o acordo formal e explícito que define como a comunicação entre um cliente e um serviço deve acontecer. Esse contrato especifica os detalhes sobre quais endpoints estão disponíveis, quais métodos HTTP devem ser usados (`GET`, `POST`, `PUT`, `DELETE` etc.), quais parâmetros são esperados na requisição, quais tipos de dados devem ser enviados ou recebidos (geralmente em JSON ou XML), quais respostas são possíveis (status codes e estrutura dos dados de retorno) e quais erros podem ocorrer e como tratá-los. Em outras palavras, é como se fosse um “manual” que descreve exatamente como conversar com a API, o que ela espera e o que ela promete entregar em troca.

Esse contrato pode ser documentado de forma mais técnica e formal com ferramentas como Swagger/OpenAPI, Postman ou RAML, que ajudam a padronizar e validar a comunicação entre quem consome a API e quem a desenvolve. Ele é essencial para garantir que os dois lados  cliente e servidor  estejam alinhados, mesmo sendo desenvolvidos por times diferentes, ou em momentos diferentes. Se o contrato mudar de forma inesperada, por exemplo, se um campo obrigatório deixar de ser enviado ou se o formato de resposta mudar sem aviso, isso pode causar falhas graves em produção. Por isso, respeitar e manter esse contrato atualizado é fundamental para a confiabilidade de sistemas distribuídos. Em APIs bem estruturadas, o contrato é considerado uma parte central da arquitetura, e muitas vezes ele é definido antes mesmo da implementação real do serviço.

Ferramentas de contratos de API são utilizadas para definir, documentar, validar e manter contratos claros entre os sistemas que consomem e os que fornecem serviços via API. Essas ferramentas ajudam a garantir que todas as partes envolvidas entendam o formato esperado das requisições e respostas, além de possibilitarem testes, versionamento e validação automática. 

- Dentre as mais conhecidas está o Swagger (ou OpenAPI), que permite descrever a estrutura da API de forma interativa, gerando documentação dinâmica e facilitando tanto o desenvolvimento quanto a integração.
- O Postman também evoluiu além de uma simples ferramenta de testes e hoje permite definir contratos, validar esquemas e simular ambientes.
- Outra ferramenta relevante é o Stoplight, que fornece uma interface visual poderosa para modelagem de APIs baseada em OpenAPI, facilitando a colaboração entre desenvolvedores e analistas.
- O Pact é bastante usado no contexto de testes de contrato, especialmente em arquiteturas de microserviços, onde garante que os serviços consumidores e provedores permaneçam compatíveis.
- Ferramentas como o GraphQL SDL (Schema Definition Language) são importantes quando se trata de GraphQL, pois permitem declarar com precisão o contrato da API através de tipos, consultas e mutações.
- Há também o AsyncAPI, voltado para contratos de APIs orientadas a eventos, como em sistemas que usam mensageria.
- Em ambientes corporativos mais robustos, soluções como o Apigee, da Google, e o AWS API Gateway também oferecem suporte à definição e gerenciamento de contratos, além de políticas de segurança, throttling e analytics.

Todas essas ferramentas têm como objetivo principal a padronização e previsibilidade das comunicações entre sistemas, reduzindo falhas e retrabalho ao longo do ciclo de vida da API.

<table>
	<tr>
		<td><img height="577" src="https://github.com/user-attachments/assets/0d2d9870-7e91-4783-b113-1aee0cec2917"></td>
		<td><img height="577" src="https://github.com/user-attachments/assets/d6828d23-3b82-4c89-a65f-1e0839ac77bb"></td>
		<td><img height="577" src="https://github.com/user-attachments/assets/e63df0d8-3504-4766-839c-ae8281babfc9"></td>
	</tr>
</table>

HTTP `GET`: Isso recupera um recurso do servidor. É idempotente. Múltiplas solicitações idênticas retornam o mesmo resultado.

HTTP `PUT`: Isso atualiza ou cria um recurso. É idempotente. Múltiplas requisições idênticas atualizam o mesmo recurso.

HTTP `POST`: Este é usado para criar novos recursos. Não é idempotente, fazer dois POSTS idênticos duplicará a criação de recursos.

HTTP `DELETE`: Isso é usado para excluir um recurso. É idempotente. Múltiplas requisições idênticas vão apagar o mesmo recurso.

HTTP `PATCH`: O método PATCH aplica modificações parciais a um recurso.

HTTP `HEAD`: O método HEAD pede uma resposta idêntica à de uma requisição GET, mas sem o corpo da resposta.

HTTP `CONNECT`: O método CONNECT estabelece um túnel para o servidor identificado pelo recurso alvo.

`OPTIONS`: HTTP Descreve as opções de comunicação para o recurso alvo.

HTTP `TRACE`: Realiza um teste de loop-back de mensagem ao longo do caminho até o recurso alvo.

Você pode documentar APIs manualmente ou usar uma ferramenta de documentação para isso. A API tem especificações para cada tipo de API. Para APIs REST, há a Especificação de API Aberta e, para APIs GraphQL, há uma Linguagem de Definição de Esquema.

Criar documentação de API manualmente é tedioso. É melhor gerar automaticamente seus documentos de API usando ferramentas de documento de API. Essas ferramentas de API podem projetar sua documentação e torná-la mais apresentável e atraente para seus leitores.

Existem tantas ferramentas disponíveis para documentação de API. Por que você precisa de ferramentas de documentação de API? A necessidade de documentação de APIs surge da complexidade natural de qualquer API, especialmente em sistemas que crescem, evoluem e envolvem múltiplos times, integrações externas ou ciclos longos de manutenção. O Swagger, na prática, resolve três grandes dores no desenvolvimento de APIs: **comunicação**, **padronização** e **usabilidade**.

As ferramentas de documentação de API visam acelerar o processo de documentação. Eles podem gerar documentação a partir de uma API, tornando mais rápido para você documentar suas APIs com eficiência e acompanhar as alterações nas APIs.

- Essas ferramentas ajudam a organizar e estruturar a documentação, tornando mais fácil para os escritores escreverem sua documentação de forma clara e lógica.
- Cada documento de API precisa estar atualizado para que essas ferramentas forneçam recursos que registram e atualizam as alterações e também promovem a colaboração.
- Eles fornecem recursos de design para estilizar a interface do usuário da documentação. O que melhora a experiência do usuário para desenvolvedores que lêem os documentos.
- As ferramentas de documentação da API podem fornecer exemplos ou casos de uso com base em cenários da vida real da API para ajudá-lo a escrever melhor.
- Geralmente, essas ferramentas facilitam a criação de documentação organizada pelos escritores. Eles também facilitam o uso eficaz de APIs por desenvolvedores, gerentes de produto e outros membros da equipe.

1. Primeiro, há a questão da **comunicação**. APIs são contratos entre partes: um desenvolvedor cria e outro consome. Sem uma documentação clara e atualizada, quem consome a API fica perdido — não sabe quais endpoints existem, quais parâmetros são obrigatórios, que tipo de resposta esperar ou quais erros podem ser retornados. O Swagger atua como uma documentação viva e interativa que descreve esses contratos de forma automática e precisa. Isso evita retrabalho, reduz o tempo gasto com dúvidas e garante que a comunicação entre back-end, front-end e serviços externos ocorra sem ruído.

2. Depois vem a **padronização**. O Swagger segue a **especificação OpenAPI**, um padrão amplamente aceito que define como descrever endpoints REST, métodos HTTP, schemas de dados e respostas. Essa padronização torna o comportamento das APIs previsível e consistente, o que é essencial quando várias equipes trabalham sobre o mesmo ecossistema. Além disso, permite a integração com ferramentas automatizadas — por exemplo, gerar clientes e SDKs automaticamente em diversas linguagens, validar requisições e respostas, ou até criar testes automáticos baseados na documentação.

3. Por fim, o Swagger cumpre uma função crucial de **usabilidade e confiabilidade**. Ao transformar a documentação em uma interface interativa — via Swagger UI — ele possibilita que qualquer pessoa teste endpoints em tempo real, veja exemplos de payloads e entenda as regras da API sem precisar abrir o código-fonte. Isso acelera o processo de onboarding de novos desenvolvedores e reduz drasticamente erros de integração, já que tudo o que o consumidor precisa está documentado de forma executável e atualizada.

Em resumo, o Swagger é necessário porque torna o desenvolvimento e o consumo de APIs mais **transparentes, consistentes e ágeis**. Ele elimina ambiguidades, reforça boas práticas de design e permite que a documentação não seja um documento estático esquecido no repositório, mas uma parte viva do ciclo de desenvolvimento. Sem o Swagger (ou uma ferramenta similar), o entendimento das APIs depende de conhecimento oral ou de leitura de código, o que não escala e compromete tanto a manutenção quanto a segurança de um sistema em produção. Além do Swagger existem outros como: Postman, Readme, Stoplight, Redocly e Document360.

Existem outras ferramentas que você pode usar para testar a documentação da API em relação à resposta da API, e elas são Dredd, Cherrybomb e assim por diante.

<a href="https://medium.com/@ezinneanne/how-to-automate-api-documentation-updates-with-github-actions-and-openapi-specifications-d78317d2f9f5"><img src="https://user-images.githubusercontent.com/25181517/186711335-a3729606-5a78-4496-9a36-06efcc74f800.png" align="right" height="77"></a>

O **Swagger** é um conjunto de ferramentas e especificações que ajudam a desenvolver, documentar, testar e consumir APIs RESTful. O Swagger pode ser utilizado tanto em desenvolvimento quanto em produção, mas é comum mantê-lo habilitado apenas em ambientes de desenvolvimento e testes para evitar exposição desnecessária da documentação da API em produção. 

Isso geralmente é feito por motivos de segurança, já que o Swagger fornece uma interface para interagir diretamente com os endpoints da API, o que pode expor funcionalidades e dados se acessado publicamente. Então, ele é amplamente utilizado para facilitar a criação de APIs de maneira mais eficiente, fornecendo uma forma estruturada de descrever os endpoints de uma API e suas funcionalidades.

O Swagger (e o OpenAPI) simplifica o desenvolvimento, documentação, e consumo de APIs RESTful, fornecendo um padrão amplamente adotado que aumenta a eficiência dos desenvolvedores. Ele facilita a criação de APIs robustas e bem documentadas, tanto para uso interno quanto para expor suas APIs a terceiros.

O coração do Swagger é a **Especificação OpenAPI** (anteriormente chamada de **Swagger Specification**). Esta é uma maneira padronizada de descrever uma API RESTful. Ela define, em um formato legível por máquinas e humanos (geralmente YAML ou JSON), todos os detalhes de uma API, incluindo:

   - Endpoints disponíveis (URLs)
   - Métodos HTTP (`GET`, `POST`, `PUT`, `DELETE`, etc.)
   - Parâmetros de entrada (query strings, headers, body)
   - Modelos de dados (objetos e seus atributos)
   - Respostas esperadas (incluindo códigos de status HTTP e payloads)
   - Autenticação necessária

O **Swagger UI** é uma ferramenta que gera uma interface gráfica e interativa para testar e explorar APIs diretamente no navegador. Quando você define sua API usando a especificação Swagger (ou OpenAPI), o Swagger UI transforma essa definição em uma documentação interativa, permitindo que desenvolvedores e usuários:

   - Visualizem a documentação de forma organizada e intuitiva.
   - Testem as rotas da API, enviando requisições diretamente da interface do Swagger.
   - Compreendam rapidamente como a API funciona, sem necessidade de explorar o código.

Por exemplo, se você hospedar sua API com Swagger, qualquer pessoa pode ver a documentação e fazer chamadas diretamente do navegador.

O **Swagger Editor** é uma ferramenta que permite criar, editar e visualizar definições de API no formato OpenAPI (Swagger) diretamente em um ambiente de edição online. O editor facilita o desenvolvimento da documentação de APIs e valida automaticamente o que está sendo escrito, garantindo que a definição da API esteja correta.

O **Swagger Codegen** permite a geração automática de código cliente e servidor em várias linguagens de programação com base na definição da API em Swagger. Isso significa que, a partir de uma definição Swagger, você pode gerar:

   - Um cliente que consome sua API (em várias linguagens, como Java, Python, Ruby, etc.)
   - Um servidor esqueleto que implementa os endpoints definidos (também em várias linguagens e frameworks)

O termo **Swagger** era utilizado inicialmente para descrever tanto a ferramenta quanto a especificação de APIs RESTful. No entanto, após a evolução da tecnologia, a especificação foi renomeada para **OpenAPI Specification** (OAS) a partir da versão 3.0, enquanto o termo "Swagger" passou a ser utilizado para descrever o conjunto de ferramentas (como Swagger UI, Editor, e Codegen) que suportam o OpenAPI.

6. **Benefícios do Swagger**:

- **Documentação clara e interativa**: APIs são automaticamente documentadas de forma compreensível e interativa, facilitando o uso por outros desenvolvedores.
- **Testes facilitados**: Através da interface do Swagger UI, é possível testar chamadas de API diretamente sem precisar de ferramentas externas.
- **Padronização**: Ao adotar o Swagger/OpenAPI, você cria APIs consistentes e bem definidas, seguidas por convenções aceitas na indústria.
- **Geração automática de código**: Isso economiza tempo e reduz erros manuais ao gerar clientes ou servidores para a API.

Exemplo de uma Definição Swagger (OpenAPI): Aqui está um exemplo básico de uma definição Swagger em YAML.

```yaml
openapi: 3.0.0
info:
  title: API de Exemplo
  version: 1.0.0
paths:
  /usuarios:
    get:
      summary: Retorna todos os usuários
      responses:
        '200':
          description: Sucesso
          content:
            application/json:
              schema:
                type: array
                items:
                  type: object
                  properties:
                    id:
                      type: integer
                    nome:
                      type: string
```

Esse exemplo define um endpoint `/usuarios` que usa o método `GET` para retornar uma lista de usuários, representada como um array de objetos JSON.

Vamos aprender como aplicar Comentários no Swagger com C# .Net, é uma configuração relativamente simples e achei interessante mencionar em um artigo porque os comentários em uma API adiciona valor e entendimento para stakeholders, no meu caso foi um pedido do QA, por se tratar de uma API com muitas regras ele me pediu para adicionar comentários no Swagger para facilitar a vida dele nas buscas e no entendimento.

1. Primeiro Passo: habilitar a geração de arquivo xml com os comentários na API, esta configuração faz com que ao executar o build da aplicação ele gere um arquivo .xml com todos os comentários, vamos usar este arquivo para exibir os comentários na tela do Swagger.

2. Visual Studio: Para habilitar a geração deste arquivo no Visual Studio, precisa acessar a janela de `Projeto > [nome do projeto] > propriedades`, seu Projeto API, no campo de busca da tela de propriedades: Escreva “Doc”, ele deve retornar a opção “Documentation File”:

![image](https://github.com/user-attachments/assets/3c3cac67-52e0-41c6-a1e5-5edc6195d7c4)

Você pode configurar um caminho pro arquivo XML como pode usar o caminho padrão onde ele vai gerar no build um arquivo XML (recomendado) com o nome do projeto da API. Ex: obj\Debug\net7.0\NomeCompania.NomeProjeto.API.xml

Visual Studio Code: Para habilitar a geração deste arquivo no Visual Studio Code (caso não use Visual Studio), precisa acessar o arquivo `.csproj` da API adicione dentro da tag `<PropertyGroup></PropertyGroup>` a configuração `<GenerateDocumentationFile>True</GenerateDocumentationFile>`:

![image](https://github.com/user-attachments/assets/50c1587d-5cb2-4f33-b6e2-bcdd5aadf800)

Segundo Passo: Adicionar a referencia do arquivo XML gerado na configuração do Swagger, dentro do `services.AddSwaggerGen` adicione o código abaixo:

![image](https://github.com/user-attachments/assets/3f418d10-ba32-40a1-af83-07130018a02c)

Além da glória do rest, vamos dizer que você queira monetizar o sistema de uma API, imagine que você desenvolveu uma API para converter PDFs, PNGs, JPEGs, SVGs. Daí, você expõe ela de forma amigável, dentro de um site, e você não quer expor ela para que alguém derrube. Se reparar no ChatGPT, eles limitam o número de requisições na aplicação a partir do plano free, mais do que isso é pago, sem isso você não obterá resposta.

![unnamed](https://github.com/user-attachments/assets/d74fb525-ad26-4497-870b-6827d0f16e24)

<img width="540" height="381" alt="Captura de tela 2025-12-22 133017" src="https://github.com/user-attachments/assets/b556b9a2-0db2-4a8c-9fe9-0b32847af058" />

https://medium.com/api-center/api-design-practice-7fce69e6336c

![rf3ew](https://github.com/user-attachments/assets/bf000f52-a6b5-47c5-9d2a-35e10e21a638)

- Use HTTPS
- Use OAuth2
- Use WebAuthn
- Use chaves de API niveladas
- Autorização
- Limitação de Taxa
- Versionamento de API
- Lista branca
- Verifique os riscos de segurança da API OWASP
- Use API Gateway
- Tratamento de Erros
- Validação de Entrada

Podemos encontrar serviços web e APIs (Interfaces de Programação de Aplicações) em qualquer lugar, mas muitos são difíceis de usar. Você já conectou um serviço web usando a API dele e se perguntou: "O que eles estavam pensando?" Já fizemos, e conectar serviços via API pode ser confuso. Seja por design ruim, documentação ausente, mudanças constantes ou bugs, usar APIs costuma ser uma luta.

Mas não precisa ser assim. Podemos criar APIs web fantásticas que as pessoas adoram usar, e também vamos gostar de fazê-las. Então, qual é a chave para projetar uma boa API? Essa edição compartilha os segredos, guiando-nos na criação de uma API limpa, bem documentada e fácil de usar.

Prepare-se, e vamos entender como projetar uma API que as pessoas gostem de usar.

A Importância de um Bom Design de APIs
APIs são ativos cruciais para as empresas. Os clientes não usam APIs de forma casual – eles investem tempo e dinheiro em integrá-las, programar e aprender sobre elas. No entanto, depender tanto de APIs traz desafios. O custo de descontinuar o uso de uma API pode ser substancial, mostrando o papel crítico que as APIs desempenham nas operações.

APIs públicas bem projetadas têm grande potencial para atrair e reter usuários. No entanto, um design ruim da API pode causar rapidamente problemas – como uma enxurrada de chamadas de suporte de uma API disfuncional. Isso pode transformar os maiores ativos digitais de uma empresa em dores de cabeça.

Essa natureza dupla das APIs aponta para a importância do cuidado e da precisão ao projetá-las. O objetivo é criar APIs que ofereçam mais benefícios do que desvantagens.

Quando construímos produtos, geralmente pensamos em pessoas comuns sem muita experiência técnica. Criamos uma interface amigável, recebendo opiniões sobre o que eles querem. Mas o desenvolvimento de API é diferente – estamos criando uma interface para programadores habilidosos. Eles percebem até mesmo pequenos problemas e podem ser tão críticos quanto nós seríamos assim.

Nossa perspectiva como designers de APIs é um pouco distinta da dos usuários. Focamos no que uma API deve fazer ou oferecer. Enquanto isso, os usuários se preocupam em conseguir facilmente o que precisam com o mínimo de esforço. Esses pontos de vista diferentes causam problemas. O segredo é mudar nosso ponto de vista para corresponder ao do usuário. Parece óbvio, mas poucas APIs adotam essa abordagem centrada no usuário.

Características de uma boa API
Uma API de qualidade possui várias características que contribuem para sua eficácia, usabilidade e sucesso a longo prazo:

![unnamed](https://github.com/user-attachments/assets/2728e5cb-e252-45ce-8c0e-c82eb14d0fa9)

Agora que já abordamos o que faz uma boa API, vamos passar para dicas para projetar uma.

Coleta de Requisitos
O primeiro passo vital para projetar uma API de qualidade é coletar requisitos dos usuários. Encare esse processo com ceticismo. Os usuários frequentemente sugerem soluções específicas em vez de focar em suas necessidades subjacentes.

Nosso trabalho é fazer com que os usuários nos guiem pelos casos de uso centrais para descobrir essas necessidades fundamentais, mesmo quando ocultas à primeira vista. Pode haver ideias de design melhores escondidas por trás das "soluções" iniciais sugeridas.

Além disso, é empolgante imaginar APIs muito versáteis que enfrentam uma grande variedade de desafios. Mas precisamos manter o foco absoluto nas necessidades reais dos usuários primeiro.

Comece o processo de projeto elaborando uma especificação funcional de alto nível. Velocidade e flexibilidade são mais importantes do que detalhes abrangentes neste estágio experimental inicial.

Compartilhe o rascunho amplamente, tanto com usuários-alvo quanto com outros stakeholders. Ouça atentamente o feedback, pois provavelmente haverá insights valiosos sobre como moldar uma oferta refinada.

O segredo é não fazer muitas suposições logo no início. A coleta de requisitos estabelece a base – tire um tempo para acertar antes de passar para o design formal da API.

Uma API, Um Propósito
Uma regra fundamental para projetar APIs excelentes é que cada uma deve focar diretamente em resolver um problema principal muito bem, em vez de tentar resolver muitas questões diversas.

Criar uma API geral de "canivete suíço" tentando cobrir muitos casos de uso frequentemente falha. O escopo fica muito disperso sem um propósito nítido e único atrelado às necessidades específicas do usuário. Tentar ser tudo para todos resulta em funcionalidades superficiais.

Em vez disso, limite o escopo de cada API que construímos. Garanta que o propósito fique claro e focado. Alinhe todas as capacidades diretamente ao objetivo de atender a uma necessidade distinta do usuário. Qualquer coisa periférica deve ser removida.

Por exemplo, uma API focada exclusivamente na validação de endereços tem um propósito claro. Uma centrada exclusivamente em transações com cartão de crédito define funcionalidades diferentes, mas ainda assim restritas.

Clareza e Consistência
Vamos explorar algumas práticas eficazes de nomeação e respostas padronizadas que contribuem para a clareza e consistência geral de uma API.

Escolhendo nomes intuitivos
Ao projetar uma boa API, a clareza começa com os nomes que escolhemos para endpoints e recursos. Adotar e aplicar convenções de nomenclatura de forma consistente permite que os desenvolvedores entendam intuitivamente a API, como se falasse uma língua comum. Por exemplo, usar a convenção RESTful para endpoints como "/users" para recuperar informações do usuário está alinhado com os padrões da indústria. Isso ajuda os desenvolvedores a entender o propósito dos endpoints sem excesso de documentação.

![unnamed](https://github.com/user-attachments/assets/5fc7a8fc-446d-4030-a860-f4ec49475914)


<table>
  <tr>
    <td><img width="720" height="949" alt="Screenshot_20240626-133353_Instagram" src="https://github.com/user-attachments/assets/c5f2916e-c4f7-46f5-860d-1cdd5da0d51a" /></td>
    <td><img width="720" height="906" alt="Screenshot_20241114-063818_Instagram" src="https://github.com/user-attachments/assets/2ce85867-496e-44ec-ba23-b49ca49f6d6c" /></td>
    <td><img width="720" height="918" alt="Screenshot_20250102-225833_Instagram" src="https://github.com/user-attachments/assets/0f443edb-beed-48d1-ba47-6a6de0eccd5c" /></td>
    <td><img width="720" height="825" alt="Screenshot_20240820-145337_Instagram" src="https://github.com/user-attachments/assets/2efb31d7-c51e-4c63-9c5b-f49e259ddaca" /></td>
    <td><img width="720" height="936" alt="FB_IMG_1728079729825" src="https://github.com/user-attachments/assets/fc9fb0b7-c1c5-4fc9-82a0-88a251bf48fc" /></td>
    <td><img width="720" height="904" alt="Screenshot_20240618-224002_Instagram" src="https://github.com/user-attachments/assets/d2955e62-42cc-43d8-bc3e-986919988bf8" /></td>
  </tr>
</table>

Código de status HTTP que você deveria conhecer

<img width="1206" height="1166" alt="unnamed" src="https://github.com/user-attachments/assets/c5ee79b7-88ae-47a0-9a87-ae66e9a106e3" />

Os códigos de resposta para HTTP são divididos em cinco categorias:

Informacional (100-199)
Sucesso (200-299)
Redirecionamento (300-399)
Erro do Cliente (400-499)
Erro do Servidor (500-599)

Esses códigos são definidos no RFC 9110. Para evitar que você lea o documento inteiro (que tem cerca de 200 páginas), aqui está um resumo dos mais comuns:

Deixa a palavra para você: o código de status HTTP 401 é para Não Autorizado. Você pode explicar a diferença entre autenticação e autorização, e qual deles o código 401 verifica?

<img width="1272" height="1036" alt="unnamed" src="https://github.com/user-attachments/assets/c5ec0ec2-39cb-44fc-944d-c965caef7aeb" />
<img width="550" height="684" alt="unnamed" src="https://github.com/user-attachments/assets/816e8ba9-b462-4103-b9b3-120df5b9e502" />

<table>
  <tr>
    <td><img width="1100" height="1283" alt="unnamed" src="https://github.com/user-attachments/assets/637b9747-af12-4d1f-9e0b-7376024ad5f7" /></td>
    <td><img width="550" height="645" alt="unnamed" src="https://github.com/user-attachments/assets/80d01068-a14b-4546-96d7-7cd82e832763" /></td>
  </tr>
</table>

<img width="1559" height="1536" alt="unnamed" src="https://github.com/user-attachments/assets/5877579c-b198-4c42-902e-6deed5c61635" />

> Versículo chave: "Consagre ao Senhor tudo o que você faz, e os seus planos serão bem-sucedidos." - Provérbios 16:3

APIs são a espinha dorsal das aplicações modernas. Elas expõem uma área de superfície muito grande para ataques, aumentando o risco de vulnerabilidades de segurança. Ameaças comuns incluem injeção SQL, scripts cross-site e ataques de negação de serviço distribuída (DDoS).

Por isso, é crucial implementar medidas de segurança robustas para proteger as APIs e os dados sensíveis que elas lidam. No entanto, muitas empresas têm dificuldades para alcançar uma cobertura abrangente de segurança da API. Elas frequentemente dependem exclusivamente da varredura dinâmica de segurança de aplicações ou do pen testing externo. Embora esses métodos sejam valiosos, eles podem não cobrir totalmente a camada da API e sua crescente superfície de ataque.

Na edição desta semana, vamos explorar as melhores práticas de segurança de APIs. Desde autenticação e autorização até comunicação segura e limitação de taxas, abordaremos estratégias essenciais para projetar APIs seguras.

A Fundação da REST API: HTTP
<img width="1348" height="1097" alt="unnamed" src="https://github.com/user-attachments/assets/ece0f685-a166-4fdf-8277-714dfb951169" />

Nesta edição, vamos aprofundar a base da comunicação de dados para a World Wide Web - HTTP.

O que é Hypertext?
HTTP, ou HyperText Transfer Protocol, deve seu nome a 'hipertexto'.

Então, o que exatamente é hipertexto?

Imagine uma mistura de texto, imagens e vídeos costurados pela magia dos hiperlinks. Esses links funcionam como portais que nos permitem pular de um conjunto de hipertexto para outro. HTML, ou Linguagem de Marcação de Hipertexto, é um exemplo perfeito de hipertexto.

HTML é um arquivo de texto simples. Ele está repleto de muitas tags que definem links para imagens, vídeos e mais. Depois que o navegador interpreta essas tags, ele transforma o arquivo de texto aparentemente comum em uma página web cheia de texto e imagens.

HTTP/1.1, HTTP/2 e HTTP/3
O HTTP passou por transformações significativas desde sua criação em 1989 com a versão 0.9. Vamos dar uma volta na memória e ver os problemas que cada versão do HTTP aborda. O diagrama abaixo mostra as principais melhorias.

HTTP/1.0 foi finalizado e formalmente documentado em 1996. Essa versão tinha uma limitação de chave: cada requisição para o mesmo servidor exigia uma conexão TCP separada.

O HTTP/1.1 chegou em seguida, em 1997. Introduziu o conceito de 'conexão persistente', o que significa que uma conexão TCP poderia ser deixada aberta para reutilização. Apesar dessa melhoria, o HTTP/1.1 não conseguiu resolver o problema do bloqueio 'Head-of-Line' (HOL). Em termos simples, o bloqueio HOL ocorre quando todos os slots paralelos de requisição em um navegador são preenchidos, forçando as requisições subsequentes a aguardarem até que as anteriores estejam concluídas.

HTTP/2.0, publicado em 2015, buscou resolver a questão do bloqueio HOL. Implementou o 'multiplexamento de requisição', uma estratégia para eliminar o bloqueio HOL na camada de aplicação. Como ilustrado no diagrama abaixo, o HTTP/2.0 introduziu o conceito de 'fluxos' HTTP. Essa abstração permite a multiplexação de diferentes trocas HTTP na mesma conexão TCP, nos libertando da necessidade de enviar cada fluxo em ordem. No entanto, o bloqueio HOL ainda poderia ocorrer na camada de transporte (TCP).

O HTTP/3.0 fez sua estreia com um rascunho publicado em 2020. Posicionado como sucessor do HTTP/2.0, ele substitui o TCP pelo QUIC como protocolo de transporte subjacente. Isso elimina efetivamente o bloqueio HOL na camada de transporte. O QUIC é baseado no UDP. Ele introduz os fluxos como cidadãos de primeira classe na camada de transporte. Os fluxos QUIC compartilham a mesma conexão QUIC, não exigindo apertos de mão adicionais ou iniciações lentas para criar novas. Os fluxos QUIC são entregues de forma independente. Isso significa que, na maioria dos casos, a perda de pacotes em um fluxo não impacta outros.

<img width="1348" height="1097" alt="unnamed" src="https://github.com/user-attachments/assets/4a4570f6-bd0b-4113-8593-ade2c476ac4d" />

Cabeçalhos HTTP
Cabeçalhos HTTP desempenham um papel crucial em como clientes e servidores enviam e recebem dados. Eles fornecem uma forma estruturada para que essas entidades comuniquem metadados importantes sobre a solicitação ou resposta. Esses metadados podem conter várias informações, como o tipo de dado enviado, seu comprimento, como são comprimidos e mais.

Um cabeçalho HTTP consiste em vários campos, cada um com um papel e significado específicos. Agora que entendemos o que são cabeçalhos HTTP, vamos nos aprofundar em alguns campos HTTP específicos.

Campos HTTP
Quando enviamos requisições HTTP para um servidor, vários campos comuns desempenham um papel crítico. Vamos dissecar alguns deles.

Host: Este é o nome de domínio do servidor.

Comprimento do Conteúdo: Este campo no cabeçalho da requisição ou resposta desempenha um papel crucial na transferência de dados. Ele indica especificamente o tamanho do corpo da solicitação ou resposta em bytes. Isso ajuda o receptor a entender quando a mensagem atual termina e potencialmente se preparar para a próxima, especialmente em casos em que múltiplas mensagens HTTP estão sendo enviadas pela mesma conexão.

Conexão: Este campo é crucial em conexões HTTP persistentes, onde uma única conexão TCP é usada para enviar e receber múltiplas requisições e respostas HTTP. Discutiremos isso com mais detalhes.

Tipo de conteúdo: Este campo informa ao cliente o formato dos dados que está recebendo.

Codificação de conteúdo: Este campo indica o formato de compressão usado para os dados. Por exemplo, se o cliente vê codificação 'gzip', ele sabe que precisa descomprimir os dados.

<img width="1298" height="1600" alt="unnamed" src="https://github.com/user-attachments/assets/c6f283f6-b36d-4c3b-a5c2-663765921e6b" />

HTTP GET vs HTTP POST
Os protocolos HTTP definem vários métodos ou 'verbos' para realizar diferentes ações em recursos web. Os mais usados são GET, POST, PUT e DELETE, que são frequentemente usados para ler, criar, atualizar e excluir recursos. Métodos menos comuns incluem HEAD, CONNECT, OPTIONS, TRACE e PATCH, que abordamos em nossas edições anteriores de "API Design".

Uma pergunta comum em entrevistas é: "Qual é a diferença entre GET e POST?" Vamos mergulhar nas definições deles.

HTTP GET: Este método recupera recursos do servidor via URLs sem produzir nenhum outro efeito. Como as requisições GET geralmente não possuem um corpo de payload, elas permitem o marcação, compartilhamento e cache de páginas web.

HTTP POST: Este método interage com recursos com base no corpo da carga útil. A interação varia dependendo do tipo de recurso. Por exemplo, se estivermos deixando um comentário após comprar um iPhone 14, clicar em "enviar" envia uma solicitação POST ao servidor com o comentário no corpo da mensagem. Embora não haja um limite definido para o tamanho do corpo da mensagem em uma requisição POST pelo próprio protocolo HTTP, na prática, navegadores e servidores frequentemente impõem seus próprios limites.

Entendendo as Características do GET e do POST
Métodos HTTP possuem certas propriedades que definem como interagem com os recursos do servidor. Duas dessas propriedades são se são 'não mutantes' e 'idempotentes'.

Um método que não muta não altera nenhum recurso do servidor. Por outro lado, um método idempotente produz o mesmo resultado, independentemente de quantas vezes ele seja repetido.

HTTP GET: O método GET recupera dados sem causar alterações, tornando-os não mutantes. Além disso, repetir uma requisição GET não altera o resultado, tornando-o idempotente.

HTTP POST: Diferente do GET, o método POST envia dados que podem modificar recursos do servidor, tornando-os potencialmente mutantes. Além disso, se repetirmos uma solicitação POST, ele pode criar recursos adicionais, tornando-se não idempotente.

No entanto, é importante notar que o comportamento real pode depender de como o servidor implementa esses métodos. Embora os padrões sugiram certos comportamentos, desenvolvedores às vezes usam esses métodos de maneiras não padrão. Por exemplo, um método GET pode ser usado para deletar dados (tornando-os tanto mutantes quanto não idempotentes), ou um método POST pode ser usado para recuperar dados (tornando-o não mutante e potencialmente idempotente).

Um exemplo infame de uso não padrão envolveu um blogueiro que implementou operações de exclusão de postagens com HTTP GET, assumindo que ninguém visitaria o blog. Mas quando o Google rastreou o blog, todas as postagens foram deletadas!

Também é essencial lembrar que, quando se trata de segurança e prevenção de vazamentos de informações, nem GET nem POST são inerentemente seguros. Os parâmetros GET são visíveis na URL, enquanto os corpos POST, embora não visíveis na URL, ainda podem ser interceptados se não criptografados. Para garantir a transmissão segura de dados, recomenda-se o uso de HTTPS, um tema que discutiremos com mais detalhes adiante.

HTTP Keep-Alive vs TCP keepalive
Discutimos como HTTP pode iniciar uma conexão persistente usando "Connection: Keep-Alive". Lembre-se que, na edição sobre o TCP, também mencionamos o mecanismo keepalive do TCP. Eles são iguais? Não, são bem diferentes:

O HTTP Keep-Alive, vinculado a conexões HTTP persistentes, opera na camada de aplicação.

O TCP keepalive, atuando na camada de transporte, mantém uma conexão TCP ativa durante períodos de inatividade na troca de dados.

Vamos aprofundar mais.

HTTP Keep-Alive
HTTP, exceto HTTP/3, é construído sobre TCP. Estabelecer uma conexão HTTP requer um handshake TCP de 3 vias. Após enviar uma requisição HTTP e receber uma resposta, a conexão TCP se desconecta.

Enviar múltiplas requisições para o mesmo servidor dessa forma é bastante ineficiente. Não seria melhor reutilizar a mesma conexão TCP? Esse é o propósito do HTTP Keep-Alive. Ele mantém a conexão TCP até que qualquer uma das partes solicite a desconexão.

O HTTP/1.1 ativa o HTTP Keep-Alive por padrão.

O HTTP Keep-Alive reduz a sobrecarga de abrir e fechar conexões TCP. É ainda mais poderoso quando combinado com HTTP/2, que introduz o conceito de "streams".

Streams nos permitem enviar múltiplas requisições simultaneamente sem esperar respostas do servidor. Mais importante ainda, essas solicitações e respostas podem ser tratadas fora de ordem, o que não é possível apenas com HTTP Keep-Alive.

O diagrama comparativo abaixo mostra a diferença entre streams HTTP Keep-Alive e HTTP/2. Normalmente, esperamos a primeira resposta antes de enviar uma segunda solicitação. Com streams HTTP/2, podemos enviar múltiplas requisições simultaneamente sem esperar a primeira resposta, e o servidor pode responder fora de ordem.

Por que isso é importante? Esse recurso é crucial para evitar o bloqueio head-of-line (HOL). Em versões anteriores do HTTP, se o servidor demora muito para processar uma solicitação, as requisições subsequentes precisam esperar, causando atrasos. Mas com fluxos HTTP/2, cada requisição é independente. Mesmo que um servidor demore mais para processar uma solicitação, ele ainda pode responder a outras solicitações. As respostas podem ser retornadas assim que estiverem prontas, mesmo que isso signifique que não estejam na ordem original da solicitação.

<img width="1268" height="829" alt="unnamed" src="https://github.com/user-attachments/assets/75c81a4f-1ace-4903-abe0-e4a09e62b3f8" />

Manter TCP vivo
O TCP keepalive não tem relação com HTTP Keep-Alive. Em uma conexão TCP, ambas as partes permanecem no estado ESTABELECIDO até que uma delas o encerre. Se uma das partes se desconectar sem avisar a outra, a parte restante não saberia disso. O TCP keepalive resolve isso enviando sondas periodicamente quando não há troca de dados. Discutimos isso em nossa edição anterior com TCP. O diagrama a seguir deve servir como uma atualização.

<img width="466" height="555" alt="unnamed" src="https://github.com/user-attachments/assets/c1822161-87f1-4aa0-b137-3ae46ec10f70" />

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
