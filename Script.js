let http= require("http");
let operacao = require("./operacoes");
let url = require('url');


http.createServer(function(req,res){
    res.writeHead(200,{"Content-Type": "text/html; charset=utf-8" });
    
     let {nume1,opcao,nume2}=url.parse(req.url,true).query;
    let total=operacao.calcular(Number(nume1),Number(nume2),opcao)
    let txt= `${nume1} ${opcao} ${nume2} =${total}`;

    res.end(txt);


}).listen(3333)