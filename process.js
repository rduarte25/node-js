/*function leerOpcion(opcion) {
	var index = process.argv.indexOf(opcion);

	if (index == -1) {
		return false;
	} else {
		return process.argv[index+1];
	}
}

var nombre = leerOpcion("-nombre");

console.log("El nombre es: " + nombre);
process.stdout.write("Cual es el apellido: \n");
process.stdin.on("data", function(data){
	process.stdout.write(`El nombre completo es ${nombre} ${data}`);
	process.exit();
});*/


process.stdout.write("Escrib una lista de números para sumar. '.' para terminar\n");

var suma = 0;

process.stdin.on("data", function(data){
	if (data.toString().trim() == '.') {
		process.exit();
	} else {
		suma += parseInt(data.toString().trim());

	}

});

process.on("exit", function(){
	process.stdout.write("La suma total es: " + suma + "\n");
})
