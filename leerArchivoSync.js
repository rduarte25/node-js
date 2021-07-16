var fs = require("fs");

var contenido = fs.readFileSync("config.json", "UTF-8");

console.log(contenido);

var config = JSON.parse(contenido);

console.log(config.nombre_usuario);