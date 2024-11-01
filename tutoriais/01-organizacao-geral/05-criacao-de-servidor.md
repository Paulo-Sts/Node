> ### Criação de servidor
* Inicialmente é preciso criar uma instância express, ou seja, um objeto do tipo express. O express é o responsável por gerar uma aplicação express através de uma função de alto nível do módulo express.
* Para criar uma conexão é necessário utilizar o método ***listen***, que tem como parâmetros um número de porta e um retorno de chamada. Após criada, a conexão ficará escutando chamadas pelo caminho determinado.
* Para ligar o servidor é necessário executar um comando, esse pode ser manualmente chamando o node, ou pode-se definir um comando de execução nas configurações do arquivo package.json, que chama o node via npm.

#### Código
~~~ 
import express from 'express'
const app = express()
const port = 3000

app.listen(port, () => {
    console.log(`Servidor rodando! Porta ${port}`)
})
~~~  

#### Script de execução do servidor via package.json
~~~
"dev": "node nome-arquivo"
~~~