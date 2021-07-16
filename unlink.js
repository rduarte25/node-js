var fs = require("fs");

fs.unlink("archivo", function(error) {
	if (error) {
		throw error;
	} else {
		console.log("El archivo fue borrado");
	}
});