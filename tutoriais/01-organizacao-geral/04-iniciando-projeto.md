> ### Iniciando o projeto
* É preciso criar o diretório onde será realizado o projeto node.
* Após isso entrar no diretório e executar o comando:
~~~
npm init
~~~

> ### Sistema de módulos
* As aplicações Node, são construídas a partir de módulos, pois sua arquitetura é modular. Os módulos de uma aplicação possuem um arquivo package.json que é o arquivo descritor de configurações fundamentais para o funcionamento correto dos módulos.
*  Por padrão o sistema de módulos do Node utiliza o commonJs, porém com o ES6 agora é possível importar módulos utilizando o ***import*** e o ***export default***. Para alterar o padrão basta adicionar no final do arquivo package.json o tipo de importação de módulos do ES6.

```json
"type": "module"
```