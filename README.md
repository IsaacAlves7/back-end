# 🎡 DDD - Domain-Driven Design
<img src="https://img.shields.io/badge/Python-3.10.7-3776AB?style=flat&logo=Python&logoColor=white"> <img src="https://img.shields.io/badge/Node.js-16.17.0-339933?style=flat&logo=Node.js&logoColor=white"> <img src="https://img.shields.io/badge/Ruby-3.3-CC342D?style=flat&logo=Ruby&logoColor=white"> <img src="https://img.shields.io/badge/Go-1.21-00ADD8?style=flat&logo=Go&logoColor=white"> <img src="https://img.shields.io/badge/PHP-8.2-777BB4?style=flat&logo=PHP&logoColor=white"> <img src="https://img.shields.io/badge/C++-23-F5455C?style=flat&logo=CPlusPlus&logoColor=white"> <img src="https://img.shields.io/badge/Java-22.0.1-chocolate?style=flat&logo=OpenJDK&logoColor=white"> <img src="https://img.shields.io/badge/.NET-8.0.300-512BD4?style=flat&logo=DotNet&logoColor=white"> <img src="https://img.shields.io/badge/Rust-1.82.0-dda584?style=flat&logo=Rust&logoColor=white"> <img src="https://img.shields.io/badge/UML-diagrams-purple?style=flat&logo=UML&logoColor=white"> 

<a href=""><img src="https://em-content.zobj.net/source/microsoft-teams/363/ferris-wheel_1f3a1.png" align="right" height="77"></a>

O **DDD - Domain-Driven Design** (Projeto Orientado a Domínio) é uma abordagem de desenvolvimento de software que se concentra em entender o **domínio do negócio** e modelar o software em torno desses conceitos e regras de negócio. É um tipo de <a href="">modelagem de software</a> e um <a href="">design de software</a> orientado a objetos (OOP) que procura reforçar conceitos e boas práticas relacionadas à OOP e surgiu como uma resposta às dificuldades enfrentadas por desenvolvedores ao lidarem com sistemas complexos, especialmente em domínios de negócio onde a lógica e os requisitos mudam frequentemente. 

Isso vem em contrapartida com o uso comum do <a href="">Data-Driven Design</a> (Projeto Orientado a Dados), que a maioria dos desenvolvedores usa sem mesmo ter consciência disso. O design orientado por domínio (DDD) é uma abordagem importante de design de software, focada em modelar software para corresponder a um domínio de acordo com a contribuição dos especialistas desse domínio. A DDD é contra a ideia de ter um modelo unificado único; em vez disso, divide um grande sistema em contextos limitados, cada um com seu próprio modelo. 

Sem levar em conta o DDD, as *técnicas de modelagem de domínio* são métodos utilizados na engenharia de software para compreender e representar o domínio de um problema específico. 

O **domínio** (domain) refere-se à área de conhecimento, contexto ou setor de negócios em que o software está sendo desenvolvido. A modelagem de domínio tem como objetivo capturar os conceitos, regras e relacionamentos do domínio em um formato compreensível e utilizável pelos desenvolvedores. Então, o DDD (Domain-Driven Design) é uma abordagem para o desenvolvimento de software que combina conceitos de design de software e técnicas de modelagem de domínio. 

Não é considerado um design pattern específico, mas sim uma abordagem geral para projetar e estruturar sistemas de software. Domain-Driven Design (DDD) é um método de design de software em que os desenvolvedores constroem modelos para entender os requisitos de negócios de um domínio. Esses modelos servem como base conceitual para o desenvolvimento de software.

O termo foi cunhado por Eric Evans em seu livro de mesmo nome, publicado em 2003. No entanto, a definição mais simples que encontrei foi ao ler o livro Fundamentals of Software Architecture de Neal Ford e Mark Richards:

> O design orientado a domínio (DDD) é uma técnica de modelagem que permite a decomposição organizada de domínios de problemas complexos. - Neal Ford e Mark Richards. Fundamentos da Arquitetura de Software. 2020.

O **DDD (Domain-Driven Design)** fica em uma camada intermediária entre a arquitetura de software e a implementação do código.

Ele não é exatamente uma arquitetura como Clean Architecture, Hexagonal Architecture ou Microsserviços. Também não é uma técnica de programação como OOP, programação funcional, estruturas de dados (DSA) ou design patterns.

O principal foco do DDD é *modelar o domínio do negócio*. Uma forma simples de visualizar:

```
Negócio
↓
DDD (modelo do domínio)
↓
Arquitetura
↓
Código (OOP, Funcional, Design Patterns, DSA)
↓
Infraestrutura
```

Por exemplo, em um sistema bancário:

* O negócio define conceitos como Conta, Cliente, Transferência e Saldo.
* O DDD transforma esses conceitos em Entidades, Value Objects, Agregados, Domínios e Regras de Negócio.
* A arquitetura define como esses componentes se organizam (camadas, módulos, microsserviços etc.).
* O código implementa isso usando classes, interfaces, funções, coleções, algoritmos e padrões de projeto.

Por isso costuma-se dizer que o DDD é uma **abordagem de modelagem e design estratégico/tático do domínio**, e não uma arquitetura nem uma linguagem de programação.

Em termos de níveis de abstração:

| Nível             | Exemplos                                                                                      |
| ----------------- | --------------------------------------------------------------------------------------------- |
| Negócio           | Regras de negócio, processos, especialistas do domínio                                        |
| Design de Domínio | DDD, Bounded Context, Ubiquitous Language, Agregados                                          |
| Arquitetura       | Clean Architecture, Hexagonal, Onion, Microsserviços                                          |
| Software principles/Design de Código  | SOLID, GoF, GRASP, KISS, DRY, YAGNI                                       |
| Programação       | OOP, Funcional, Procedural, Reativo, Concorrência, Paralelismo                                |
| Implementação     | Estruturas de Dados, Algoritmos, Frameworks                                                   |
| Testes            | Abordagens TDD/BDD, Testes de Unidade, Integração, End-to-End (E2E), Test doubles: Mocks/Stubs|

> [!Note]
> **Nota**: É muito comum ver pessoas confundindo LIQUID com alguma variante de SOLID por conta do nome fluído, mas em design de software tático os padrões de referência continuam sendo SOLID, GoF, GRASP, KISS, DRY e YAGNI! Ele se refere ao Template Engine (Shopify) ou Filosofia de Deploy Contínuo (JFrog).

Então eu diria que o DDD atua principalmente no **design do software**, servindo como uma ponte entre o entendimento do negócio e a arquitetura. Ele influencia a arquitetura, mas não a substitui; influencia o código, mas não determina se você usará orientação a objetos, programação funcional ou outro paradigma.

De forma lúdica, se o software fosse uma cidade:

* O negócio decide quais bairros precisam existir.
* O DDD desenha o mapa da cidade e define o propósito de cada bairro.
* A arquitetura define as avenidas, pontes e regras de circulação.
* O OOP, programação funcional e design patterns são as técnicas de construção dos prédios.
* Estruturas de dados e algoritmos são os materiais e mecanismos usados dentro desses prédios.

Por isso é comum ouvir que DDD está mais próximo da modelagem do negócio do que da tecnologia. É uma disciplina de design que conversa com arquitetos, desenvolvedores e especialistas do domínio ao mesmo tempo.

Eric Evans cunhou o termo Domain-Driven Design (DDD) como parte do título de seu livro de 2004, Domain-Driven Design: Tackling Complexity in the Heart of Software.

<a href=""><img src="https://github.com/user-attachments/assets/47723806-ab10-490c-844f-6c5e8980e08f" align="right" height="177"></a>

> [!Important]
> Foi popularizado por Eric Evans em seu livro **Domain-Driven Design: Tackling Complexity in the Heart of Software**, publicado em 2003. Esse livro não é leve, especialmente se você ainda está no início da jornada. Ele exige uma certa base em desenvolvimento orientado a objetos (OOP), arquitetura de software e experiência prática com projetos reais. Geralmente, ele é mais proveitoso depois que você já trabalhou em sistemas mais complexos ou com arquitetura em camadas. O Design Orientado por Domínio (DDD) ganhou atenção significativa no desenvolvimento de software por seu potencial de enfrentar desafios complexos de software, especialmente nas áreas de refatoração de sistemas, reimplementação e adoção. Utilizando o conhecimento do domínio, o DDD visa resolver problemas de negócios complexos de forma eficaz.

Some Recommended Books on DDD:

* **Domain-Driven Design, Tackling Complexity in the Heart of Software** — Eric Evans

* **Applying Domain-Driven Design and Patterns** — Jimmy Nilsson

* **Implementing Domain-Driven Design** — Vaughn Vernon

* **Professional Domain-Driven Design Patterns** — Scott Millett, Nick Tune

* **Domain-Driven Design Distilled** — Vaughn Vernon

* **Domain Modeling Made Functional** — Scott Wlaschin

* **Hands-on Domain-Driven Design with .NET Core** — Alexey Zimarev

Embora o design orientado a domínio (DDD) exista desde 2004, o conceito não foi capaz de se espalhar excessivamente em todo esse tempo. Nos últimos anos, no entanto, o termo experimentou uma segunda primavera. Onde o desenvolvimento de software não é um fim em si mesmo. Em vez disso, o software é desenvolvido para resolver problemas técnicos do mundo real. Isso requer tecnologia, mas esse não é o foco, é apenas um meio para um fim. O foco real está no assunto, o **domínio** (domain)! Portanto, uma boa compreensão disso é essencial para um desenvolvimento bem-sucedido e direcionado.

Sob design orientado por domínio, a estrutura e a linguagem do código de software (nomes de classes, métodos de classe, variáveis de classe) devem corresponder ao domínio de negócio. Por exemplo: se o software processa solicitações de empréstimo, pode ter classes como "`solicitação de empréstimo`", "`clientes`" e métodos como "`aceitar oferta`" e "`retirar`".

DDD só funciona plenamente quando *anda alinhado* com design de software, design de sistemas e arquitetura, não porque eles sejam a mesma coisa, mas porque o DDD sozinho não consegue se sustentar sem uma estrutura técnica que dê corpo às suas ideias. O ponto central é que o Domain-Driven Design é uma abordagem profundamente conceitual: ele organiza o pensamento sobre o domínio, define limites claros, introduz linguagens específicas, identifica contextos independentes e estabelece modelos consistentes. 

Só que tudo isso precisa inevitavelmente se materializar em código, fluxos, integrações, decisões de infraestrutura, modularização e comunicação entre serviços. Se esse materializar não acompanha a lógica do domínio, o DDD implode, ou vira apenas documentação bonita.

O objetivo do DDD é, em primeiro lugar, adquirir conhecimento sobre o problema para identificar a solução. Em seguida, concordaremos com os vários componentes desta solução para implementá-la. Esse objetivo é alcançado por meio dos padrões fundamentais do DDD: padrões estratégicos e táticos. Os padrões estratégicos respondem à pergunta: "Por que estamos construindo este software e quais são seus componentes?". Por outro lado, os padrões táticos dão a resposta à pergunta: "Como esses componentes são implementados?"

Portanto, o design orientado por domínio baseia-se nos seguintes objetivos:

1. Colocando o foco principal do projeto no domínio central e na camada de lógica de domínio;
2. Basear projetos complexos em um modelo do domínio;
3. Iniciando uma colaboração criativa entre especialistas técnicos e especialistas do domínio para refinar iterativamente um modelo conceitual que aborde problemas específicos do domínio.

<table>
	<tr>
		<td><img src="https://github.com/user-attachments/assets/dff34406-3889-446f-818f-2353d4be9589"></td>
		<td><img src="https://github.com/user-attachments/assets/40d50d38-bef7-4b85-8aab-8eba9d22891b"></td>
		<td><img src="https://github.com/user-attachments/assets/c2d239ef-edf2-4fe8-b7c8-7d306363024d"></td>
		<td><img src="https://github.com/user-attachments/assets/9ffe0630-1d16-4d7b-b758-5f74ff0c5a24"></td>
	</tr>
</table>

https://substack.com/redirect/2ca6dd83-9508-4fc6-ad54-21c78b264b45?j=eyJ1IjoiMmRpcmZwIn0.DgQpD9vnxeDXnbOGqr5r4QICWGtxf2wFAnKNG8yY6Aw

Design Orientado por Domínio Defensores do design orientado por domínio que impulsionam o design de softwares por meio da modelagem de domínio.

Linguagem unificada é um dos conceitos-chave do design orientado por domínio. Um modelo de domínio é uma ponte entre os domínios de negócios.

Business Entities: O uso de modelos pode ajudar a expressar conceitos e conhecimentos de negócios e a orientar o desenvolvimento futuro de softwares, como bancos de dados, APIs, etc.

Model Boundaries: Limites frouxos entre conjuntos de modelos de domínio são usados para modelar correlações de negócios.

Aggregation: Um Agregado é um agrupamento de objetos relacionados (entidades e objetos de valor) que são tratados como uma única unidade para fins de alterações de dados.

Entities vs. Value Objects: de Valor Além de raízes agregadas e entidades, existem alguns modelos que parecem descartáveis, eles não possuem seu próprio ID para identificá-los, mas são mais parte de alguma entidade que expressa uma coleção de vários campos.

Operational Modeling: Operacional No design orientado por domínio, para manipular esses modelos, há vários objetos que atuam como "operadores".

Camadas da arquitetura: Para organizar melhor os diversos objetos em um projeto, precisamos simplificar a complexidade de projetos complexos ao sobrepê-los como uma rede de computadores.

Construa o modelo de domínio Muitos métodos foram inventados para extrair modelos de domínio a partir do conhecimento de negócios.

<img src="https://github.com/user-attachments/assets/038eb886-2db7-456a-a67c-3707b7020c31" align="right" height="177">

> [!Important]
> Em seu livro **Clean Architecture: A Craftsman's Guide to Software Structure and Design**, Uncle Bob chama uma arquitetura que informa ao leitor sobre o sistema, não as estruturas usadas no sistema, de "Arquitetura Gritante". Em **A Arquitetura Limpa: O Guia do Artesão para Estrutura e Design de Software**, <a href="https://martinfowler.com/bliki/DomainDrivenDesign.html">Martin</a> vai além de um simples catálogo de opções. Com base em mais de meio século de experiência em diversos ambientes de software, ele oferece orientações sobre as escolhas cruciais e explica por que são essenciais para o sucesso. Como esperado de Uncle Bob, o livro apresenta soluções simples e diretas para os desafios reais enfrentados pelos desenvolvedores, desafios que podem determinar o êxito ou o fracasso de seus projetos.

Então, faz sentido para mim pensar em design de software como design gritante quando fala alto e claro sobre o domínio do problema. Geralmente, o ativo mais crítico no design de uma solução é adquirir conhecimento sobre os problemas que estamos tentando resolver, o processo que queremos automatizar ou as dificuldades que queremos facilitar. Então, para nos aproximarmos da solução, tínhamos que já estar próximos do problema.

Falaremos sobre a maneira de se aproximar do problema e da solução: o caminho do Domain-Driven Design (DDD) em direção a um design gritante, o design que informa ao leitor sobre o domínio do negócio, não sobre os frameworks usados.

> [!Warning]
> Quando não usar DDD? Às vezes só é necessário um CRUD (entrega de um produto funcional)! DDD não é uma solução para tudo. A maioria dos sistemas possui uma boa parte composta por cadastros básicos (CRUD) e não seria adequado usar DDD para isso. A engenharia de domínios tem sido criticada por focar demais em "engenharia para reutilização" ou "engenharia com reutilização" de recursos genéricos de software, em vez de se concentrar em "engenharia para uso", de modo que a visão de mundo, linguagem ou contexto de um indivíduo seja integrado ao design do software. Um CRUD é praticamente o estágio MVP funcional, voltado a registrar, atualizar e consultar informações, geralmente com baixo acoplamento conceitual e alto acoplamento técnico. Você descreve tabelas, cria endpoints, faz o básico para o sistema existir. Ele resolve o problema imediato, mas não escala bem quando as regras começam a se multiplicar, quando várias áreas de negócio influenciam o mesmo fluxo ou quando múltiplos times precisam trabalhar em partes diferentes da solução sem se bloquear. Então, depende da complexidade do projeto e das regras de negócio.

