<div style="display:inline_block">
    <img align="left" height="110" width="300" alt="TypeScript" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg">
</div>

# NODEJS
Conceitos e como utilizar o ambiente de execução Javascript.

<br>

## Introdução
* O NodeJs é um software criado a partir do interpretador V8, que possibilita a execução de código utilizando javascript, fora dos navegadores. Dessa forma torna-se realizável a construção de aplicações do lado do servidor com a linguagem javascript. 

> #### SINGLE-THREAD
* As aplicações desenvolvidas com o NodeJs, funcionam se utilizando de single-threads, ou seja, cada aplicação possui uma instância de apenas um processo. O NodeJs possui uma arquitetura não bloqueante (non-blocking thread) o que lhe da uma boa performance, utilizando o máximo de poder de processamento dos servidores de uma forma mais eficiente.

> #### EVENT-LOOP
* Sendo orientado a eventos o Node trabalha com ações baseadas na entrada e saída de dados do servidor. O event-loop atua ouvindo e emitindo eventos quando esses são criados, definindo uma fila de eventos em que a cada iteração é verificado o estado dos eventos, os redirecionando de acordo com sua execução para a fila de eventos executados.

> #### MÓDULOS
* As aplicações Node, são construídas a partir de módulos, pois sua arquitetura é modular. Os módulos de uma aplicação possuem um arquivo package.json que é o arquivo descritor de configurações fundamentais para o funcionamento correto dos módulos.
*  Por padrão o sistema de módulos do Node utiliza o commonJs, porém com o ES6 agora é possível importar módulos utilizando o ***import*** e o ***export default***. Para alterar o padrão basta adicionar no final do arquivo package.json o tipo de importação de módulos do ES6.

```json
"type": "module"
```

> #### APLICAÇÃO MIDDLEWARE
* No processo de criação de aplicações web, é necessário a disponibilidade de um servidor. Em NodeJs, a construção de aplicações passa pelo que é chamado de aplicação middleware, que consiste em desenvolver as funcionalidades e também implementar as configurações de infraestrutura.

> #### SERVIDOR NODE
* O servidor Node funciona através do mecanismo de event loop, esse que é responsável por gerenciar a emissão de eventos. Em outras palavras através de funções nativas é instanciado um novo servidor, esse servidor possui um callback que é executado apenas quando o servidor é chamado, ou seja, quando o servidor recebe uma requisição. Para verificar a existência de uma requisição o Event loop fica monitorando se o servidor foi requisitado, quando isso ocorre é emitido um evento para que seja executado o seu callback.
* O Node trabalha muito com funções assíncronas que respondem através de funções callbacks do javascript. Em resumo o servidor criado fica escutando até ser chamado e quando ele é chamado invoca uma função callback que executa uma determinada função.

> #### CHAMADAS ASSÍNCRONAS
* O desenvolvimento assíncrono é muito comum na construção de aplicações com Node, pois ele possibilita maior eficiência na execução simultânea de chamadas ao servidor. A grande vantagem da programação assíncrona é o fato de que é possível executar uma rotina diversas vezes ao mesmo tempo de forma paralela e não bloqueante. 

> #### NPM
* O Npm é o gerenciador de pacotes padrão do Node. Com ele é possível definir configurações dos projetos e gerenciar dependências do sistema.

> #### YARN
* O Yarn é um gerenciador de pacotes, utilizado para aplicar comandos pré-definidos ao código de uma aplicação e gerenciar recursos. Entre as suas vantagens estão a maior estabilidade, maior organização, praticidade, segurança e padronização. Pode-se utilizar tanto o yarn como o npm para a criação e gerenciamento de projetos com o node.


> #### COMANDOS

##### VERSÃO NODE
~~~ 
node -v
~~~  

##### VERSÃO NPM
~~~ 
npm -v
~~~  

##### ACESSAR O NODE PELO TERMINAL
~~~ 
node
~~~  

##### CRIAR PROJETO NODE COM NPM
~~~ 
npm init -y
~~~  

<br>

## Express
* O express é um framework para o desenvolvimento de aplicações javascript com o NodeJs. Se trata de um conjunto de recursos que facilitam a criação de servidores web.
* Alguns dos seus recursos:
  - Sistema de roteamento
  - Tratamento de exceções dentro da aplicação
  - Integração de vários sistemas de templates de páginas web
  - Gerenciamento de requisições HTTP

> #### CRIANDO SERVIDOR
* Inicialmente é preciso criar uma instância express, ou seja, um objeto do tipo express. O express é o responsável por gerar uma aplicação express através de uma função de alto nível do módulo express.
* Para Criar uma conexão é necessário utilizar o método listen, que tem como parâmetros um número de porta e um retorno de chamada. Após criada a conexão ficará escutando chamadas pelo caminho determinado.
* Para ligar o servidor é necessário executar um comando, esse pode ser manualmente chamando o node, ou pode-se definir um comando de execução nas configurações do arquivo package.json, que chama o node via npm.

##### CÓDIGO
~~~ 
import express from 'express'
const app = express()
const port = 3000

app.listen(port, () => {
    console.log(`Servidor rodando! Porta ${port}`)
})
~~~  

> ##### Script de execução do servidor via package.json

~~~
"dev": "node nome-arquivo"
~~~

> #### ROTEAMENTO

<br>

> #### COMANDOS

##### INSTALAR EXPRESS
~~~ 
npm install express --save
~~~  

##### INSTALAR EXPRESS DE FORMA GLOBAL
~~~ 
npm install -g express
~~~  
