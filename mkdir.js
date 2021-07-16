var fs = require("fs");

fs.access("test", function(error) {
	if (error) {
		fs.mkdir("test", "777",function(error) {
			if (error) {
				throw error;
			} else {
				console.log("Carpeta creada");
			}
		});
	} else {
		console.log("La carpeta ya existe");
	}
});