> [!Tip]
> Já o DDD é “nível engenharia” (entrega de um produto sustentável, capaz de sobreviver à complexidade, a mudanças constantes, a regras de negócio extensivas e a um ciclo de vida longo), porque exige que o desenvolvedor deixe de pensar apenas como codificador e passe a operar como analista de domínio, arquiteto e estrategista ao mesmo tempo. É necessário entender profundamente o negócio, descobrir limites contextuais, refinar invariantes, identificar agregados, modelar comportamentos, conversar com especialistas e traduzir tudo isso para uma arquitetura mais sólida, isolada e resiliente, geralmente integrada com abordagens como Clean Architecture, Hexagonal, Onion, EDA, CQRS, Event Sourcing e microsserviços.
>
> Você aplica DDD quando a complexidade do domínio começa a crescer a ponto de inviabilizar soluções lineares ou meramente CRUD. Ele se torna realmente vantajoso quando você precisa que o software represente fielmente regras de negócio dinâmicas, mutáveis e distribuídas, principalmente em arquiteturas mais sofisticadas como microsserviços, BFF, EDA, Hexagonal, Clean Architecture, Onion ou Tomato. Nessas abordagens, há múltiplos contextos, integrações, fluxos assíncronos, eventos, fronteiras claras e times diferentes trabalhando sobre partes distintas do sistema; tudo isso exige linguagem ubíqua, modelagem explícita, separação de responsabilidades e decisões guiadas pelo domínio. Em sistemas simples, centralizados ou puramente transacionais, DDD vira peso morto, mas em cenários complexos ele traz clareza, previsibilidade e alinhamento entre tecnologia e negócio, evitando entropia arquitetural e facilitando evolução contínua.

Por isso, ele é usado quando a aplicação deixa de ser “só um sistema” e passa a ser um ecossistema vivo, com equipe, visão de produto, múltiplos contextos e evolução contínua. É literalmente a fronteira entre “programação” e “engenharia de software aplicada ao domínio”.

No entanto, críticos do design orientado por domínio argumentam que os desenvolvedores normalmente precisam implementar uma grande quantidade de isolamento e encapsulamento para manter o modelo como uma construção pura e útil. Embora o design orientado por domínio ofereça benefícios como manutenção, a Microsoft o recomenda apenas para domínios complexos onde o modelo oferece benefícios claros na formulação de uma compreensão comum do domínio.

A exigência de construir um entendimento profissional também se aplica aos desenvolvedores. Uma boa compreensão do assunto (domínio) surge da comunicação regular e de uma linguagem comum, o que representa um desafio, principalmente em equipes interdisciplinares: Afinal, cada disciplina tem sua linguagem técnica, por isso os mal-entendidos são inevitáveis.

<img height="413" align="right" src="https://github.com/user-attachments/assets/e2c65dfd-24ff-473c-9007-4d1256554953" />

Num <a href="">Code Review</a>, o time não está apenas olhando se o código “funciona”, mas se ele está legível, sustentável e alinhado ao domínio. É aí que DDD se torna um guia. Por exemplo, quando você define entidades e value objects, o revisor consegue avaliar se você está representando o domínio corretamente ou se misturou regras de negócio com detalhes de infraestrutura. Se você trabalha com bounded contexts, o code review ajuda a garantir que cada módulo está respeitando suas fronteiras e não está acoplando responsabilidades que deveriam estar separadas. E quando se usa a linguagem ubíqua, qualquer pessoa envolvida no projeto pode bater o olho no código e identificar termos familiares do negócio, reduzindo ambiguidades.

A ideia central é trazer o domínio (o sujeito, a razão) à tona...O <a href="https://unibo-dtm-se.github.io/course-slides/ddd/#/">DDD</a> acaba aparecendo muito em code reviews (revisões de código) porque ele não é só um conjunto de padrões técnicos, mas uma maneira de organizar o raciocínio e o design do sistema a partir do domínio de negócio. Diferente de TDD e BDD, que são mais voltados ao como testar e como validar comportamento, o DDD toca no como estruturar o código para refletir a realidade do problema que a aplicação resolve.

Isso muda o tom da revisão: em vez de ser só “esse método está mal nomeado” ou “esse if pode virar um switch”, passa a ser “essa entidade realmente pertence a este contexto?” ou “essa regra deveria estar no domínio ou no serviço de aplicação?”. São discussões de mais alto nível, que evitam dívida técnica e fortalecem a coerência do sistema. Por isso, times que adotam DDD costumam ter code reviews mais ricos, que não param na forma, mas questionam se a essência do código está fiel ao problema que ele resolve.

O DDD (Domain-Driven Design) entra no fluxo do desenvolvimento de produto antes do MVP, como um alicerce. Ele não é um artefato de entrega como MVP, UAT ou Release, mas sim uma abordagem de modelagem que orienta como o software deve ser desenhado para refletir o domínio do problema.

Se você pensar em sequência, o fluxo ficaria assim: Engenharia de domínio + Engenharia de requisitos + MVP - Minimum Product Viable + Design orientado por domínio + Design Evolutivo + Arquitetura de aplicações

<img height="277" align="right" src="https://github.com/user-attachments/assets/29d08cac-4445-4200-be35-d46f5e822991" />

1. **DDD – Domain-Driven Design**: Aqui você faz a imersão no domínio de negócio, conversa com especialistas e stakeholders, descobre a linguagem ubíqua e modela o sistema em termos que façam sentido para o negócio. É nessa etapa que surgem conceitos como entidades, agregados, bounded contexts e eventos de domínio. O objetivo é garantir que a estrutura do software nasça aderente à realidade que ele pretende resolver.

2. **MVP – Minimum Viable Product**: Uma vez que o domínio esteja bem modelado, você constrói o MVP. Esse MVP já se beneficia do DDD, porque mesmo sendo mínimo, ele está fundamentado em um design que respeita a linguagem e as regras do negócio. Isso evita que o MVP vire um “protótipo descartável” e aumenta a chance de evoluir para produto de verdade.

3. **QA interno** → **UAT** → **Release** → **Continuous Delivery**: Depois disso, o fluxo segue normalmente como te expliquei antes.

Então, se o MVP é o “primeiro produto que entrega valor real”, o *DDD é o mapa que garante que esse valor seja o certo*, modelando desde o início com consistência e visão de futuro. Sem o DDD, corre-se o risco de o MVP ser feito de qualquer jeito e depois ser difícil ou custoso de evoluir.

Um conceito fundamental para tudo isso é a **Engenharia de domínio** que é todo o processo de reutilização do conhecimento de domínio na produção de novos sistemas de software. É um conceito-chave no reuso sistemático de software e na engenharia de linhas de produtos. Uma ideia-chave na reutilização sistemática de software é o domínio. A maioria das organizações atua em apenas alguns domínios. Eles constroem repetidamente sistemas semelhantes dentro de um determinado domínio, com variações para atender a diferentes necessidades dos clientes. Em vez de construir cada nova variante do zero, economias significativas podem ser alcançadas reutilizando partes de sistemas anteriores no domínio para construir novos.

O processo de identificar domínios, delimitá-los e descobrir semelhanças e variáveis entre os sistemas do domínio é chamado de análise de domínio. Essas informações são capturadas em modelos usados na fase de implementação do domínio para criar artefatos como componentes reutilizáveis, uma linguagem específica de domínio ou geradores de aplicações que podem ser usados para construir novos sistemas no domínio.

Na **engenharia de linhas de produtos**, conforme definido por ISO26550:2015, a Engenharia de Domínios é complementada pela Engenharia de Aplicações, que cuida do ciclo de vida dos produtos individuais derivados da linha de produtos. 

A engenharia de domínio é projetada para melhorar a qualidade dos produtos de software desenvolvidos por meio do reaproveitamento de artefatos de software. A engenharia de domínios mostra que a maioria dos sistemas de software desenvolvidos não são sistemas novos, mas sim variantes de outros sistemas dentro do mesmo campo. Como resultado, por meio do uso da engenharia de domínio, as empresas podem maximizar lucros e reduzir o tempo de lançamento no mercado utilizando conceitos e implementações de sistemas de software anteriores e aplicando-os ao sistema-alvo. A redução de custos é evidente mesmo durante a fase de implementação. Um estudo mostrou que o uso de linguagens específicas de domínio permitiu que o tamanho do código, tanto em número de métodos quanto em número de símbolos, fosse reduzido em mais de 50%, e o número total de linhas de código fosse reduzido em quase 75%.

A engenharia de domínios foca em capturar o conhecimento adquirido durante o processo de engenharia de software. Ao desenvolver artefatos reutilizáveis, os componentes podem ser reutilizados em novos sistemas de software a baixo custo e alta qualidade. Como isso se aplica a todas as fases do ciclo de desenvolvimento de software, a engenharia de domínios também foca nas três fases principais: análise, design e implementação, paralelamente à engenharia de aplicações. Isso produz não apenas um conjunto de componentes de implementação de software relevantes para o domínio, mas também requisitos e projetos reutilizáveis e configuráveis.

Dado o crescimento dos dados na Web e da Internet das Coisas, uma abordagem de engenharia de domínios está se tornando relevante para outras disciplinas também. O surgimento de cadeias profundas de serviços Web destaca que o conceito de serviço é relativo. Serviços web desenvolvidos e operados por uma organização podem ser utilizados como parte de uma plataforma por outra organização. Como os serviços podem ser usados em diferentes contextos e, portanto, requerem configurações distintas, o projeto de famílias de serviços pode se beneficiar de uma abordagem de engenharia de domínio.

A engenharia de domínios, assim como a engenharia de aplicações, consiste em três fases principais: análise, projeto e implementação. No entanto, enquanto a engenharia de software foca em um único sistema, a engenharia de domínios foca em uma família de sistemas. Um bom modelo de domínio serve como referência para resolver ambiguidades mais adiante no processo, um repositório de conhecimento sobre as características e definição do domínio, e uma especificação para desenvolvedores de produtos que fazem parte do domínio.

A **análise de domínio** é usada para definir o domínio, coletar informações sobre o domínio e produzir um modelo de domínio. Por meio do uso de modelos de características (inicialmente concebidos como parte do método de análise de domínio orientada a características), a análise de domínio visa identificar os pontos comuns em um domínio e os pontos variáveis dentro do domínio. Por meio do uso da análise de domínio, é possível o desenvolvimento de requisitos e arquiteturas configuráveis, em vez de configurações estáticas que seriam produzidas por uma abordagem tradicional de engenharia de aplicação.

A análise de domínio é significativamente diferente da engenharia de requisitos e, como tal, abordagens tradicionais para derivar requisitos são ineficazes para o desenvolvimento de requisitos configuráveis, como estariam presentes em um modelo de domínio. Para aplicar a engenharia de domínio de forma eficaz, o reuso deve ser considerado nas fases iniciais do ciclo de vida do desenvolvimento de software. Por meio da seleção de recursos dos modelos desenvolvidos, a reutilização da tecnologia é realizada muito cedo e pode ser aplicada adequadamente durante todo o processo de desenvolvimento.

A análise de domínio é derivada principalmente de artefatos produzidos a partir de experiências passadas no domínio. Sistemas existentes, seus artefatos (como documentos de projeto, documentos de requisitos e manuais do usuário), padrões e clientes são todas fontes potenciais de entrada para análise de domínio. No entanto, ao contrário da engenharia de requisitos, a análise de domínio não consiste apenas na coleta e formalização de informações; Existe também um componente criativo. Durante o processo de análise de domínio, os engenheiros buscam ampliar o conhecimento do domínio além do que já é conhecido e categorizar o domínio em semelhanças e diferenças para aumentar a reconfigurabilidade.

A análise de domínio produz principalmente um modelo de domínio, representando as propriedades comuns e variáveis dos sistemas dentro do domínio. O modelo de domínio auxilia na criação de arquiteturas e componentes de maneira configurável, atuando como uma base sobre a qual projetar esses componentes. Um modelo de domínio eficaz não inclui apenas as características variáveis e consistentes de um domínio, mas também define o vocabulário usado no domínio e define conceitos, ideias e fenômenos dentro do sistema.

Modelos de características decompõem conceitos em suas características necessárias e opcionais para produzir um conjunto totalmente formalizado de requisitos configuráveis.

O **design de domínio** toma o modelo de domínio produzido durante a fase de análise de domínio e visa produzir uma arquitetura genérica à qual todos os sistemas dentro do domínio possam se conformar. Da mesma forma que a engenharia de aplicações utiliza os requisitos funcionais e não funcionais para produzir um projeto, a fase de projeto de domínio da engenharia de domínios toma os requisitos configuráveis desenvolvidos durante a fase de análise de domínio e produz uma solução configurável e padronizada para a família de sistemas. O design de domínios visa produzir padrões arquitetônicos que resolvam um problema comum entre os sistemas dentro do domínio, apesar das diferentes configurações de requisitos. Além do desenvolvimento de padrões durante o projeto de domínio, os engenheiros também devem tomar cuidado para identificar o escopo do padrão e o nível em que o contexto é relevante para o padrão. A limitação do contexto é crucial: contexto excessivo resulta em o padrão não ser aplicável a muitos sistemas, e contexto insuficiente resulta em um padrão insuficientemente poderoso para ser útil. Um padrão útil deve ser frequentemente recorrente e de alta qualidade.

O objetivo do design de domínio é satisfazer o maior número possível de requisitos de domínio, mantendo a flexibilidade oferecida pelo modelo de características desenvolvido. A arquitetura deve ser suficientemente flexível para satisfazer todos os sistemas dentro do domínio, ao mesmo tempo em que rígida o bastante para fornecer uma estrutura sólida sobre a qual basear a solução.

Implementação de domínio é a criação de um processo e de ferramentas para gerar eficientemente um programa personalizado no domínio.

Um domínio bem modelado só tem efeito se o design de software respeita a coesão do modelo, preserva invariantes, mantém consistência interna e evita que detalhes técnicos vazem para áreas onde não deveriam. Se o design de software decide misturar responsabilidades, criar acoplamentos arbitrários, espalhar regras por camadas que não conversam com o domínio ou ignorar o Ubiquitous Language, então o DDD perde força, porque o código deixa de refletir as estruturas conceituais. O resultado é um sistema que só “parece DDD no papel”, mas opera como um monólito acoplado, com entidades sem significado e casos de uso sem fronteiras.

<img height="413" align="right" src="https://github.com/user-attachments/assets/d4500284-4180-420e-b551-056dbe5a17d0" />

Ao mesmo tempo, DDD também depende do design de sistemas, porque os **Bounded Contexts** (Contextos limitados), para existirem de verdade, precisam de fronteiras técnicas: precisam ser isolados, ter seus próprios modelos, seus próprios fluxos de dados, sua própria vida. É o <a href="">design de sistemas (System design)</a> que decide como esses contextos conversam, se por eventos, filas, APIs, contratos assíncronos ou mensagens. O DDD diz *“esses dois contextos são independentes e têm linguagens diferentes”*; o design de sistemas transforma essa independência em topologia real e se ele falha nisso, os contextos se fundem, o sistema fica acoplado e a proposta de modularidade do DDD desaparece.

E por fim, a arquitetura de software é o alicerce onde o DDD se apoia. É ela que escolhe padrões como microservices, monólito modular, event-driven, CQRS, event sourcing, hexagonal ou clean architecture, que definem como as partes se organizam, como as dependências fluem, como proteções ao domínio são criadas. A arquitetura é o meio técnico que permite que o domínio respire. Quando a arquitetura é mal desenhada, a equipe tenta aplicar DDD sobre um terreno instável, e o domínio acaba se adaptando aos problemas arquiteturais em vez de a arquitetura se adaptar ao domínio. DDD, nesse cenário, vira ornamento.

Então, sim: DDD precisa andar alinhado com design de software, design de sistemas e arquitetura. O DDD é a visão conceitual, estratégica e semântica; o design de software é a expressão detalhada e tática; o design de sistemas é a topologia operacional; e a arquitetura é a fundação estrutural. Quando esses quatro caminham juntos, o domínio guia o software, o sistema é coerente, a linguagem é compartilhada, os limites são respeitados, e a complexidade fica organizada. Quando andam separados, o DDD deixa de ser um modelo vivo e vira apenas teoria sem impacto real no código e no comportamento do sistema.

