var Reloj = require("./reloj.js");

var segundos = 0;

var reloj = new Reloj();

reloj.on("tick-tock", function () {
	segundos++;
	if (segundos == 5) {
		process.exit();
	}

	console.log(segundos);
});

reloj.once("tick-tock", function () {
	segundos++;
	console.log("Primera vez");
});