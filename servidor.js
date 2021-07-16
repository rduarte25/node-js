var http = require("http");

var fs = require('fs');

var host = "127.0.0.1";

var puerto = "9000";

var servidor = http.createServer(function(llamado, respuesta) {

	console.log(llamado.method + "- >" + llamado.url);

	if (llamado.url == '/') {
		fs.readFile("../sgsst-v0.02/AdminLTE-2.4.10/index.html", "UTF-8", function(error, contenido) {
			respuesta.writeHead(200, {'Content-Type': 'text/html'});
			respuesta.end(contenido);
			if (error) {
				throw error;
			} else {

			}
		});
	} else if (llamado.url.match(/.css$/)) {

		fs.readFile("../sgsst-v0.02/AdminLTE-2.4.10" + llamado.url, "UTF-8", function(error, contenido) {
			respuesta.writeHead(200, {'Content-Type': 'text/css'});
			respuesta.end(contenido);
			if (error) {
				throw error;
			} else {

			}
		});

	} else if (llamado.url.match(/.js$/)) {

		fs.readFile("../sgsst-v0.02/AdminLTE-2.4.10" + llamado.url, "UTF-8", function(error, contenido) {
			respuesta.writeHead(200, {'Content-Type': 'text/javascript'});
			respuesta.end(contenido);
			if (error) {
				throw error;
			} else {

			}
		});

	} else if (llamado.url.match(/.jpg$/)) {

		fs.readFile("../sgsst-v0.02/AdminLTE-2.4.10" + llamado.url, function(error, contenido) {
			respuesta.writeHead(200, {'Content-Type': 'image/jpg'});
			respuesta.end(contenido);
			if (error) {
				throw error;
			} else {

			}
		});

	} else if (llamado.url.match(/.ttf$/)) {

		fs.readFile("../sgsst-v0.02/AdminLTE-2.4.10" + llamado.url, function(error, contenido) {
			respuesta.writeHead(200, {'Content-Type': 'ttf'});
			respuesta.end(contenido);
			if (error) {
				throw error;
			} else {

			}
		});

	} else if (llamado.url.match(/.woff$/)) {

		fs.readFile("../sgsst-v0.02/AdminLTE-2.4.10" + llamado.url, function(error, contenido) {
			respuesta.writeHead(200, {'Content-Type': 'woff'});
			respuesta.end(contenido);
			if (error) {
				throw error;
			} else {

			}
		});

	} else {
		respuesta.writeHead(404, {'Content-Type': 'text/html'});
		respuesta.end('<h1>404 La página no existe!</h1>');
	}
	
});

servidor.listen(puerto, host, function(){
	console.log("el servidor esta corriendo en " + host +" puesto " + puerto);
});