O design orientado por domínio articula uma série de conceitos e práticas de alto nível. De importância primordial é o domínio do software, a área de estudo à qual o usuário aplica um programa. Os desenvolvedores de software constroem um modelo de domínio: um sistema de abstrações que descreve aspectos selecionados de um domínio e pode ser usado para resolver problemas relacionados a esse domínio.

Esses aspectos do design orientado por domínio visam fomentar uma linguagem comum compartilhada por especialistas em domínio, usuários e desenvolvedores — a **linguagem onipresente**. A linguagem onipresente é usada no modelo de domínio e para descrever os requisitos do sistema. A linguagem onipresente é um dos pilares do DDD junto com o design estratégico e o design tático. No design orientado por domínio, a camada de domínio é uma das camadas comuns em uma **arquitetura multicamadas orientada a objetos**.

Os conceitos e práticas do DDD são dividos em camadas de domínio: Quando você diz que os conceitos e práticas do Domain-Driven Design são divididos em camadas, você está tocando em uma das características mais marcantes do DDD, mas que muitas vezes é mal compreendida. DDD não é exatamente uma “arquitetura em camadas”, mas ele influenciou fortemente arquiteturas que usam camadas de maneira disciplinada. O ponto central é que DDD organiza o software em torno do domínio, e essa organização naturalmente cria zonas distintas de responsabilidade, que acabam se parecendo com camadas lógicas, mesmo que o padrão em si não force isso.

Na prática, quando falamos de camadas em DDD, normalmente estamos falando do conjunto de estruturas conceituais que separa o coração do domínio (onde vivem as regras de negócio puras) das partes infraestruturais, externas ou acopladas a tecnologia. O domínio fica isolado, limpo, autocontido, enquanto o resto da aplicação orbita em volta dele, servindo-o, protegendo-o e garantindo que ele se mantenha expressivo e imutável diante das mudanças tecnológicas. 

<img width="100%" alt="image" src="https://github.com/user-attachments/assets/cc8dad6f-afc7-4b1b-8ebd-30df9b57b557" />

Os padrões estratégicos lidam com a obtenção de uma visão geral do domínio de negócios, o que inclui decompô-lo em regras de negócios.

> Estritamente falando, as regras de negócios são regras ou procedimentos que fazem ou economizam o dinheiro da empresa. — Tio Bob, Arquitetura Limpa: Guia de um Artesão para Estrutura e Design de Software

<img height="977" align="right" src="https://github.com/user-attachments/assets/e10458c3-c96c-46aa-8007-27e1a11c0282" />

Em outras palavras, as regras de negócios são os recursos funcionais que requerem desenvolvimento. No entanto, existem diferentes tipos de regras de negócios. Existem urgentes e importantes. Ainda assim, outros não são urgentes, mas são importantes. Coletar e reagrupar essas regras de forma significativa ajuda a decompor a complexidade do domínio de negócios em subdomínios: subdomínios principais, genéricos e de suporte.

O **subdomínio principal** contém as regras de negócios que oferecem vantagem competitiva e destacam a diferença entre as empresas que trabalham no mesmo domínio de negócios. Ele incorpora uma lógica de negócios altamente complexa e volátil. Portanto, ele deve estar aberto a mudanças na lógica de negócios, o que pode envolver a adição de novos requisitos, a atualização dos antigos ou até mesmo a remoção de alguns deles. Em seguida, ele deve ser cuidadosamente implementado internamente para permitir que essas alterações ocorram de forma eficiente sem causar muitos problemas em todo o software.

A conclusão das regras de negócios do subdomínio principal requer outras regras de negócios que não envolvem lógica altamente complexa nem volátil. Em vez disso, eles apenas apoiam os negócios da empresa sem invocar nenhuma vantagem competitiva, pois estão resolvendo um problema muito óbvio. Eles são desenvolvidos internamente e podem ser terceirizados. Aqui, falamos sobre o subdomínio de suporte. No entanto, o subdomínio genérico consiste em regras de negócios relacionadas a um problema já resolvido para que ele possa ser comprado ou adotado.

Ao destilar o domínio de negócios em busca de subdomínios, devemos falar a mesma língua para nos entendermos. Devemos, portanto, usar o mesmo termo para nos referirmos a um determinado objeto, comportamento ou campo. Na terminologia do DDD, é chamada de linguagem onipresente. Aqui, estamos evocando um dos ingredientes indispensáveis para construir uma solução de software: comunicação eficaz entre as diferentes partes interessadas do projeto, incluindo desenvolvedores, especialistas de domínio, analistas de negócios, gerentes de projeto, gerentes de marketing, etc.

Como desenvolvedores de software, devemos garantir que nossas suposições estejam alinhadas com o conhecimento dos especialistas do domínio. Alberto Brandolini, que é um consultor versátil na área de Tecnologia da Informação, disse uma vez:

> Não é o conhecimento dos especialistas de domínio que vai para a produção, são as suposições dos desenvolvedores que vão para a produção. — Alberto Brandolini

Ele é um especialista em DDD que criou o **EventStorming**, uma metodologia colaborativa envolvendo todas as partes interessadas do projeto para compartilhar conhecimento sobre o domínio do problema. Ele os reuniu com post-its e canetas coloridas diante de um quadro branco para iniciar uma sessão de análise de conhecimento. Essas metodologias ajudam a encontrar limites para separar regras de negócios consistentes e reagrupá-las por contexto. Na terminologia do DDD, esses grupos são chamados de Contextos Limitados, cada um contendo regras de negócios consistentes.

Como reconhecemos regras de negócios consistentes? Regras de negócios consistentes falam uma linguagem onipresente consistente. Quando chamamos de conceito "um" usando um vocabulário diferente e começamos a tratá-lo de um ponto de vista diferente, podemos estar falando de duas responsabilidades comerciais diferentes que exigem segregação de contexto. Além disso, regras de negócios consistentes geralmente mudam pelo mesmo motivo, portanto, mantê-las juntas é melhor.

Cada contexto limitado incorpora determinados recursos de domínio para cumprir uma única responsabilidade e pode ser empacotado de forma independente. Dessa forma, nosso software será fatiado verticalmente e empacotado por recurso. Além disso, essas fatias verticais devem se comunicar para processar um fluxo de trabalho de negócios específico. Portanto, nossos contextos limitados precisam colaborar; Enquanto isso, devemos proteger a consistência das regras de negócios. Devemos escolher o tipo de comunicação que melhor se adapta aos requisitos do negócio, nem mais, nem menos.

A maneira como os contextos limitados devem se comunicar também afeta a maneira como as equipes devem se organizar e colaborar. Duas formas de comunicação são possíveis: cooperação ou comunicação cliente-fornecedor.

Como cooperamos em diferentes contextos delimitados? A cooperação é possível através de parcerias. Nesse tipo de relacionamento, as equipes são parceiras na solução de problemas que surgem durante a integração de contextos limitados; Eles devem, portanto, sincronizar com frequência para detectar pontos de bloqueio, a fim de garantir a integridade do software.

Outra maneira de cooperar entre contextos limitados é ter um kernel compartilhado. As equipes criam um modelo compartilhado que deve ser consistente em todos os contextos limitados que o utilizam. O uso desse padrão deve ser justificado pelo custo da duplicação, que é maior do que o custo da coordenação.

E quanto à relação Cliente-Fornecedor? No tipo de comunicação Cliente-Fornecedor, tínhamos dois lados. O lado do fornecedor é chamado de "upstream", enquanto os clientes são conhecidos como "downstream". O fornecedor é aquele que presta um serviço aos seus clientes. No entanto, os clientes podem interagir de forma diferente com esse serviço, dependendo do padrão de serviço conformista, anticorrupção ou de host aberto.

Conformista significa que o downstream estará em conformidade com o modelo upstream. No entanto, o downstream não estará em conformidade com o modelo upstream na camada anticorrupção. Em vez disso, ele o personalizará para se adequar ao seu modelo por meio de uma camada anticorrupção para proteger seu modelo contra corrupção e conceitos irrelevantes que podem prejudicar a consistência do contexto limitado. Outra maneira de proteger o downstream é seguir o padrão de serviço de host aberto. Nesse padrão, o fornecedor exporá um serviço que esteja em conformidade com seus clientes. Em outras palavras, o upstream pode ter versões diferentes de uma linguagem publicada para estar em conformidade com seu modelo downstream correspondente.

Após essa longa jornada de obtenção do conhecimento essencial, decomposição do domínio de negócios em subdomínios, delimitação de contextos e desenho das relações entre eles, traçamos um mapa de contexto. É uma representação visual que fornece insights, em primeiro lugar, sobre o design de alto nível, incluindo nossos subdomínios, contextos limitados, bem como o modelo que eles implementarão, em segundo lugar, sobre os padrões de comunicação que devem ser usados entre os contextos limitados e, finalmente, sobre a organização e colaboração das equipes.

O DDD nos permite planejar uma arquitetura de microsserviços decompondo o sistema maior em unidades independentes, compreendendo as responsabilidades de cada uma e identificando seus relacionamentos, ele não é um design pattern específico, mas sim uma importante abordagem de design de software, com foco na modelagem de software para corresponder a um **domínio** de acordo com as informações dos especialistas desse domínio. O Domain-Driven Design (DDD) surgiu como uma metodologia revolucionária para a modelagem de software, desenvolvida com o intuito de refinar e otimizar a correspondência entre o design do software e o domínio do software e o domínio do problema que ele busca resolver.

> Os microsserviços são a forma mais escalável de desenvolver software. Mas você precisa de um bom design que permita que as equipes de desenvolvedores trabalhem de forma autônoma e implementem sem atrapalhar umas às outras, caso contrário, você perderá os benefícios de escalabilidade. O DDD ajuda a delimitar responsabilidades claras entre os serviços, o que permite que equipes atuem de forma independente e coordenada.

No entanto, suas raízes vêm de práticas e ideias que estavam sendo discutidas na indústria desde os anos 1990. Durante esse período, muitas empresas estavam adotando metodologias ágeis e enfrentando problemas ao construir sistemas que não apenas funcionassem, mas que também fossem fáceis de entender, modificar e expandir. Um dos grandes desafios era a chamada "lacuna semântica" entre os especialistas de domínio (pessoas que entendem o negócio) e os desenvolvedores (que implementam soluções técnicas). Essa lacuna frequentemente levava a softwares que funcionavam de forma errada ou que eram difíceis de adaptar a mudanças nos requisitos.

A ideia inicial do DDD é voltar à uma modelagem OO mais pura, por assim dizer. Devemos esquecer de como os dados são persistidos e nos preocupar em como representar melhor as necessidades de negócio em classes e comportamentos (métodos). Isso significa que em DDD um `Cliente` pode não ter um *setter* para os seus atributos comuns, mas pode ter métodos com lógica de negócio que neste domínio de negócio pertencem ao `cliente`, como `void associarNovoCartao(Cartao)` ou `Conta recuperarInformacoesConta()`. Em resumo, as classes modeladas e os seus métodos deveriam representar o negócio da empresa, usando inclusive a mesma nomenclatura. A persistência dos dados é colocada em segundo plano, sendo apenas uma camada complementar.

O DDD nasceu da necessidade de aproximar esses dois mundos. Eric Evans observou que o software bem-sucedido em contextos complexos era construído em torno de um **modelo de domínio** que capturava com precisão o conhecimento do negócio. Ele também percebeu que os sistemas mais sustentáveis utilizavam linguagens comuns entre especialistas e desenvolvedores, além de técnicas para isolar a complexidade e tornar o código mais alinhado com as regras do domínio.

Com a evolução do desenvolvimento de softwares e no aumento da complexidade dos requisitos da aplicação, é extremamente relevante definirmos uma comunicação clara entre as várias partes envolvidas em um projeto de software. É bastante comum haver conflitos entre os termos técnicos utilizados pelas diferentes áreas, seja entre analistas de negócios, desenvolvedores, especialistas financeiros ou de vendas. Nada mais natural haja visto que as equipes estão cada vez mais multidisciplinares. Para auxiliar em uma comunicação fluida, os conceitos do DDD — Domain Driven Design, propõem como um dos seus pilares a definição de uma _Linguagem Ubíqua_.

<img width="1444" height="1000" alt="Untitled-Project" src="https://github.com/user-attachments/assets/42b692bd-e278-4d36-84f4-0cae6322006e" />

O DDD formalizou essas práticas ao introduzir conceitos como **Ubiquitous Language** (Linguagem Ubíqua), o cerne do DDD, que promove a criação de uma linguagem compartilhada entre todas as partes interessadas, e **Bounded Contexts** (Contextos Limitados), que ajudam a dividir sistemas grandes e complexos em partes menores e mais compreensíveis. Além disso, o DDD trouxe atenção para padrões arquiteturais que dão suporte ao domínio, como **Entidades** (Entities), **Agregados** (Aggregate), **Repositórios** (Repositories) e **Serviços de Domínio** (Domain Services), estabelecendo um design centrado na lógica de negócios em vez de nas tecnologias subjacentes.

Para que possamos iniciar uma compreensão acerca de Linguagem Ubíqua (Ubiquitous Language), podemos nos valer da análise semântica do termo ubíquo: `u-bí-quo` (latim _ubiquus_, -a, -um), adjetivo:

- Que está ao mesmo tempo em toda a parte. = `ONIPRESENTE`
- Que tem dom da ubiquidade. = `ONIPRESENTE`
- Que está difundido em todo o lado. = `GERAL, UNIVERSAL`.

De forma conceitual, a linguagem ubíqua é o conjunto de termos e inter-relações que fornecem a semântica da comunicação do domínio, que reflete a visão do negócio. E de forma prática, ao se trabalhar com DDD, entende-se como comunicação de mesma linguagem, em um único modelo, de forma que todos os envolvidos no projeto tenham a mesma compreensão acerca dos termos utilizados. Linguagem ubíqua pode parecer um termo complexo de se compreender, mas outro termo também utilizado para identificar este tipo de comunicação, nos auxilia em uma melhor compreensão: _Linguagem Onipresente_.

**Linguagem Onipresente** é essencialmente os termos, palavras e definições utilizadas por todo o domínio do projeto. É o idioma utilizado no cotidiano da empresa, as terminologias da realidade do negócio. Quando um projeto não respeita a **linguagem do domínio** diversos problemas de comunicação surgem, dificultando o desenvolvimento, implantação e sustentação da solução.

Quando termos utilizados no projeto vão sendo traduzidos, de acordo com o uso em cada departamento, a comunicação se torna anêmica e a assimilação do conhecimento disperso. Em seu livro Domain Driven Design — Atacando as Complexidades no Coração do Software, Eric Evans descreve de maneira clara esta problemática:

> O custo de toda a tradução, além do risco de entendimento errado, é simplesmente muito alto. Um projeto precisa de uma linguagem em comum que seja mais robusta que o mínimo denominador comum.

A Linguagem Onipresente (ubiquitous language) não está limitada a diagramas em <a href="">UML (Unified Modeling Languages, ou Linguagem de Modelagem Unificada)</a>, mas principalmente, define em seu vocabulário nome das classes e operações de destaque. Inclui regras para implantar um dicionário uniforme e explícito para o modelo, para que o mesmo possa ser utilizado com o máximo de eficiência possível.

O **Diagram as code** (Diagrama como código) é uma abordagem de criação de diagramas que utiliza código, em vez de ferramentas gráficas, para desenhar e manter diagramas. Essa abordagem permite que os diagramas sejam criados e atualizados utilizando linguagens de programação ou marcadores, em vez de ferramentas de desenho gráfico. A prática de "Diagram as code" (Diagrama como código) pode auxiliar no Domain-Driven Design (DDD), pois é uma prática útil no DDD que ajuda a manter a documentação atualizada, facilita a colaboração, fornece controle de versão e permite a geração automática de diagramas. Vantagens do "Diagram as code" no DDD:

