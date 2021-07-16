var fs = require("fs");

fs.rename("conversion/archivo.txt", "archivo.txt", function(error) {
	if (error) {
		throw error;
	} else {
		console.log("El archivo fue renombrado");
	}
});