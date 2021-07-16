var fs = require("fs");

var config = JSON.parse(fs.readFileSync("config.json", "UTF-8"));

console.log(config);

fs.watchFile("config.json", function(actual, anterior){
	console.log("El archivo cambio");
	var config = JSON.parse(fs.readFileSync("config.json", "UTF-8"));

	console.log(config);
});