1. **Melhor documentação**: Com o "Diagram as code", você pode manter a documentação do seu modelo de domínio atualizada e sincronizada com o código. Isso ajuda a garantir que a documentação seja precisa e refletida nas mudanças no código.
2. **Modelagem colaborativa**: O "Diagram as code" permite que os membros da equipe colaborativamente trabalhem no modelo de domínio, tornando mais fácil para os desenvolvedores, especialistas em domínio e outros stakeholders discutirem e refinarem o modelo.
3. **Versão e controle**: Com o "Diagram as code", você pode usar sistemas de controle de versão (como Git) para rastrear as alterações no modelo de domínio. Isso ajuda a garantir que todas as alterações sejam documentadas e possam ser revertidas se necessário.
4. **Geração automática de diagramas**: Muitas ferramentas de "Diagram as code" permitem que você gere diagramas automaticamente a partir do código. Isso pode economizar tempo e reduzir a chance de erros manuais.
5. **Integração com o ciclo de desenvolvimento**: O "Diagram as code" pode ser integrado ao ciclo de desenvolvimento de software, permitindo que os desenvolvedores trabalhem no modelo de domínio em paralelo com o desenvolvimento do código.

As ferramentas permitem que você crie diagramas como código, utilizando sintaxes específicas para desenhar os diagramas. Em seguida, elas geram imagens ou diagramas a partir do código. Algumas ferramentas populares para "Diagram as code" incluem:

- Mermaid
- **PlantUML**
- Graphviz
- C4 (abordagem de modelagem de software)

Normalmente os especialistas de um domínio, diretores, administradores, analistas, técnicos, possuem pouca familiaridade com o jargão técnico utilizado no desenvolvimento de software, mas utilizam os jargões próprios de sua área de atuação. A partir desta realidade, os especialistas de um domínio descrevem superficialmente o que necessitam, fazendo com que desenvolvedores criem abstrações que sustentem o design da aplicação. Com isso, uma compreensão uniforme vai se deteriorando exponencialmente.

Como solução a esta dispersão na comunicação, devemos usar a linguagem baseada no modelo de forma exaustiva até que a comunicação seja fluida e compreensível entre os diversos setores envolvidos no projeto. Para que possamos alcançar esta fluência, os especialistas do domínio devem vetar termos ou estruturas que não transmitam uma compreensão clara acerca das funcionalidades envolvidas; os desenvolvedores devem se empenhar no cuidado com ambiguidades ou inconsistências que possam corromper o modelo proposto. Ou seja, é um esforço conjunto entre todos os envolvidos, mas, é essencialmente necessário que ocorra.

Como identificar os especialistas de domínio? Especialistas de domínio são os profissionais envolvidos no dia a dia da operação, nos mais diferentes setores, ou seja, são os “conhecedores” do negócio (stakeholders). Normalmente estes especialistas são analistas, técnicos, engenheiros, podendo ser todo aquele que possui a compreensão acerca do fluxo de operação da empresa. Os especialistas de domínio detém o conhecimento sobre as necessidades e requisitos necessários para o processamento das atividades organizacionais.

Em essência, o DDD surgiu para enfrentar a complexidade inerente ao desenvolvimento de software em domínios desafiadores, permitindo que os sistemas sejam projetados de forma que o código seja uma expressão direta das regras e processos do negócio. Com o tempo, o DDD ganhou popularidade e passou a ser usado em diversos contextos, especialmente em sistemas corporativos onde o domínio de negócio é complexo e sujeito a constantes mudanças.

Para o sucesso de um projeto de software, o DDD sugere que tanto especialistas de domínio quanto desenvolvedores devem falar a mesma língua.

A figura acima, ilustra a existência de termos que só os especialistas de domínio conhecem e apresentam expressões somente de caráter tecnológico, os quais são de uso apenas do time de desenvolvimento. Contudo, é necessário que exista um conjunto de termos que devem ser de conhecimento universal, no que se refere ao domínio da aplicação, formando a Linguagem Ubíqua do sistema. A definição de uma linguagem onipresente objetiva principalmente dois propósitos:

- Possibilitar uma comunicação fluida entre os membros de equipes multidisciplinares; Nomear elementos do código da aplicação, como classes, métodos, variáveis, funções, módulos, tabelas de bancos de dados, rotas de APIs, etc.

- Ademais a padronização na comunicação propõe elucidar o significado dos termos, de um forma simples, objetiva e compreensível para facilitar os relacionamentos e associações entre todos módulos necessários.

Qualquer pessoa técnica contribuindo para o modelo deve programar, pelo menos tocar no código, independente do papel desempenhado no projeto. Um responsável por mudar o código deve sempre aprender a expressar o modelo através do código. Todo desenvolvedor deve estar envolvido na discussão sobre o modelo e ter contato com os especialistas do domínio. (EVANS, 2016).

Em seu livro Implementando Domain Driven Design, Vaughn Vernon, pontua que um especialista de domínio tem uma forte influência sobre a linguagem utilizada, devido ao maior conhecimento acerca do negócio, que no final é o contexto imperativo de todo projeto. Estes especialistas tendem a ser influenciados pelos padrões da indústria, contudo, uma linguagem universal deve ser centrada em como o próprio negócio pensa e opera. Ou seja, cada empresa possui seu próprio domínio acerca da execução de seus processos.

Não entenda Linguagem Ubíqua como um conjunto de jargões de negócios sendo impostos ao time de desenvolvimento, e nem mesmo uma sobreposição de termos técnicos sobre o contexto de negócio, mas sim, uma linguagem real que é criada por toda a equipe e que é propagada por toda a corporação.

Compreende-se que haverá discordâncias em relação aos termos utilizados e que estão na mente dos especialistas, mas, a partir do uso aberto da linguagem, a evolução é natural e consolidada por este processo de maturação da comunicação.

O DDD enfatiza a compreensão profunda do domínio do problema e o uso de uma linguagem ubíqua compartilhada entre as equipes de desenvolvimento e especialistas do domínio. Ele propõe a organização do código em torno do domínio do problema, separando-o dos detalhes técnicos e infraestrutura. 

Embora o DDD não seja um design pattern em si, ele pode ser combinado com vários design patterns e princípios de design, como Agregado, Repositório, Especificação, Event Sourcing, entre outros. O DDD fornece diretrizes e conceitos para ajudar na criação de uma arquitetura de software robusta e flexível.

Portanto, podemos dizer que o DDD é uma abordagem de design e uma metodologia de modelagem que pode ser aplicada em diferentes arquiteturas de software, como arquitetura em camadas, arquitetura hexagonal, arquitetura de microsserviços, entre outras. Ele fornece princípios e práticas para projetar e estruturar o código em torno do domínio do problema, visando um modelo de domínio rico, desacoplamento e flexibilidade.

É uma abordagem mais ampla para o design de software que abrange vários conceitos e técnicas. DDD enfatiza a modelagem do domínio, a colaboração entre especialistas do domínio e desenvolvedores, e a criação de um código baseado em um entendimento profundo do domínio do problema.

O DDD deve ajudar na modelagem das classes mais importantes e mais centrais do sistema de forma e diminuir a complexidade e ajudar na manutenção das mesmas, afinal este é o objetivo dos princípios de orientação a objetos.

> [!Important]
> Outro ponto é sobre nós desenvolvedores estarmos compartilhando dados com outros sistemas, as rotinas de integração que recebem ou disponibilizam dados para outros sistemas não devem ser "inteligentes". Muitos desenvolvedores acabam modelando suas classes de negócios tentando resolver as questões internas do sistema e, ao mesmo tempo, pensando em como essas classes serão expostas para outros sistemas. Padrões como DTO (Data Transfer Object) que usam objetos "burros" são mais adequados para isso.

Portanto, o DDD não tenta resolver todos os problemas de todas as camadas de um sistema. Seu foco é na modelagem das entidades principais de negócio usando a linguagem adequada daquele domínio para facilitar a manutenção, extensão e entendimento. Particularmente, eu não seguiria à risca o padrão, até porque existem inúmeros padrões e variações de modelagem OO. Estude os princípios por detrás desses padrões, pois eles são geralmente parecidos e veja o que funciona melhor para cada projeto.

A maioria dos softwares não quebra por causa de erros de sintaxe ou lógica if-else falha.

Ele quebra porque as equipes perdem o alinhamento com o problema de negócios que deveriam resolver. Os sistemas se emaranham com suposições técnicas que envelhecem mal. Os recursos são implementados sem considerações de design adequadas. E com o tempo, cada novo requisito cria mais problemas que continuam se acumulando.

Muitas vezes, isso não é um problema de ferramentas. É um problema de modelagem.

O DDD (Design Controlado por Domínio) tenta resolver esse problema de frente. Em sua essência, o DDD é uma maneira de projetar software que mantém o domínio de negócios, não o esquema de banco de dados ou a estrutura mais recente, no centro da tomada de decisões. Ele insiste que os engenheiros colaborem profundamente com especialistas de domínio durante o ciclo de vida do projeto, não apenas para reunir requisitos uma vez e desaparecer nos tickets do Jira. Ele fornece às equipes o vocabulário, os padrões e os limites para modelar sistemas complexos sem serem enterrados na complexidade acidental.

Claro, o DDD não é uma bala de prata. Ele não gera código e não conserta magicamente um monólito legado. Mas oferece algo mais valioso a longo prazo: clareza sobre o que o sistema deve fazer e onde pode mudar.

Essa abordagem se torna especialmente valiosa quando:

- O domínio não é trivial e continua evoluindo. Pense em finanças, saúde, logística ou mercados gigantes.
- Várias equipes estão trabalhando em partes sobrepostas do sistema.
- O código precisa refletir o comportamento do mundo real, não construções técnicas abstratas.

O DDD não se importa se a arquitetura é monolítica ou baseada em microsserviços. O que importa é se o modelo reflete as regras e a linguagem do mundo real do domínio e se esse modelo pode evoluir com segurança à medida que o domínio muda.

Exploramos as ideias centrais do DDD (como Contextos Limitados, Agregados e Linguagem Ubíqua) e explicamos como eles funcionam juntos na prática. Também veremos como o DDD se encaixa nos sistemas do mundo real, onde ele brilha e onde pode falhar.

Essa divisão natural acaba sendo organizada em três grandes agrupamentos: uma **camada de domínio**, uma **camada de aplicação** e uma **camada de infraestrutura**. Mas, novamente, isso não é um dogma do DDD, é apenas a forma como as ideias do DDD funcionam melhor em arquiteturas limpas e separadas:

<table>
 <tr>
  <td><img src="https://github.com/user-attachments/assets/ee84d4c8-e5d3-4469-9a41-8eed9718659c" height="777"></td>
  <td><img src="https://github.com/user-attachments/assets/29d64a52-176c-46d9-8b54-68b9c6be717f" height="777"></td>
  <td><img src="https://github.com/user-attachments/assets/c7b24ba8-f883-4fcf-a89b-6b864209ccd4" height="777"></td>
 </tr>
</table>

No contexto do DDD, existem design patterns específicos que são frequentemente utilizados para ajudar a implementar os conceitos e princípios do DDD. Alguns desses padrões incluem:

1. <a href="">Agregado</a>: Se refere a um padrão de design que agrupa um conjunto de objetos relacionados em uma única unidade coesa. O Agregado é uma das principais construções utilizadas para modelar e organizar o domínio em DDD;

2. <a href="">Repositório</a>: Fornece uma interface para acessar coleções de objetos agregados, permitindo que o domínio permaneça livre de preocupações com persistência. Ele atua como uma camada intermediária entre o domínio e a fonte de dados (como bancos de dados).

3. <a href="">Serviço de Domínio</a>: Representa operações ou ações do domínio que não pertencem naturalmente a uma única entidade ou value object. Encapsula lógica de negócio que depende de múltiplos objetos.

4. <a href="">Value Object</a>: Objetos que não possuem identidade própria e são definidos apenas por seus atributos. São imutáveis e usados para representar conceitos como dinheiro, coordenadas ou medidas.

5. <a href="">Entidade</a>: Objetos do domínio que possuem identidade própria (geralmente um ID) e um ciclo de vida distinto. Diferente de value objects, entidades podem mudar seus atributos ao longo do tempo.

6. <a href="">Factory</a>: Padrão responsável por encapsular a lógica de criação complexa de objetos, especialmente agregados. Evita a poluição do construtor com lógica de montagem de objetos.

7. <a href="">Especificação</a>: Define regras de negócio reutilizáveis e combináveis para verificar se um objeto atende a determinados critérios. É útil para separação de responsabilidades e clareza das regras de domínio.

8. <a href="">Event Sourcing</a>: Técnica onde o estado do sistema é determinado por uma sequência de eventos (ao invés de snapshots de dados). Permite reconstruir o estado do sistema e ter um histórico detalhado das mudanças.

9. <a href="">Injeção de Dependência (DI - Dependency Injection)</a>: Técnica que permite desacoplar componentes do sistema, facilitando testes, manutenção e extensibilidade. No DDD, é comum para injetar repositórios, serviços de domínio e unidades de trabalho nos agregados e serviços de aplicação.

Esses padrões, juntamente com outros conceitos e técnicas, podem ser aplicados para construir uma arquitetura que segue os princípios do DDD. O DDD, portanto, não é um design pattern em si, mas uma abordagem que pode ser implementada usando diversos padrões de design específicos.

<table>
    <tr>
        <td>Camadas do DDD</td>
        <td>Req e Res no Middleware das camadas do DDD</td>
        <td>Camadas dos Microsserviços (Complementares)</td>
    </tr>
    <tr>
        <td><img height="953" alt="ddd_layers" src="https://github.com/user-attachments/assets/a75c9848-9e85-4ecb-b171-821c5b7ba478" /></td>
        <td><img height="953" alt="Application Lifecycle with Middleware" src="https://github.com/user-attachments/assets/6ba7cf1d-470e-4911-aa4e-15e67a431c2c" /></td>
        <td><img height="953" alt="layers-microservices" src="https://github.com/user-attachments/assets/47fc550d-209a-40ff-87b0-11443242afa8" /></td>
    </tr>
</table>

O coração é sempre o **domínio**: entidades, objetos-valor, agregados, repositórios como contratos e os serviços de domínio quando algo não cabe numa entidade específica. Aqui não existe conhecimento técnico como banco de dados, HTTP, mensageria ou UI. É o código que sobrevive quando se troca tudo ao redor. É onde o vocabulário ubíquo vive, onde o modelo mental da empresa vira código executável. É a camada mais estável e a mais valiosa de todas:

Quando você fala dessas **“camadas do domínio”**: entidades, objetos-valor, agregados, repositórios e serviços de domínio, na verdade você está descrevendo **os blocos estruturais internos do próprio Domain Model**, isto é, os elementos que compõem o **núcleo** do DDD. Eles não são camadas no sentido arquitetural, mas sim *componentes conceituais do modelo*, cada um representando um papel distinto dentro da lógica de negócio. E essa distinção é crucial, porque o domínio só fica expressivo e coerente quando cada peça é usada para aquilo que foi criada.

O design orientado por domínio reconhece múltiplos tipos de modelos. Por exemplo, uma entidade é um objeto definido não por seus atributos, mas por sua identidade. Por exemplo, a maioria das companhias aéreas atribui um número único aos assentos de cada voo: essa é a identidade do assento. Em contraste, um objeto valor é um objeto imutável que contém atributos, mas não possui identidade conceitual. Quando as pessoas trocam cartões de visita, por exemplo, elas se importam apenas com as informações do cartão (seus atributos), em vez de tentar distinguir entre cada cartão único.

<table>
    <tr>
        <td><img height="777" alt="0_Ahy_hXrFysq-_j00" src="https://github.com/user-attachments/assets/680cfc97-0f28-42c4-876a-fd5a2ce7a8ed" /></td>
        <td><img height="777" src="https://github.com/user-attachments/assets/28e98845-bfde-4ecb-a5f7-84b24328cdb3"></td>
    </tr>
</table>

Dentro do domínio, as **entidades** representam conceitos que têm identidade persistente ao longo do tempo, mesmo que seus atributos mudem. Elas capturam comportamentos essenciais ligados a um identificador único, como um `Cliente`, um `Pedido` ou um `Veículo`. Já os **objetos-valor** são as estruturas que descrevem características imutáveis, conceituais, que não têm identidade própria, mas têm significado. Eles existem para impedir que o domínio fique cheio de tipos primitivos sem sentido, substituindo-os por tipos ricos, como `Email`, `CPF`, `Placa`, `Endereço` ou `Dinheiro`. Essa relação entre entidades e objetos-valor sustenta a expressividade do vocabulário ubíquo dentro do código.

