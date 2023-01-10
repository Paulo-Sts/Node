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

> #### Abrir o NodeJs no Terminal
~~~ 
node
~~~  

<br>

> #### Criar um Novo Projeto NodeJs
~~~ 
npm init -y
~~~  

<br>

## Introdução

> #### DEFINIÇÃO
* O NodeJs é um software criado a partir do interpretador V8, que possibilita a execução de código utilizando javascript, fora dos navegadores. Dessa forma torna-se realizável a construção de aplicações do lado do servidor com a linguagem javascript. 

> #### SINGLE-THREAD
* As aplicações desenvolvidas com o NodeJs, funcionam se utilizando de single-threads, ou seja, cada aplicação possui uma instância de apenas um processo. O NodeJs possui uma arquitetura não bloqueante (non-blocking thread) o que lhe da uma boa performance, utilizando o máximo de poder de processamento dos servidores de uma mais forma eficiente.

> #### EVENT-LOOP
* Sendo orientado a eventos o Node trabalha com ações baseadas na entrada e saída de dados do servidor. O event-loop atua ouvindo e emitindo eventos quando esses são criados, definindo uma fila de eventos em que a cada iteração é verificado o estado dos eventos, os redirecionando de acordo com sua execução para a fila de eventos executados.

> #### NPM
* O Npm é o gerenciador de pacotes padrão do Node. Com ele é possível definir configurações dos projetos e gerenciar dependências do sistema.

> #### MÓDULOS
* As aplicações Node, são construídas a partir de módulos, pois sua arquitetura é modular. Os módulos de uma aplicação possuem um arquivo package.json que é o arquivo descritor de configurações fundamentais para o funcionamento correto do módulo.
*  Por padrão o sistema de módulos do Node utiliza o commonJs, porém com o ES6 agora é possível importar módulos utilizando o ***import*** e o ***export default***. Para alterar o padrão basta adicionar no final do arquivo package.json "type": "module".

## Aplicações Web

> #### APLICAÇÃO MIDDLEWARE
* No processo de criação de aplicações web, é necessário a disponibilidade de um servidor. Em NodeJs, a construção de aplicações passa pelo que é chamado de aplicação middleware, que consiste em desenvolver as funcionalidades e também implementar as configurações de infraestrutura.

> #### SERVIDOR NODE
* O servidor Node funciona através do mecanismo de event loop, esse que é responsável por gerenciar a emissão de eventos. Em outras palavras através de funções nativas é instanciado um novo servidor, esse servidor possui um callback que é executado apenas quando o servidor é chamado, ou seja, quando o servidor recebe uma requisição. Para verificar a existência de uma requisição o Event loop fica monitorando se o servidor foi requisitado, quando isso ocorre é emitido um evento para que seja executado o seu callback.
* O Node trabalha muito com funções assíncronas que respondem através de funções callbacks do javascript. Em resumo o servidor criado fica escutando até ser chamado e quando ele é chamado invoca uma função callback que executa uma determinada função.

> #### CHAMADAS ASSÍNCRONAS
* O desenvolvimento assíncrono é muito comum na construção de aplicações com Node, pois ele possibilita maior eficiência na execução simultânea de chamadas ao servidor. A grande vantagem da programação assíncrona é o fato de que é possível executar uma rotina diversas vezes ao mesmo tempo de forma paralela e não bloqueante. 