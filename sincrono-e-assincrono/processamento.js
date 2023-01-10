import http from 'http'
import fs from "fs"
import leituraAsync from './leitura_async.js'
import leituraSync from './leitura_sync.js'
var arquivo = "./node.exe"
var stream = fs.createWriteStream(arquivo)
var download = "http://nodejs.org/dist/latest/node.exe"
http.get(download, function(res) {
console.log("Fazendo download do Node.js")
res.on('data', function(data){
stream.write(data)
});
res.on('end', function(){
stream.end()
console.log("Download finalizado!")
leituraAsync(arquivo)
leituraSync(arquivo)
});
});