Modelos também podem definir **eventos** (algo que aconteceu no passado). Um evento de domínio é um evento pelo qual especialistas de domínio se importam. Modelos podem ser ligados por uma entidade raiz para se tornarem um agregado. Objetos fora do agregado podem conter referências à raiz, mas não a qualquer outro objeto do agregado. A raiz agregada verifica a consistência das mudanças no agregado. Os motoristas, por exemplo, não precisam controlar individualmente cada roda de um carro: eles simplesmente dirigem o carro. Nesse contexto, um carro é um conjunto de vários outros objetos (o motor, os freios, os faróis, etc.).

Quando o sistema cresce e você percebe que certas entidades começam a formar agrupamentos naturais de regras e invariantes, entra o conceito de **agregado**. Ele funciona como um limite de consistência: um conjunto de entidades e objetos-valor que sempre deve ser manipulado de forma coerente. O agregado garante que você não mexa em partes internas que não deveriam ser alteradas isoladamente e que toda modificação passe por uma única entidade-raiz. Essa raiz é quem expõe métodos públicos e controla as regras internas do agregado, protegendo sua integridade lógica.

No design orientado por domínio, a criação de um objeto frequentemente é separada do próprio objeto.

Um repositório, por exemplo, é um objeto com métodos para recuperar objetos de domínio de um armazenamento de dados (por exemplo, um banco de dados). De forma semelhante, uma fábrica é um objeto com métodos para criar diretamente objetos de domínio. Já os **repositórios** são contratos dentro do domínio — e isso é importante: contratos, não implementações. Eles definem as operações necessárias para persistir e recuperar agregados, mas não sabem nada sobre banco de dados, ORM, SQL ou infraestrutura. Eles expressam apenas a intenção: “preciso obter esse agregado”, “preciso persistir esse agregado”. A tecnologia que faz isso acontecer vive fora do domínio. O repositório é o ponto de contato mais importante entre o núcleo do domínio e o resto da aplicação, porque permite que o domínio permaneça independente e limpo.

<img src="https://github.com/user-attachments/assets/ee335c88-c613-47f9-8a0c-afbd7f28cc3a" align="right" height="477">

Por fim, os **serviços de domínio** (Domain service) são como espaços auxiliares dentro do modelo. Eles só existem quando uma regra de negócio não pertence naturalmente a nenhuma entidade ou objeto-valor. São operações puramente de domínio, mas sem estado próprio, que coordenam comportamentos entre objetos. 

Muitas vezes representam cálculos, validações complexas, políticas ou decisões de negócio que não cabem dentro de um único agregado. O fato de eles existirem mostra maturidade na modelagem, porque impede que entidades se tornem “deuses” com responsabilidades demais. 

Esse diagrama junta vários conceitos de DDD, microsserviços, Domain Services, CQRS e Event-Driven Architecture, e por isso parece mais abstrato do que realmente é.

O *contextual service* não tem relação com *application context* no sentido técnico de frameworks, mas sim com o contexto de domínio definido pelo DDD. Ele representa um serviço que atua dentro do **bounded context**, carregando as regras de negócio específicas daquele domínio. É um tipo de componente que não é simplesmente uma *service class* de aplicação, mas uma unidade que encapsula conhecimento do domínio e age conforme as regras internas do contexto. Ele existe para isolar o significado, o vocabulário e as invariantes daquele pedaço do sistema, de modo que aquilo que faz sentido dentro daquele contexto não vaze para outro. Ou seja, é um serviço que só funciona dentro do contexto semântico onde ele pertence e é por isso que ele é “contextual”, porque depende do significado local daquele domínio, e não de uma API genérica ou do framework.

Já o *managed state transition event* aparece quando o domínio possui algum tipo de estado que muda com o tempo e essas mudanças têm significado de negócio. Quando um agregado ou entidade passa de um estado para outro, essa transição pode gerar um evento que registra essa mudança para que outras partes do sistema possam reagir. O termo “managed” indica que esse estado é **controlado e validado pelo próprio domínio**, obedecendo invariantes, regras e consistência interna. Portanto, esse tipo de evento é originado quando o domínio aceita, valida e confirma uma mudança de estado, e então emite um evento que pode acionar comportamento assíncrono, projeções, atualizações ou integrações. Não é apenas um evento técnico, mas sim a expressão de uma transformação relevante dentro da lógica da operação.

O *business event*, por sua vez, é o evento de mais alto nível, aquele que traduz uma ocorrência de valor para o negócio. É diferente do managed state transition event porque ele não diz apenas que um agregado mudou seu estado interno, mas que **algo significativo aconteceu dentro da empresa**, algo que outros serviços, contextos e até sistemas externos precisam saber. Esse tipo de evento é emitido quando o domínio reconhece que ocorreu um fato com relevância semântica, como “Pagamento Confirmado”, “Pedido Cancelado”, “Cliente Registrado”. Ele se torna um ponto de integração entre bounded contexts e é geralmente publicado em sistemas de mensageria ou barramento de eventos, servindo de gatilho para fluxos, reações automáticas ou pipelines de consumo. Em termos de EDA e CQRS, é o que permite que projeções atualizem *read models*, ou que outros microserviços sincronizem decisões e comportamentos sem acoplamento direto.

Assim, o diagrama articula três camadas de significado. O contextual service executa lógica de domínio situada no contexto adequado. O managed state transition event registra a mudança interna e valida dentro do domínio. E o business event expõe para o ecossistema aquele fato relevante que deve ser consumido por outros componentes, dando vida à característica distribuída de <a href="https://medium.com/walmartglobaltech/building-domain-driven-microservices-af688aa1b1b8">microservices com DDD e CQRS</a>.

Quando parte da funcionalidade de um programa não pertence conceitualmente a nenhum objeto, ela normalmente é expressa como um *serviço*.

Existem diferentes tipos de eventos no DDD, e as opiniões sobre sua classificação podem variar. Segundo Yan Cui, existem duas categorias-chave de eventos:

- **Eventos de domínio** significam ocorrências importantes dentro de um domínio de negócios específico. Esses eventos são restritos a um contexto limitado e são vitais para preservar a lógica de negócios. Normalmente, eventos de domínio têm cargas úteis mais leves, contendo apenas as informações necessárias para o processamento. Isso ocorre porque os ouvintes de eventos geralmente estão dentro do mesmo serviço, onde seus requisitos são mais claramente compreendidos.

- Por outro lado, **eventos de integração** servem para comunicar mudanças entre diferentes contextos limitados. Eles são cruciais para garantir a consistência dos dados em todo o sistema. Eventos de integração tendem a ter cargas úteis mais complexas com atributos adicionais, pois as necessidades dos ouvintes potenciais podem variar significativamente. Isso frequentemente leva a uma abordagem mais completa da comunicação, resultando em excesso de comunicação para garantir que todas as informações relevantes sejam compartilhadas de forma eficaz.

O que você chamou de “camadas” é, portanto, o conjunto de **padrões que estruturam o modelo de domínio** internamente. Eles servem para que o núcleo do sistema represente a realidade de negócio de forma organizada, expressiva e coerente. Cada um desempenha um papel específico e todos se combinam para formar o coração do DDD. Esses elementos não vivem separados por fronteiras técnicas — eles convivem dentro do mesmo contexto, mas com funções bem definidas. E é exatamente essa organização interna que permite ao domínio permanecer sólido mesmo quando todo o resto do sistema muda.

Ao redor do domínio está a camada de aplicação, que não contém regras de negócio, mas coordena casos de uso. Ela funciona como um orquestrador, chamando o domínio e o que está fora dele para cumprir um fluxo. Esse nível também permanece relativamente estável, mas já conhece elementos mais concretos, como serviços de email, notificações ou repositórios que serão implementados no mundo técnico. Essa camada é a ponte entre a intenção de negócio e a execução tecnológica.

Por fim, a infraestrutura é a camada que toca na realidade: banco de dados, HTTP, mensageria, arquivos, serviços externos, ORM, drivers, tudo que é acoplado à tecnologia. Aqui ficam as implementações concretas dos contratos definidos nas camadas superiores. A infraestrutura depende do domínio, mas o domínio nunca depende dela — essa é a inversão fundamental que mantém a modelagem limpa. Quando se aplica arquitetura hexagonal ou Onion Architecture, o domínio fica no centro e a infraestrutura fica nas bordas, o que reforça a mesma ideia.

Então, quando se fala que DDD tem camadas, a verdade é que ele inspira a criação de camadas porque a modelagem orientada ao domínio exige separação clara entre regras de negócio e tecnologia. É por isso que tantos times que aplicam DDD acabam automaticamente usando Clean Architecture, Hexagonal Architecture ou Onion Architecture: essas estruturas preservam o modelo de domínio e permitem que ele evolua sem ser destruído por detalhes técnicos.

DDD não existe sem essa separação. Ele até poderia ser aplicado em uma bagunça de código monolítico distribuído, mas não funcionaria. O poder do DDD acontece justamente quando o domínio é posto no centro e protegido por camadas que impedem que a tecnologia engula as regras de negócio. Essa divisão natural acaba sendo percebida como “camadas do DDD”, apesar de tecnicamente elas pertencerem mais a estilos arquiteturais compatíveis com DDD do que ao DDD em si.

<img src="https://github.com/user-attachments/assets/b2544370-f786-49e5-8b98-162d68e232b5" align="right" height="377">

O **AOP - Aspect-Oriented Programming** pode fortalecer muito as boas práticas de DDD, TDD e BDD, e essa conexão faz bastante sentido quando entendemos o papel de cada um desses paradigmas dentro de uma arquitetura limpa e organizada. A orientação a aspectos não substitui nenhum deles, mas funciona como uma espécie de tecido estrutural que mantém o código limpo, modular e fiel aos princípios que essas abordagens defendem.

O DDD se beneficia especialmente porque a regra número um do design orientado ao domínio é manter o domínio puro, expressivo e livre de detalhes técnicos acoplados. O AOP ajuda justamente a retirar do domínio tudo aquilo que não é domínio: logs, transações, auditorias, repetição de validações estruturais, políticas de segurança, métricas e qualquer outra funcionalidade transversal. Ao deslocar essas responsabilidades para aspectos, o modelo de domínio permanece limpo e orientado exclusivamente à lógica do negócio, sem anotações excessivas, sem serviços utilitários misturados e sem ruídos que atrapalhem a clareza conceitual do código. Isso deixa o domínio mais próximo da linguagem ubíqua, mais fácil de evoluir e mais coerente com o propósito principal do DDD, que é representar conhecimento e regras do negócio de forma elegante e sustentável.

No caso do TDD, o AOP traz uma contribuição igualmente importante. Quando usamos TDD, queremos testar a lógica de forma isolada, sem que camadas externas interfiram no comportamento esperado. Se o código estiver poluído com logs, tratamentos repetitivos ou preocupações técnicas envolvendo transações ou autenticação, o ato de testar se torna mais difícil, mais lento e mais sujeito a falhas colaterais. O AOP limpa esse cenário ao remover grande parte desse ruído estrutural, permitindo que você escreva testes focados apenas na lógica essencial. Além disso, como os aspectos podem ser desativados ou simulados durante os testes, você consegue um ambiente de testes mais controlado, determinístico e alinhado com o espírito do TDD, que exige ciclos rápidos, previsíveis e com feedback imediato sobre a execução da regra de negócio.

Sobre o BDD, o AOP também se encaixa de maneira natural, porque o BDD exige clareza comportamental e foco na história do usuário ou no comportamento esperado de uma funcionalidade. Quando você descreve um comportamento no formato Given-When-Then, espera que o código reflita essa lógica de forma limpa, sem camadas técnicas misturadas. O AOP impede que esses comportamentos de alto nível fiquem escondidos ou embrulhados por detalhes de infraestrutura, preservando a naturalidade da leitura tanto no código quanto nos testes comportamentais. Isso torna os cenários mais fiéis à linguagem de negócio, diminui ruídos e deixa as tratativas técnicas centralizadas fora do fluxo principal. Em outras palavras, o BDD ganha em clareza, o TDD ganha em eficácia e o DDD ganha em pureza — tudo porque o AOP protege a regra de negócio de interferências externas.

Assim, quando você coloca tudo isso junto, percebe que AOP não é um acessório técnico, mas uma ferramenta arquitetural que sustenta a separação de responsabilidades, reduz acoplamento e melhora a manutenção do sistema como um todo. Ele permite que o domínio seja domínio, que os testes sejam testes e que o comportamento da aplicação seja descrito de maneira simples e coerente. O AOP acaba se tornando um verdadeiro aliado para sistemas que queiram adotar DDD, TDD e BDD de forma madura, escalável e profissional, principalmente em ambientes como o ecossistema Java/Kotlin, onde essa abordagem é amplamente consolidada através de frameworks como o Spring.

<table>
 <tr>
  <td><img src="https://github.com/user-attachments/assets/40876f04-b257-4eca-a7b0-72af3adc66a6" height="777" /></td>
  <td><img src="https://github.com/user-attachments/assets/6f12e517-635b-4959-ac10-0d1c2af6aa25" height="777" /></td>
 </tr>
</table>

Acoplamento e Coesão: Os Dois Princípios para uma Arquitetura Eficaz - Todo grande sistema que sai do controle começa da mesma forma: pequeno, funcional e aparentemente simples. No entanto, à medida que o sistema evolui, as coisas saem do controle.

Uma funcionalidade é adicionada aqui, uma função auxiliar é comprimida ali, e uma dependência "temporária" para alguma tarefa urgente que nunca é removida. Meses depois, a depuração exige passar por cinco camadas de indireção, e tocar em um módulo pode quebrar todo o sistema.

Nos bastidores desse lento colapso, duas forças invisíveis frequentemente brincam de cabo de guerra: acoplamento e coesão.

A maioria dos desenvolvedores ouve esses termos pela primeira vez em livros didáticos ou postagens de blog, frequentemente agrupados em uma lista de verificação de "bom design".

- Alta coesão: bom.
- Acoplamento solto: também é bom.

Mas além dos conceitos, o significado prático muitas vezes se perde. Como é o acasalamento? Quando a coesão se quebra em equipes reais? E por que alguns projetos parecem fáceis de mudar, enquanto outros oferecem desafios a cada pull request?

Acoplamento e coesão não são diretrizes abstratas. São realidades práticas de engenharia que definem o quão fácil o código pode evoluir, quão confiante as equipes podem implantar e quão doloroso se torna incorporar um novo colega ou corrigir um bug sob pressão.

Neste artigo, tentaremos entender o acoplamento e a coesão de forma mais realista e como eles podem se manifestar em diferentes estilos e padrões arquitetônicos.

**DDD - Segregação de Responsabilidade de Consulta de Comando (CQRS)** os comandos são complexos, as consultas são simples, anteriormente, examinamos as Entidades DDD, que têm **estado**, e **Eventos**, onde o estado muda. Para reduzir a complexidade, podemos ser específicos sobre o que tem estado e encapsular onde ele muda. Os eventos são códigos de alto nível, situados no meio da Onion Architecture. Veremos como os comandos de nível inferior vinculam a interface do usuário ou a API a eventos para permitir que os usuários alterem o estado.

<table>
 <tr>
  <td><img src="https://github.com/user-attachments/assets/6ed3f6e0-e3ec-4cf2-a2ae-cc486f510748" height="777"></td>
  <td><img src="https://github.com/user-attachments/assets/99724450-0a18-4e9e-b5e6-f80af13c47d5" height="777" /></td>
 </tr>
</table>

Os eventos de domínio existem no centro de domínio de alto nível de um diagrama Onion Architecture, coberto por Robert C. Martin em Clean Architecture. A camada externa da cebola contém detalhes de baixo nível, entradas e saídas, como armazenamento, interfaces de usuário e APIs. Os comandos estão em algum lugar no meio, vinculando as entradas ao domínio de nível superior para que os usuários possam acionar os eventos para alterar o estado.

