const { Console } = require("console");
var htto= require ("http");

var servidor= http.createServer(function(peticion, respuesta){
    respuesta.writeHead(200,{"Content-type":"text/html"});
    respuesta.write("<h3>SERVER BASICO CON NODES:JS</h3>");
    Console.log("peticion web");
    respuesta.end();
});

servidor.listen(3000);
console.log("Ejecutando un server local con un node.js");