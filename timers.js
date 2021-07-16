var sId = setTimeout(function() {
	console.log("corriendo...");
}, 1000);

clearTimeout(sId);


var valor = 0;
var sId = setInterval(function(){
	valor ++;
	console.log(valor);
	if (valor == 5) {
		clearInterval(sId);
	}
}, 1000);