<table>
	<tr>
		<td><img width="720" height="313" alt="image" src="https://github.com/user-attachments/assets/2ed856b3-baf7-49f2-bf70-c4d3c52e17f2" /></td>
		<td><img width="720" height="313" alt="image" src="https://github.com/user-attachments/assets/0402fae7-d682-4b35-ba61-7cc365ab3909" /></td>
	</tr>
</table>

Para que um usuário interaja com um sistema e para que ele seja útil, precisamos ser capazes de fazer duas coisas. A primeira é exibir informações para o usuário.

![Screenshot_20251207-215042_Instagram](https://github.com/user-attachments/assets/56297bc0-d597-4148-b26a-acdeb5daa9e7)

O Clean Architecture (CA) é a diretriz de arquitetura de sistemas proposta por Robert C. Martin (Uncle Bob) derivada de muitas diretrizes arquitetônicas como Hexagonal Architecture e Onion Architecture, entre outras. Eric Evans introduziu o conceito de Domain-Driven Design (DDD). Ele escreveu sobre isso em seu livro Domain-driven Design em 2004 (também conhecido como "The Big Blue Book"). O Design Orientado a Domínio é uma abordagem para o desenvolvimento de software que centra o desenvolvimento na programação de um modelo de domínio com uma rica compreensão dos processos e regras de um domínio.

<table>
 <tr>
  <td>Hexagonal Architecture + DDD</td>
  <td>Hexagonal Architecture + Clean Architecture + DDD</td>
 </tr>
 <tr>
  <td><img src="https://github.com/user-attachments/assets/5cf836ff-c109-4afe-9dec-8fb33455bb30" height="777"></td>
  <td><img src="https://github.com/user-attachments/assets/26e7d71b-c8bc-407c-8370-2914904f0306" height="777" /></td>
 </tr>
</table>

Comecei com minha equipe a adotar o Domain-Driven Design (DDD) em nosso trabalho, e nossa missão era tirar o máximo proveito do DDD e do CA, se possível. À medida que a adoção cresce, estamos cada vez mais perto do negócio e do domínio que estamos abordando; começamos a falar a linguagem onipresente do domínio.

<table>
 <tr>
  <td><img height="310" src="https://github.com/user-attachments/assets/223fb00f-a4ad-4ce4-a3ed-97ca8c5a2f3b" /></td>
  <td><img width="800" height="310" alt="hexagonal-architecture-vs-clean-architecture-2 v4-800x310" src="https://github.com/user-attachments/assets/293ade6d-7009-4466-be85-f404646b82aa" /></td>
 </tr>
</table>

> [!Note]
> Não existe tal arquitetura que sirva para todos. Toda arquitetura ou padrão de desenvolvimento de software tem prós e contras; Baseie sua decisão no projeto, no escopo e na equipe. Vamos descrever o caminho que tomamos.

Exemplo: DDD + Hexagonal Architecture - GalleryManager

<img src="https://github.com/user-attachments/assets/e5af5f61-d5e1-4d2f-af36-cab98828ac36" />

Nos concentraremos em como estruturamos o código de acordo com DDD e Clean Architecture, para que o código também fale a linguagem onipresente do domínio com mais facilidade:

Primeiro, dividimos o sistema em partes independentes menores em torno dos subdomínios de negócios por meio de algumas iterações (ferramentas <a href="https://vaadin.com/blog/ddd-part-1-strategic-domain-driven-design">estratégicas de DDD</a>, como tempestade de eventos, narrativa e muito mais). Idealmente, essas partes devem ser implantáveis de forma independente (microsserviços), mas nem sempre é esse o caso. Muitas vezes, podemos ter um código legado que não podemos alterar facilmente, então temos que mantê-lo por um tempo. Nesses casos, temos esses subdomínios em um único projeto (monólito), com cada subdomínio em uma pasta ou pacote separado.

**Estrutura de código de contexto limitado (Bounded Contexts)**: Depois de dividir o domínio extenso em partes menores, também chamadas de subdomínios. Em seguida, tentamos resolver cada subdomínio; Um "contexto limitado" implementará um subdomínio. Cada contexto limitado pode ser um microsserviço separado ou um pacote separado que encapsula esse contexto limitado dentro de um serviço atual. Então, vamos falar sobre essa parte agora, como projetamos cada contexto limitado, quantas camadas de alto nível temos e como elas se comunicariam juntas.

Exemplos de contextos limitados em um sistema de comércio eletrônico

```txt
├───wallet       
├───orderManagement
├───shipping  
├───..
```

<img src="https://github.com/user-attachments/assets/bbbd4c71-4a40-475a-aecb-f934ad00bd1d" align="right">

**Comando vs. Consulta (CQRS)**: A primeira camada que temos em cada contexto limitado são comandos e consultas. O que eles significam?

Todo caso de uso em um sistema pode ser considerado um Comando ou Consulta, onde um Comando é qualquer caso de uso que altera o estado atual do sistema, enquanto uma Consulta é qualquer caso de uso que busca o estado atual SEM mudar o estado atual. Como esses dois têm preocupações diferentes, decidimos usar o padrão CQRS (Command Query Responsibility Segregation)

Então, temos pastas de nível muito alto; Cada uma contém o restante das camadas, que discutiremos mais adiante nesta página para isolar essas duas preocupações.

```txt
├───shipping
|   ├───commands
|   ├───queries
```

**Camadas de Arquitetura**: Ter camadas claras em nosso código onde cada camada tem responsabilidade clara torna adequado para nós identificar a direção da dependência, testar facilmente o código, trabalhar em paralelo sem esperar uns pelos outros, e muito mais.

Concordamos em ter as seguintes camadas

- Camada de domínio
- Camada de Aplicação
- Camada de Infraestrutura

```txt
├───shipping
    ├───commands
        ├───application
        ├───domain
        ├───infrastructure
    ├───queries
        ├───application
        ├───infrastructure
```

Você provavelmente percebeu que a subpasta de consultas não tem camada de domínio! A seção a seguir explicará os motivos por isso.

**Camada de domínio**: A camada de domínio é a parte central de um contexto limitado, contendo o domínio central e todos os invariantes de negócios e a lógica para esse contexto limitado. Não deve depender de nenhuma camada ou biblioteca ou framework de terceiros. Em vez disso, todas as camadas dependem disso. O conteúdo típico nessa camada é o seguinte.

```txt
├───shipping
    ├───commands
        ├───domain
            ├───models
               ├───Shipment
               ├───Order
               ├───ShippingCompany
               ├───OrderStatus
               ├───Receiver
            ├───services
               ├───ShippingService
            ├───events
                ├───ShipmentCreated
                ├───ShipmentDelievered
            ├───contracts
                ├───ShipmentRepo
                ├───OrderRepo
                ├───ShippingCompanyProvider
```

**Componentes do Domínio**: Resumindo, temos modelos de domínio, serviços de domínio, eventos e contratos. Existem principalmente três tipos de modelos de domínio que envolvem a lógica de negócios:

- AggregateRoot,
- Entidade, e
- Objeto de valor.

E qualquer código que não se encaixe em nenhum desses modelos deve ir para um serviço de domínio. Também temos os eventos produzidos pelo **AggregateRoots** sempre que algo muda no modelo. E, por fim, os contratos/interfaces para qualquer domínio de implementação de infraestrutura que possam precisar.

**Camada de aplicação**: Essa camada fina atua como uma API que expõe as funcionalidades do contexto limitado por meio de casos de uso.

É o cliente direto do modelo de domínio, responsável pela coordenação de tarefas (orquestração) dos fluxos de casos de uso. Além disso, ao usar um banco de dados ACID, a camada de aplicação controla as transações, garantindo que a aplicação persista atômicamente as transições de estado do modelo.

> [!Note]
> Nota: É um erro considerar o caso de uso da Aplicação igual ao dos **Serviços de Domínio**. Eles não são. O contraste deve ser marcante. Devemos nos esforçar para colocar toda a lógica de domínio de negócios no modelo de domínio, seja em Agregados, Objetos de Valor ou Serviços de Domínio. Mantenha os Serviços de Aplicação enxutos, usando-os apenas para coordenar tarefas no modelo. (Vaughn Vernon)

Uma camada típica de aplicação consiste em duas pastas, conforme segue:

```txt
├───shipping
|   ├───commands
|       ├───application
|           ├───usecases
|              ├───CreateShipment
|              ├───OrderConfirmedEventHandler
|           ├───models
|               ├───CreateShipmentRequest
|               ├───OrderConfirmedEvent
|   ├───queries
|       ├───application
|           ├───usecases
|              ├───ListShipments
|           ├───models
|              ├───ListShipmentsQuery
```

Implementamos uma classe separada por caso de uso; Cada classe contém um único método chamado executar algo como <a href="https://refactoring.guru/design-patterns/command">padrão de comando</a>

Existem três tipos de casos de uso:

1. **Solicitar para fazer algo** (`CriarEnvio`, `AtualizarStatusEnvio`)
2. **Consultar algo** (`GetShipments`)
3. **Manipulador de Eventos** (`OrderReceivedEventHandler`)

**Camada de infraestrutura**: O trabalho da infraestrutura é fornecer capacidades técnicas para outras partes da nossa aplicação. Ele contém qualquer implementação de banco de dados, IOs ou rede, como MongoDB, Postgres, serviços analíticos, controladores, acesso ao sistema de arquivos ou cache de memória.

É útil manter uma mentalidade de Princípio da Inversão de Dependência. Então, onde quer que as camadas de aplicação ou domínio precisem de detalhes de infraestrutura, dependemos de interfaces. Então, quando um caso de uso de aplicação consulta um repositório, ele dependerá apenas da interface do modelo de domínio, mas usando a implementação da infraestrutura.

Um diagrama simples para ilustrar como isso funciona é o seguinte.

![1_avfevQaNbjyHxKj9D4YYJQ](https://github.com/user-attachments/assets/09dd1b31-43f0-4a0b-9345-170c40d48d99)

O Serviço de Aplicação depende da interface do Repositório do modelo de domínio, mas utiliza a classe de implementação da infraestrutura. Os pacotes abrangem amplas responsabilidades.

```
├───shipping
|   ├───commands
|       ├───infrastructure
|           ├───controllers
|           ├───services
|           ├───repositories
|           ├───..
```

**Repositórios**: Repositórios são classes ou componentes que encapsulam a lógica necessária para acessar fontes de dados. Eles centralizam funcionalidades comuns de acesso a dados, proporcionando melhor manutenção e desacoplando a infraestrutura ou tecnologia usada para acessar bancos de dados a partir da camada do modelo de domínio.

Para cada agregado ou raiz agregada, você deve criar uma classe de repositório.

Criamos uma classe de repositório para cada agregado ou raiz agregada, já que a raiz agregada não permite acesso direto às suas entidades filhas para impor variantes agregadas. Precisamos puxar todo o agregado do banco de dados, realizar ações e salvá-lo.

> Dito isso, tenha cuidado ao projetar seu agregado para evitar penalidades de desempenho. Por exemplo, não projete uma raiz agregada contendo uma lista de entidades que aumenta ao longo do tempo. Você precisará extrair uma parte significativa dos dados toda vez que operar com esse agregado. Como resultado, você pode acabar com uma operação muito lenta e, pior ainda, OutOfMemory!.

Algo como uma raiz agregada de carteira com uma lista de transações é um exemplo de um design ruim desse tipo; A transação de uma carteira aumenta com o tempo. Existem múltiplas soluções para esses casos; Uma delas é usar event sourcing.

O último ponto a mencionar aqui é que o repositório esconde diferentes fontes de dados usadas da camada de domínio para que possa usar MongoDB e Redis sem alterações na interface.

**Controladores**:
- Nos esforçamos para ter um único controlador por API. Por exemplo, `GetUserController` e `SaveUserController`. Um controlador único por API mantém os controladores menores e diretos ao ponto.
- Um controlador recebe a solicitação, a mapeia para o modelo de Aplicação, chama o caso de uso apropriado da aplicação e mapeia o resultado para a entidade de resposta desejada.

**Como é um fluxo completo?** Os dois diagramas a seguir explicam a implementação de cada fluxo típico.

<table>
 <tr>
  <td>Fluxo Típico de Comando:</td>
  <td>Fluxo típico de consulta:</td>
 </tr>
 <tr>
  <td><img src="https://github.com/user-attachments/assets/105e10ee-f3ab-45fe-a6de-5ca671d335c2"></td>
  <td><img src="https://github.com/user-attachments/assets/1dbbc0f6-9d52-4a4a-9136-8ea68e554d93"></td>
 </tr>
</table>

Novamente, não existe uma arquitetura que sirva para todos. Toda arquitetura ou padrão de desenvolvimento de software tem prós e contras; Baseie sua decisão no projeto, no escopo e na equipe.

**Padrões de Arquitetura de Integração Empresarial - Redações sobre arquitetura**

<img width="720" height="484" alt="image" src="https://github.com/user-attachments/assets/0943cefd-3069-43a6-8c6f-e9609ca22a56" />

A perspectiva: Sistemas de TI interagem e, portanto, se integram pelos mesmos motivos que as pessoas.

1. Quando precisamos de informações de outras pessoas para o nosso trabalho
2. Quando precisamos de alguém para fazer algo por nós
3. Quando queremos socializar com alguém

Os exemplos correspondentes de TI são uma chamada de API para uma consulta, uma operação e um cheeping de keep-alive/checagem de saúde (com IA, pode surgir uma verdadeira socialização entre sistemas de TI). Eles também são os tipos de interação mais comuns para os menos comuns.

A empresa se preocupa com a interação entre sistemas tecnológicos e os humanos envolvidos nos processos de negócios. Estes últimos podem ser clientes, funcionários e parceiros. Nem tudo pode ser automatizado, e há humanos nas extremidades ou dentro de sequências de eventos, e precisamos torná-los igualmente parte da solução.

A integração de sistemas é cara e frequentemente o ponto de falha. Assim como nas pessoas, os seguintes princípios tornam a interação entre os sistemas rápida, eficiente e espaçosa.

1. A especialização de responsabilidades (coesão)
2. A falta de importância de saber como algo funciona ou fornece informação (acoplamento frouxo)
3. Uma comunalidade de linguagem (protocolos padronizados)

**Como pensar em integração**: Integração não é apenas HTTP, REST e algum FTP ou SQLNet antigo em segundo plano. É uma área arquitetônica e disciplina interessante e complexa. Não existe uma única forma de encarar isso. Eu vejo isso sob seis pontos de vista que nos permitem criar requisitos sólidos de arquitetura de integração, declarações de problemas e soluções.

Esses pontos de vista de integração, dos mais amplos aos mais detalhados, são

Escopo da integração empresarial → Hierarquia de padrões de integração empresarial → Padrões de integração de aplicações → Integração horizontal das camadas dos sistemas → integração sem estado versus com estado → Segurança da integração

(Usaremos terminologia arquitetonicamente relevante do Design Orientado por Domínio, especialmente os termos específicos de DDD para camadas — UI, Aplicação, Domínio e Infraestrutura. Outros termos DDD estão em itálico. Por favor, consulte meus artigos sobre Arquitetura Orientada por Domínio Parte I e II.)

Uma vez que você entenda a integração sob os pontos de vista abaixo, poderá definir e resolver problemas de integração de forma holística, eficiente e eficaz.

**Ponto de Vista 1: O escopo da integração empresarial**: É útil começar com uma visão de onde as interações estão acontecendo, pois isso influencia sua natureza e soluções.

**Intra-Domínio**: Integrações dentro de um domínio de negócios são as mais comuns. Eles conectam sistemas relacionados com arquitetura e modelos de design semelhantes (assumindo o Domain Driven Design). Isso permite mapas de contexto mais simples entre contextos limitados e integrações mais diretas, com menos preocupações de capacidade e escalabilidade: por exemplo, integração entre um sistema de Gestão de Estoque e um Sistema de Compras.

**Interdomínio**: As integrações entre domínios de negócio são menores, mas apresentam mais desafios. A Linguagem Ubíqua provavelmente diferirá em cada domínio, e a carga útil de dados e os objetos de resposta frequentemente precisam ser transformados nas interações. A infraestrutura também pode ser separada um pouco ou muito, introduzindo a necessidade de várias funções de suporte (veja ponto de vista #2 abaixo) para uma integração bem-sucedida, por exemplo, integração entre um Sistema de Gerenciamento de Pedidos no domínio de vendas com um Sistema de Gerenciamento de Relacionamento com o Cliente no domínio de atendimento ao cliente.

**Inter-Empresas**: A integração entre empresas parceiras em cenários B2B e B2B2C está aumentando exponencialmente com os serviços modernos de web e digitais. Felizmente, os padrões de integração de serviços e serviços em nuvem acompanharam as arquiteturas emergentes da web, mobile e digital, atendendo às necessidades de serviços integrados confiáveis, rápidos e rápidos em escala, seguros e ágeis, desenvolvendo serviços integrados que abrangem de duas a dezenas de empresas em ecossistemas como eCommerce, logística, viagens, automotivo, manufatura, companhia aérea, bancos e serviços financeiros.

A imagem abaixo ilustra esse ponto de vista:

![1_z2eWnKg4fEFYP58W-pwNiQ](https://github.com/user-attachments/assets/fb4185f4-7d02-47bb-9583-f5b74695f830)

**Diretrizes**: Considere cada tipo de integração acima separadamente por suas características e os cinco pontos de vista abaixo para personalizar as arquiteturas de integração.

**Ponto de Vista 2: Hierarquia dos padrões de integração empresarial - Hierarquia de funções de negócio**

- **BPM** — A gestão de processos de negócios coordena pessoas, sistemas, informações e coisas para produzir resultados de negócios para os domínios e subdomínios da empresa. Exemplos são design de produto, fabricação, marketing, aquisição de clientes, vendas, etc. A arquitetura BPM automatiza a integração dinâmica dos processos de negócios na máxima medida possível para fornecer resultados bem definidos, repetíveis, eficientes e confiáveis.

- **Fluxo de trabalho** — Um fluxo de trabalho é uma sequência definida de tarefas realizadas por sistemas e humanos trabalhando juntos para entregar uma tarefa de negócio. Pode ser considerado um subconjunto de um processo de negócios. Um exemplo é o fluxo de aprovação de um empréstimo empresarial. A arquitetura de workflow integra sistemas de TI e humanos para a iniciação, roteamento, suporte analítico à decisão, etapas manuais, tarefas automatizadas, coordenação e monitoramento dos fluxos de trabalho.

- **Integração de sistemas** — Em um cenário de TI bem projetado, a funcionalidade é dividida em sistemas coesos que mapeiam capacidades de domínio e subdomínio de negócio. Esses sistemas devem trabalhar juntos para entregar resultados úteis para fluxos de trabalho e processos de negócios. A integração de sistemas automatiza a cooperação dinâmica deles. (Leia este artigo para saber mais sobre os tipos de sistemas que precisam ser integrados → Uma Abstração Prática de Sistemas de TI Funcionais.)

- **Integração de componentes** — Todos os sistemas de TI são segregados internamente em componentes e subcomponentes coesos e fracamente acoplados. Esses são integrados usando padrões padrão (veja ponto de vista #4 abaixo) para entregar as funções externamente úteis do sistema.

A imagem abaixo ilustra esse enquadramento:

![1_3RtjdjHqylQ18CN8N9WmGw](https://github.com/user-attachments/assets/d758ba0e-a9ea-4ed2-b1a8-e1ce9f679682)

**Hierarquia técnica de funções**: A integração é cara e deve ser o mais simples possível. O quão difícil e propenso a problemas será depende da maturidade dos sistemas de TI (ou seja, aplicações). Quando sistemas/serviços cliente e servidor se comunicam como parte de um processo de negócio, algumas ou todas as seguintes funções podem ser necessárias.

1. **Retentando** — o servidor não responde na primeira tentativa
2. **Mensagens** — o servidor não pode ser contatado diretamente
3. **Gerenciamento de carga** (fila, balanceamento, pooling de conexão) — o servidor pode responder a um número limitado de solicitações por unidade de tempo
4. **Publicar-assinar** — o servidor possui informações que um ou mais consumidores podem obter enquanto estão atualizadas
5. **Transformação de objetos** — o cliente e o servidor trabalham com pacotes de dados suficientes, porém diferentes.
6. **Transformação de protocolo** — cliente e servidor não usam o mesmo protocolo de comunicação
7. **Conversão sincronizada** — o cliente espera uma resposta online enquanto o servidor é projetado para uma resposta offline ou espera uma resposta offline enquanto o servidor é projetado para uma resposta online.
8. **Fusão de funções ou dados** — o cliente deve ser atendido a partir de uma combinação de mais de uma operação ou repositório de informações.
9. **Roteamento** — o servidor correto deve ser alcançado com base em regras
10. **Orquestração** — uma sequência de operações deve ser realizada para responder ao cliente, e a lógica está em um único lugar. (Coreografia é um conceito relacionado, onde a lógica de ação e sequência são distribuídas nos serviços participantes; no entanto, sua capacidade funcional é limitada, e geralmente há um orquestrador centralizado de algum tipo, mesmo que seja apenas um conjunto de regras de referência passivo.)
11. **Gerenciamento de versões** — diferentes clientes precisam de versões diferentes da mesma operação
12. **Segurança** (veja ponto de vista #6 abaixo) — o cliente e o servidor precisam ser protegidos de uma ou mais maneiras

Quanto mais dessas necessidades os sistemas cliente e servidor atendem internamente, menos o arquiteto de integração precisa fornecê-las externamente. Em outras palavras, a arquitetura da aplicação e da informação influenciam significativamente a complexidade e o custo da arquitetura de integração para construir e operar.

Normalmente, haverá algumas funções de integração externas que precisamos atender. Mas quanto mais direta e simples a integração, melhor.

**Padrões e plataformas de soluções de integração intermediária**: Os padrões de solução de integração externa são os seguintes, em ordem crescente de escopo. Tecnicamente, eles não são padrões arquitetônicos, e alguns se sobrepõem funcionalmente. Então, compreenda as diferenças deles e use os termos com cuidado.

1. **RPC** — uma chamada de procedimento remoto (RPC) é quando um programa de computador faz com que um procedimento (sub-rotina) seja executado em um espaço de endereçamento diferente (comumente em outro computador em uma rede compartilhada), codificado como se fosse uma chamada de procedimento comum (local), para simplificar a programação e não precisar lidar com detalhes de rede, protocolo e sistema operacional, etc.

2. **Integração intra-app** — interações entre as camadas de UI, aplicação, domínio e repositório de um sistema (termos DDD; ou UI, lógica de negócio e camadas de banco de dados em terminologia mais antiga), por exemplo, entre a interface e a camada de lógica de negócios (usando protocolos HTTP(s)) e entre a lógica de negócio e a camada de banco de dados (usando TNS/TTC sobre protocolos TCP/IP para o Oracle DB).

3. **API de Leitura (DAL)** — uma API de leitura ou Camada de Acesso a Dados é uma camada comum de integração em Fontes de Dados Operacionais (ODS), Bancos de Dados de Sistemas de Informação de Gestão (MIS DBs) e camadas de negócios de BI acessadas por transações de leitura OLTP e OLAP.

4. **API** — Uma Interface de Programação de Aplicações é uma interface de software para comunicação entre sistemas de TI. Uma API geralmente suporta múltiplas operações. O projeto é guiado pela padronização das assinaturas de funções e protocolos de rede, e um documento de especificação da API é publicado. APIs frequentemente possuem várias versões disponíveis para diferentes clientes. A descoberta dinâmica e a vinculação de APIs e operações por clientes durante a execução também podem ser suportadas.

5. **API GW** — um API Gateway realiza uma combinação de padrões arquitetônicos como fachada, adaptador, mediador e (reverso) proxy. Ele recebe chamadas de clientes e as roteia para os serviços que estão por detrás dele, enquanto fornece funções como roteamento, limitação de taxa, transformação de protocolo, agregação, segurança, versionamento, logs, etc.

6. **Sistemas de Mensagens** — o padrão de integração de mensagens permite que os sistemas sejam acoplados de forma fraca por meio da comunicação assíncrona, tornando a comunicação mais confiável porque os dois sistemas não precisam funcionar simultaneamente. O sistema de mensagens é responsável por transferir dados de um sistema para outro, para que possam focar nas informações que precisam compartilhar e não gerenciar a interação ativamente. É como um serviço de cartas postal.

7. **Sistemas de Fila (de Mensagens)** — o padrão de fila estende o padrão de comunicação assíncrona da Mensagem, fornecendo um pipeline onde múltiplas mensagens podem ser armazenadas sequencialmente por sistemas clientes ou servidores até que sejam consumidas, geralmente em um sistema de Primeiro Entrado, Primeiro a Sair (FIFO), ou se tornem obsoletas. Mensagens de solicitação são colocadas em filas pelos sistemas clientes e captadas e atendidas com mensagens em filas de resposta pelos sistemas de serviço. Filas aumentam a confiabilidade e o throughput líquido e reduzem a perda de dados. Esse acoplamento frouxo permite o desenvolvimento independente e ágil dos sistemas. Gerenciar as filas e seu conteúdo, envelhecimento, escalonamento, registro, etc., são funções fornecidas pela plataforma de fila de mensagens. É como fazer fila para comprar um ingresso para um filme.

8. **Sistemas de Publicação-Assinatura** — o padrão de publicação é um padrão de comunicação assíncrono e fracamente acoplado para que um sistema de serviço disponibilize informações ou funções às quais clientes interessados possam se inscrever. É como publicar jornais e assinar por leitores interessados.

9. **ESBs** — Um Barramento de Serviços Empresariais combina múltiplas funções de integração, como mensagens, fila, publicação-assinatura, roteamento, transformação de protocolo, transformação de objetos, etc., em uma única plataforma de software. Elas são uma das plataformas EAI mais comuns (veja abaixo).

10. **Plataformas EAI** — de modo geral, as plataformas de Integração de Aplicações Empresariais podem fornecer todas as 12 funções de integração abordadas na seção de Hierarquia de Funções Técnicas acima e os tipos de solução 2 a 9 acima.

11. **Gerentes de Fluxo de Trabalho** — Plataformas de fluxo de trabalho integram os sistemas e as pessoas para a iniciação, roteamento, suporte à decisão, ações manuais, tarefas automatizadas, coordenação e monitoramento da sequência de etapas realizadas por sistemas e humanos juntos para uma tarefa de negócio.

12. **Gerentes de Processos de Negócios** — Plataformas BPM automatizam a integração dinâmica dos processos de negócios para fornecer resultados bem definidos, repetíveis, eficientes e confiáveis. Eles geralmente cobrem serviços de descoberta, análise e otimização.

**Diretrizes**: O que é necessário para a integração surge organicamente da arquitetura de aplicações e informações e dos processos e fluxos de trabalho de negócios que eles atendem. Mas, às vezes, há uma decisão a ser tomada se devemos refatorar aplicações para melhor integração ou usar uma plataforma externa.

O teste de tornasol mostrado abaixo nos ajuda a identificar a necessidade de apoio externo. Se a pontuação for baixa, é recomendável refatorar as candidaturas.

![1_PK-NK06VqiotZH4pAYFX1w](https://github.com/user-attachments/assets/af65c83d-26d1-47af-a9fb-8a851c2426d8)

**Ponto de Vista 3: Padrões de integração de aplicativos**: Desde o início, os padrões de design de aplicações incluíram padrões de integração. Alguns desses fatores estão alinhados com o pensamento arquitetônico; Podemos nos adaptar e adotá-los. O livro 'Gang of Four' sobre Padrões de Design de Aplicações aborda os seguintes temas arquitetonicamente relevantes, que são brevemente descrevidos. Como arquiteto de aplicações e integração, aprenda e use esses padrões.

- **Facade** — Fornece uma interface unificada para um conjunto de interfaces em um subsistema. A Facade define uma interface de nível superior que torna o subsistema mais fácil de usar. Por exemplo, uma fachada de API para Order reúne as interfaces de múltiplos subsistemas subjacentes, como ManageStock, CheckPayment, FulfilOrder, etc.

- **Adapter** — Converte a interface de uma classe em outra interface que os clientes esperam. O adaptador permite que classes trabalhem juntas que, de outra forma, não poderiam por causa de interfaces incompatíveis. Em termos arquitetônicos, pense em sistema, aplicação, componente ou subcomponente em vez de classe. Por exemplo, um PaymentGWAdapter preenche um campo de tipo cliente obrigatório exigido por uma interface de sistema de pagamento com um valor padrão para um cliente que não o fornece.

- **Proxy** — Fornece um substituto ou substituto para outro objeto controlar o acesso a ele. Funcionalmente, eles podem ser ainda divididos em Proxy Remoto (representação local de uma API remota), Proxy Virtual (fornece cache e acesso backend sob demanda), Proxy de Proteção (acesso de controle baseado em funções e regras) e Proxy Auxiliar (fornece serviços adicionais como contagem, registro, etc.). Por exemplo, uma CDN (rede de entrega de conteúdo) usa um proxy reverso para segurança, balanceamento de carga e escalabilidade.

- **Observer** (também conhecido como Publicar-Assinar) — Define uma dependência de um para muitos entre objetos para que todos os seus dependentes sejam notificados e atualizados automaticamente quando um objeto muda de estado. (O padrão de Arquitetura Orientada a Eventos é um caso de um padrão de integração de aplicação por observador ou publicação-assinatura.) Por exemplo, se o cronograma de voo de uma companhia aérea (assunto) mudar e vários portais de viagem (observadores) precisarem saber disso, um padrão de Observador ou Publicar-Assinar os integra usando notificações, solicitações, etc.

- **Mediator** — Define um objeto que encapsula como um conjunto de objetos interage. Mediador promove o acoplamento frouxo ao impedir que objetos se refiram explicitamente uns aos outros e permitir que você varie sua interação de forma independente. Por exemplo, uma plataforma de comércio eletrônico se comunica com vários gateways de pagamento por meio de um mediador para que todos possam mudar de forma independente.

- **Camada Anticorrupção** (esse padrão vem do DDD) — Quando sistemas baseados em diferentes modelos são combinados, a necessidade do novo sistema se adaptar à semântica do outro sistema pode levar à corrupção do modelo do novo sistema. Crie uma camada isolante para fornecer aos clientes funcionalidades em termos do modelo de domínio deles. A camada se comunica com o outro sistema por meio de sua interface existente, exigindo pouca ou nenhuma modificação no outro sistema. Internamente, a camada se desloca em ambas as direções conforme necessário entre os dois modelos. Por exemplo, um aplicativo de banco móvel comunica-se com um sistema bancário central legado por meio de uma ACL que separa a verificação de crédito das ordens combinadas em uma única função no sistema legado.

**Diretrizes**: Adote o <a href="https://medium.com/analysts-corner/domain-driven-architecture-design-for-excellent-it-systems-ii-primer-5ae6c6b8f7de">Design de Arquitetura Orientado por Domínio</a>, pois ele leva naturalmente aos contextos limitados, arquiteturas de subdomínio e mapas de contexto que orientam a escolha dos padrões de integração intra e inter-sistema.

**Ponto de Vista 4: Integração horizontal das camadas dos sistemas**

**Integração horizontal na camada UI**: As integrações horizontais na camada de UI estão aumentando, impulsionadas pela tendência de 'montar' aplicações combinando serviços prontos para uso, como buscas de produtos, portais de comércio eletrônico, gateways de pagamento, etc. Vamos considerar isso nos três tipos típicos de interfaces.

1. **Aplicações Estáticas de Página Única (SPAs)** — São aplicativos mais simples, onde toda a funcionalidade está contida em uma única página, totalmente atendida por um ou mais sistemas backend. Por exemplo, Gmail, Google Maps, Twitter, Facebook, etc. A integração de interface horizontal é menos comum em SPAs.
2. **Aplicações Multi Page Estáticas (SMPAs)** — Cada página nessas interfaces fornece um conjunto coeso de funcionalidades do usuário, por exemplo, uma interface ERP. Existem diferentes páginas para contas de usuário, pedidos, suporte, etc. Cada página pode ser bastante independente das outras e conectada a um componente backend separado ou a sistemas parceiros 'white label'. Eles estão integrados de forma frouxa em um portal web ou aplicativo móvel, mas o visual e a sensação são consistentes em todas as páginas.
3. **Aplicações Dinâmicas Multi Página (DMPAs)** — Nessas aplicações, existe um conjunto central de páginas conectadas aos componentes principais do backend, mas as tarefas do usuário também percorrem páginas povoadas por sistemas em outros domínios da mesma empresa ou por sistemas de parceiros, todos os quais podem não ser 'white label'. Por exemplo, um site de comércio eletrônico. Nesses casos, a aparência e a sensação das páginas externas podem ser um pouco ou muito diferentes e mudar com o tempo. Também pode variar entre versões web e mobile da mesma tarefa.

A maior parte da integração horizontal da camada de interface é realizada pela integração horizontal da camada de aplicação (DDD) conforme abaixo, incluindo projetos como portais com uma coleção de portlets de diferentes sistemas.

**Integração horizontal na camada de aplicação**: Eric Evans define a camada de aplicação para DDD como 'Define os trabalhos que o software deve realizar e objetos de domínio expressivos para resolver problemas. As tarefas pelas quais essa camada é responsável são significativas para o negócio ou necessárias para a interação com as camadas de aplicação de outros sistemas. Essa camada é mantida fina. Ele não contém regras de negócio ou conhecimento, mas apenas coordena tarefas e delega trabalho para colaborações de objetos de domínio na camada seguinte. Não possui um estado que reflita a situação do negócio, mas pode ter um estado que reflita o progresso de uma tarefa para o usuário ou para o programa.'

Por sua natureza, a camada de aplicação pode se integrar horizontalmente a sistemas externos, desde que haja pouca ou nenhuma necessidade de preparar os dados para a camada de apresentação ou de persistir dados conforme as regras de negócio no backend. Esse tipo de integração horizontal da camada de aplicação (por exemplo, Javascript rodando no navegador) está aumentando, impulsionado pela tendência de 'montar' aplicações combinando serviços prontos a usar, como catálogos de produtos e serviços, eKYC, verificações de crédito, APIs de pagamento, etc. Um exemplo de padrão para isso é o CORS - Cross-Origin Resource Sharing.

**Integração horizontal na camada de domínio**: Esse ainda é o padrão de integração horizontal mais comum. Objetos da camada de domínio podem ser criados especificamente para chamar principalmente sistemas externos, preparar a resposta para as camadas de aplicação e UI, e atualizar o estado do negócio no armazenamento persistente na camada de infraestrutura. Objetos de negócios focados em domínio também podem precisar fazer chamadas externas como parte de seu processamento.

**(Infraestrutura) Integração horizontal da camada de persistência**: A integração horizontal de repositórios de dados persistentes na camada de infraestrutura é necessária e inevitável. Por favor, veja este artigo meu para entender as motivações para integrações de dados → Padrões e Progressão do Repositório de Dados Corporativos.

O arquiteto de integração deve considerar os seguintes aspectos para otimizar o design da integração e selecionar os métodos, protocolos e tecnologias apropriados.

- Os dados podem se mover em forma bruta, modificada ou enriquecida entre sistemas
- Pode ser um subconjunto (geralmente) ou todos os dados originais
- Modificações ou transformações podem ser feitas na fonte, no caminho ou no sistema receptor
- Ele pode se mover em tempo real, quase em tempo real ou com atraso (também podemos falar disso como online vs offline; ou tempo real vs lote)
- Pode ser o dado unitário ou agregado (estes últimos por tamanho ou tempo)
- Requisitos de criptografia, compressão e segurança

A imagem abaixo ilustra o ponto de vista horizontal.

![1_NLhrGlQLUu8hiyAJmxRbdw](https://github.com/user-attachments/assets/3ec0a018-7e6f-4998-8294-45cc32e937ba)

**Diretrizes**: O arquiteto de integração deve considerar cuidadosamente como tornar a experiência do usuário intuitiva e fluida por meio dos padrões de solução nos pontos de vista #2 e #5, além da gestão de capacidade e desempenho.

**Ponto de Vista 5: Padrões de integração sem estado para aplicações web e digitais**: No mundo da web e dos serviços digitais, ser 'sem estado' é apresentado como uma solução mágica para componentes não persistirem dados ou não se importarem com o passado e o futuro, e magicamente alcançarem alto desempenho, escalabilidade e desenvolvimento ágil. Mas nenhum sistema ou tarefa empresarial útil pode ser sem estado. Seria informe ou preso no tempo e não teria muita utilidade. (Para mais informações, veja este excelente artigo.)

Mas a ideia por trás do equívoco de 'apatridia' é útil quando a desambiguamos. Ela permite que arquiteturas entreguem rapidamente serviços digitais de negócios ao montar serviços web. E aproveita a distribuição cada vez mais igualitária do poder de processamento entre servidores e dispositivos do usuário.

Um modelo proeminente para arquiteturas sem estado é o REST — Transferência de Estado Representacional. Funciona bem com o modelo de arquitetura em camadas do DDD. (Por favor, veja o livro de Vernon 'Implementing DDD' para mais informações sobre isso.)

Vamos analisar a justificativa por trás da apatridia em termos das três decisões arquitetônicas típicas (veja →As 3 Decisões Arquitetônicas Mais Importantes)

1. **Decisão sobre a Arquitetura de Colocação de Funções**:
**Problema**: Para o mundo digital, web e móvel, como podemos construir serviços backend e parceiros como enxames de unidades de servidores idênticas que crescem suavemente (de algumas para pontuações) com o número de clientes (milhares a centenas de milhões)?
**Pensamento Arquitetônico**: Se os sistemas de serviço mantêm o estado em tempo real do usuário e da tarefa, a interface deve permanecer no mesmo backend até que a tarefa seja concluída. Isso desperdiça recursos em todo o ecossistema do ecospero, limitando o número de clientes que podem ser atendidos e escalando rapidamente com o número de clientes ativos.

E se transferirmos essa responsabilidade em tempo real sobre o conhecimento do usuário e do estado da tarefa (por exemplo, logado, check-out, etc.) para as camadas de UI e Aplicação (terminologia DDD)? Assim, podemos aliviar a camada de domínio nos sistemas primários e parceiros da necessidade de um estado. Deixe que eles gerenciem apenas o estado de negócio não em tempo real e offline (por exemplo, papel do usuário, status do inventário, etc.) e persistam na camada de infraestrutura.

Quando diferenciamos o estado do usuário/tarefa do estado de negócio e sua natureza em tempo real versus não em tempo real dessa forma, toda a vantagem da apatridia se encaixa.

**Decisão**: Faça da instância cliente da interface o componente fixo ou 'fixo' do ecossistema para manter o contexto da sessão e do estado. Aliviar os componentes do servidor e as aplicações/serviços do ecossistema de suporte da necessidade de persistir ou ficarem pegajosos por meio de conhecer ou ter um estado em tempo real.

2. **Decisão sobre a Arquitetura do Repositório de Informação**: Existem três tipos de informação envolvidos.

1. **Informações de estado em tempo real** — Estado do usuário e da tarefa que muda rapidamente conforme o caso de uso avança, por exemplo, logado, finalizado no pagamento, desconectado, etc. Essa é uma informação temporária e transitória. Mantenha na camada de aplicação cliente (termo DDD) perto da memória.
2. **Informações de contexto em tempo real** — Informações ambientais e de usuário que mudam menos rapidamente conforme o caso de uso, por exemplo, tipo de dispositivo, sistema operacional, geolocalização, usuário anônimo ou identificado, companhia aérea selecionada, etc. Mantenha isso na camada de aplicação cliente (termo DDD) em lojas locais semi-permanentes como cookies, etc.
3. **Informações não em tempo real e de longo prazo do Estado dos Negócios** — Informações empresariais que precisam ser mantidas por minutos a anos, por exemplo, usuários, contas, perfis, pedidos, estoque, pagamentos, histórico de serviço, mídia, etc. Mantenha em caches do lado do servidor, RDBMS, arquivos, Hadoop e outros repositórios de armazenamento apropriados.
Portanto, vemos que a necessidade de informação e seu armazenamento permanece em arquiteturas focadas sem estado. Clientes e sistemas de cache gravam dados temporários na memória ou em armazenamento local em disco.

E a maioria dos serviços backend e parceiros armazena dados de longo prazo em bancos de dados centrais. Esses bancos de dados centrais ainda podem ser um ponto de disponibilidade e problemas de desempenho. No entanto, o compromisso é aceitável pela sua relação custo-benefício, já que os dados de longo prazo são volumosos e não podem ser facilmente replicados como os componentes de lógica de negócios da camada de domínio.

3. **Método de integração Decisão de arquitetura**

**Problema**: (1) Como os clientes com estado devem interagir com backends sem estado e sistemas parceiros? (2) Como os sistemas backend sem estado devem interagir com outros sistemas sem estado?

**Interação com estado**: Essas interações ocorrem entre a camada de aplicação cliente e os componentes sem estado do backend. Informações indicadoras de estado exigidas pelo backend da camada de domínio sem estado ou componentes parceiros são incluídas na chamada de API com estado pelo cliente. Por exemplo, na chamada abaixo solicitando um token de autorização, um token de autenticação válido é necessário e incluído na forma do valor `client_id`.

```url
https://MyDomainName.my.salesforce.com/services/oauth2/authorize?response_type=token&client_id=3MVG9lKcPoNINVBKV6EgVJiF.snSDwh6_2wSS7BrOhHGEJkC_&redirect_uri=http%3A%2F%2F2www.example.org%2Fqa%2Fsecurity%2Foauth%2Fuseragent_flow_callback.jsp&scope=api%20id%20web
```

**Interação sem estado**: Na camada de domínio DDD, os componentes interagem sem estado com componentes de outros domínios e sistemas externos. Com base em solicitações da camada de aplicação cliente, as informações são adquiridas pelos componentes do cliente a partir de componentes do servidor na forma de recursos HyperMedia que compreendem informações e hiperlinks para escolhas de ações adicionais. As informações e escolhas são então retornadas ao cliente (aplicações DDD e camadas de UI) para apresentação e próximos passos.

Aqui está um exemplo de uma requisição e uma resposta RESTful sem estado com informações e opções válidas de URI para ação de próximo estado. Ela mostra a essência das informações de 'representação' e 'transferência de estado' que se tornam as escolhas de informação e ações da interface ao longo da camada de aplicação. Este é o projeto Hypermedia as the Engine of Application State (HATEOAS) do padrão da arquitetura REST.

```http
GET /accounts/12345 HTTP/1.1
Host: bank.example.com
```

```http
HTTP/1.1 200 OK

{
    "account": {
        "account_number": 12345,
        "balance": {
            "currency": "usd",
            "value": 100.00
        },
        "links": {
            "deposits": "/accounts/12345/deposits",
            "withdrawals": "/accounts/12345/withdrawals",
            "transfers": "/accounts/12345/transfers",
            "close-requests": "/accounts/12345/close-requests"
        }
    }
}
```

Veja esta imagem para uma ilustração dessa arquitetura geral típica de integração web.

![1_ymzSEsfc5PXuaIOvSljiTg](https://github.com/user-attachments/assets/7209d6df-4f35-4962-aaa1-58eacf107bf4)

**EDA - Orientado por Eventos**: O aspecto de integração da arquitetura é essencialmente uma variação do padrão de integração public-subscribe que suporta o uso assíncrono do modelo REST, essencial na maioria das grandes soluções digitais. Os principais aspectos do EDA são: diferenciar eventos de notificações e tópicos, enviar em vez de sondar/puxar mudanças, catalogar eventos, classificar interações sincronizadas/assíncronas, refatorar aplicativos para publicar/assinar, linguagem Ubiquitous Orientada por Domínio para semântica de tópicos, brokers de eventos, malhas de eventos e preferência por coreografia em vez de orquestração. A ilustração abaixo mostra o conceito em um nível geral.

![1_DxXRWDHEAFpL2ibS7cWWRg](https://github.com/user-attachments/assets/08f7336e-6b21-49b8-9cda-14d8005b0810)

**Diretrizes**: A arquitetura de aplicações digitais/web e da informação mais adequada deve ser decidida para os componentes e repositórios de dados com estado e sem estado. Depois, as decisões sobre a arquitetura de integração virão naturalmente. Interações RESTful seriam a norma, usando cargas úteis JSON, XML e HTML.

**Arquitetura do Sistema DDD REST — uma visão geral**: A combinação das arquiteturas DDD e REST resulta no interessante modelo prático de aplicação e arquitetura de integração ilustrado abaixo. Estude-a com atenção e considere a web digital, arquitetura móvel e frameworks de desenvolvimento de software existentes.

![1_8IYc-rMI40qYL6BEy_93xQ](https://github.com/user-attachments/assets/09292308-0e26-4551-a122-de44516dcc90)

**Ponto de Vista 6: Padrões de Segurança de Integração**: De modo geral, há três áreas que uma empresa precisa garantir:

- Informações empresariais nas lojas
- Informações do usuário nas lojas
- Qualquer tipo de informação em voo

A terceira é de particular preocupação para o arquiteto da integração. Quando pessoas ou sistemas se comunicam, precisamos assegurar cinco coisas a eles:

1. Eles não podem ser ouvidos ou espionados (privacidade, fornecida por redes privadas e criptografia)
2. Eles estão conversando com uma pessoa ou sistema que conhecem (autenticação, fornecida por 1/2/3 fatores)
3. A pessoa ou sistema tem direito à informação ou ação solicitada (autorização, fornecida pelos papéis)
4. Se algo der errado, isso pode ser investigado (não repudiação e outros detalhes fornecidos pela contabilidade)
5. Ataques são prevenidos ou resistidos durante a comunicação (proteção contra vários tipos de ameaças)

Os mecanismos de integração devem atender às necessidades de segurança acima, que podemos abreviar como PAAAP.

Essas necessidades aparecem nos canais de interação humano-sistema e sistema para sistema, conforme abaixo.

1. **De humano para máquina** — teclado, mouse, caneta stylus, toque, fala e biometria.
2. **Máquina a máquina** — As sete camadas de rede OSI, de cima a baixo: Aplicação, Apresentação, Sessão, Transporte, Rede, Enlace de Dados e Física.

Sendo um ensaio de arquitetura, não discutiremos os mecanismos e tecnologias do PAAAP. O leitor interessado encontrará facilmente a informação em outro lugar. A tabela abaixo resume os padrões típicos de soluções de segurança para entregar PAAAP em cada camada.

(Por favor, note que as camadas OSI e as soluções de segurança não são arquitetônicas nem imutáveis. Use a tabela apenas para pensamento de aspectos e princípios.)

![1_V9i3Chyj_75savQGGh4tzA](https://github.com/user-attachments/assets/ddc32509-eab0-4a73-8e81-1b200884366f)

**Diretrizes**: Considere os padrões de segurança da organização, os frameworks de segurança da indústria como o SABSA, as arquiteturas de referência de segurança (por exemplo, AWS, Cisco) e a necessidade particular de cada interface no escopo da solução para decidir a arquitetura, o design e a tecnologia de segurança.

> [!Note]
> Esses padrões e pontos de vista da arquitetura de integração resistirão ao teste do tempo. Gosto de estudar e descrever ideias estáveis pelo seu valor prático. Veja as formas fundamentais pelas quais as coisas interagem; Tudo flui a partir daí. Vá em frente e arquitete, arquiteto.

O termo 'micro' em Microserviços, embora indicativo do tamanho de um serviço, não é o único critério que torna uma aplicação um Microserviço. Quando as equipes migram para uma arquitetura baseada em microserviços, elas buscam aumentar sua agilidade — implantando recursos de forma autônoma e frequente. É difícil definir uma única definição concisa desse estilo arquitetônico. Gostei dessa breve definição:

> "arquitetura orientada a serviços composta por elementos frouxamente acoplados que possuem contextos limitados." — Adrian Cockcroft

Embora isso defina uma heurística de design de alto nível, a arquitetura de microserviços possui algumas características únicas que a diferenciam da arquitetura orientada a serviços de antigamente. Algumas dessas características, abaixo. Esses e alguns outros são bem documentados — <a href="https://martinfowler.com/articles/microservices.html">o artigo de Martin Fowler</a> e Building Microservices, de Sam Newman, para citar alguns.
