<div style="display:inline_block">
    <img align="left" height="110" width="300" alt="TypeScript" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg">
</div>

### NodeJs
Conceitos e como utilizar o ambiente de execução Javascript.

<br>

## SUMÁRIO

> ### Parte 1 - Conceitos



> ### Parte 2 - Organização Geral de Projetos Node
* [Organização dos Diretórios]() 
* [Configuração do Node]()
* [Configuração do Express]()
* [Inicialização do Projeto]()
* [Criação de Servidos]()

#### Referências
* [Site Node](https://nodejs.org/pt)
* [Site Express](https://expressjs.com/)

## CONCEITOS

> ### Node
* O NodeJs é um software criado a partir do interpretador V8, que possibilita a execução de código utilizando javascript, fora dos navegadores. Dessa forma torna-se realizável a construção de aplicações do lado do servidor com a linguagem javascript. 

> ### Single-thread
* As aplicações desenvolvidas com o NodeJs, funcionam se utilizando de single-threads, ou seja, cada aplicação possui uma instância de apenas um processo. O NodeJs possui uma arquitetura não bloqueante (non-blocking thread) o que lhe da uma boa performance, utilizando o máximo de poder de processamento dos servidores de uma forma mais eficiente.

> ### Event-loop
* Sendo orientado a eventos o Node trabalha com ações baseadas na entrada e saída de dados do servidor. O event-loop atua ouvindo e emitindo eventos quando esses são criados, definindo uma fila de eventos em que a cada iteração é verificado o estado dos eventos, os redirecionando de acordo com sua execução para a fila de eventos executados.

> ### Aplicação middleware
* No processo de criação de aplicações web, é necessário a disponibilidade de um servidor. Em NodeJs, a construção de aplicações passa pelo que é chamado de aplicação middleware, que consiste em desenvolver as funcionalidades e também implementar as configurações de infraestrutura.

> ### Servidor node
* O servidor Node funciona através do mecanismo de event loop, esse que é responsável por gerenciar a emissão de eventos. Em outras palavras através de funções nativas é instanciado um novo servidor, esse servidor possui um callback que é executado apenas quando o servidor é chamado, ou seja, quando o servidor recebe uma requisição. Para verificar a existência de uma requisição o Event loop fica monitorando se o servidor foi requisitado, quando isso ocorre é emitido um evento para que seja executado o seu callback.
* O Node trabalha muito com funções assíncronas que respondem através de funções callbacks do javascript. Em resumo o servidor criado fica escutando até ser chamado e quando ele é chamado invoca uma função callback que executa uma determinada função.

> ### Chamadas assíncronas
* O desenvolvimento assíncrono é muito comum na construção de aplicações com Node, pois ele possibilita maior eficiência na execução simultânea de chamadas ao servidor. A grande vantagem da programação assíncrona é o fato de que é possível executar uma rotina diversas vezes ao mesmo tempo de forma paralela e não bloqueante. 

> ### Npm
* O Npm é o gerenciador de pacotes padrão do Node. Com ele é possível definir configurações dos projetos e gerenciar dependências do sistema.

> ### Yarn
* O Yarn é um gerenciador de pacotes, utilizado para aplicar comandos pré-definidos ao código de uma aplicação e gerenciar recursos. Entre as suas vantagens estão a maior estabilidade, maior organização, praticidade, segurança e padronização. Pode-se utilizar tanto o yarn como o npm para a criação e gerenciamento de projetos com o node.

> ### Express
* O express é um framework para o desenvolvimento de aplicações javascript com o NodeJs. Se trata de um conjunto de recursos que facilitam a criação de servidores web.
* Alguns dos seus recursos:
  - Sistema de roteamento
  - Tratamento de exceções dentro da aplicação
  - Integração de vários sistemas de templates de páginas web
  - Gerenciamento de requisições HTTP

<br>

## ORGANIZAÇÃO GERAL DE PROJETOS NODE

> ### Estrutura das pastas
* A estrutura das pastas serve para organizar todo o código desenvolvido no projeto. O objetivo é construir uma estrutura de fácil entendimento e escalabilidade.

#### Modelo de organização das pastas
- **src**  
  -  app.js          (Classe app)  
  -  server.js       (Server para iniciar o app)
  - **api**               
    - controllers   (Funções da controllers do express route)  
    - models        (Modelos do banco de dados)  
    - services      (Regras de negócio)  
    - subscribers   (Eventos async)   
    - repositories  (Query builders)   
- **config**          (Configuração das variaveis de ambiente)  
- **jobs**            (Tarefas de rotinas)  
- **loaders**         (Modulos para utilizado no app)  
- **utils**           (Trechos de código pequeno)  
- **helpers**         (Trechos de arquitetura de código)  
- **routes**          (Definição de rotas express)  
- **types**           (Tipagem (d.ts) para Typescript)  

> ### Configuração do node

#### Versão do node
~~~ 
node -v
~~~  

#### Versão do npm
~~~ 
npm -v
~~~  

#### Acessar node pelo terminal
~~~ 
node
~~~  

> ### Configuração framework express

#### Instalar express
~~~ 
npm install express --save
~~~  

#### Instalar express de forma global
~~~ 
npm install -g express
~~~  

> ### Criação de projeto
* É preciso criar o diretório onde será realizado o projeto node.
* Após isso entrar no diretório e inicializar o projeto.
~~~
npm init -y
~~~

#### Sistema de módulos
* As aplicações Node, são construídas a partir de módulos, pois sua arquitetura é modular. Os módulos de uma aplicação possuem um arquivo package.json que é o arquivo descritor de configurações fundamentais para o funcionamento correto dos módulos.
*  Por padrão o sistema de módulos do Node utiliza o commonJs, porém com o ES6 agora é possível importar módulos utilizando o ***import*** e o ***export default***. Para alterar o padrão basta adicionar no final do arquivo package.json o tipo de importação de módulos do ES6.

```json
"type": "module"
```

> ### Instalar nodemon (opcional)
* O nodemon é uma dependência que atualiza automaticamente o servidor após realizada alguma modificação no código.
* É útil durante a etapa de desenvolvimento.
~~~
npm install --save-dev nodemon
~~~

#### Script de execução do servidor via package.json com o nodemon
```json
"dev": "nodemon nome-arquivo"
```

> ### Criação de servidor
* Inicialmente é preciso criar uma instância express, ou seja, um objeto do tipo express. O express é o responsável por gerar uma aplicação express através de uma função de alto nível do módulo express.
* Para criar uma conexão é necessário utilizar o método ***listen***, que tem como parâmetros um número de porta e um retorno de chamada. Após criada, a conexão ficará escutando chamadas pelo caminho determinado.
* Para ligar o servidor é necessário executar um comando, esse pode ser manualmente chamando o node, ou pode-se definir um comando de execução nas configurações do arquivo package.json, que chama o node via npm.

#### Código
~~~javascript 
import express from 'express'
const app = express()
const port = 3000

app.listen(port, () => {
    console.log(`Servidor rodando! Porta ${port}`)
})
~~~

#### Script de execução do servidor via package.json
```json
"dev": "node nome-arquivo"
```

> ### Conectar com banco de dados

> ### Criar models

> ### Criar rotas
