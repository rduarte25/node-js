var fs = require("fs");

//var archivos = fs.readdirSync("./");

//console.log(archivos);

var archivos = fs.readdir("./", function(error, archivos){
	if (error) {
		throw error;
	} else {
		console.log(archivos);
	}
});

console.log("Leyendo los archivos del directorio");