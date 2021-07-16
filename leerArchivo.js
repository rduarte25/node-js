var fs = require("fs");

fs.readFile("conversion/README.md", "UTF-8", function(error, contenido) {
	if (error) {
		throw error;
	} else {
		console.log("Contenido: " + contenido);
	}
})