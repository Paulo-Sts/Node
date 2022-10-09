<div style="display:inline_block">
    <img align="left" height="110" width="300" alt="TypeScript" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg">
</div>

# NodeJs
Conceitos e como utilizar o ambiente de execução Javascript.

<br>

> #### Versão NodeJs
~~~ 
node -v
~~~  

> #### Versão Npm
~~~ 
npm -v
~~~  

<br>

> #### Criar Projeto NodeJs
~~~ 
npm init -y
~~~  

<br>

## Introdução

> #### DEFINIÇÃO
* O NodeJs é um software criado a partir do interpretador V8, que possibilita a execução de código utilizando javascript, fora dos navegadores. Possibilitando assim a construção de aplicações do lado do servidor. 

> #### SINGLE-THREAD
* As aplicações desenvolvidas com o NodeJs, funcionam utilizando de single-threads, ou seja, cada aplicação possui uma instância de apenas um processo. O NodeJs possui uma arquitetura não bloqueante (non-blocking thread) o que lhe da uma boa performance utilizando o máximo de poder de processamento dos servidores de forma eficiente.

> #### EVENT-LOOP
* Sendo orientado a eventos o Node trabalha com ações baseadas na entrada e saída de dados do servidor. O event-loop atua ouvindo e emitindo eventos quando esses são criados, definindo uma fila de eventos em que a cada iteração e verificado o estado de eventos e os redirecionando de acordo com sua execução para a fila de eventos executados.

> #### MÓDULOS
* As aplicações Node, são construídas a partir de módulos, pois sua arquitetura é modular. Os módulos de uma aplicação possuem um arquivo package.json que é o arquivo descritor de configurações fundamentais para o funcionamento correto do módulo. 

## Aplicações Web

> #### APLICAÇÃO MIDDLEWARE
* No processo de criação de aplicações web, é necessário a disponibilidade de um servidor. Em NodeJs, a construção de aplicações passa pelo que é chamado de aplicação middleware, que consiste além de desenvolver as funcionalidades, também implementar as configurações de infraestrutura.