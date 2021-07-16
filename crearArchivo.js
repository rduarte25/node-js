var fs = require("fs");

var texto = "Aprende node.js facil, Lorem ipsum incididunt ullamco sit ex nisi ad sunt cillum est aute commodo laborum ullamco quis dolor magna aute deserunt mollit ullamco officia magna id ullamco proident aute ut. Eiusmod magna sit sit amet. Deserunt laborum nisi aliqua sit minim pariatur tempor dolore fugiat sunt quis in eiusmod nulla et aliqua sunt tempor duis pariatur veniam anim ea tempor. Pariatur tempor labore reprehenderit nostrud ea voluptate est deserunt excepteur deserunt tempor. Enim quis dolor velit. Lorem ipsum proident aute dolore laborum non. Aute aute in do exercitation culpa in velit do officia non ut minim culpa cupidatat irure proident excepteur dolor veniam ut dolor reprehenderit aliqua est voluptate nulla aute occaecat minim proident dolor est quis esse in id. Lorem ipsum sint et ullamco magna do ut velit in nisi aliqua dolore reprehenderit mollit irure proident dolor aliquip sit proident tempor nisi ad do in dolor veniam ut esse enim cillum in ex consequat et ut ullamco voluptate in laborum qui excepteur commodo do velit occaecat dolore veniam ad ad aliquip enim elit ut quis ea occaecat aliquip occaecat eiusmod ad officia irure ut proident esse fugiat ut nulla id consectetur non ut sint in ut ad eu in enim irure mollit sunt sit ea deserunt ullamco exercitation qui fugiat mollit excepteur et in ad elit officia veniam velit nisi est dolore incididunt quis nostrud ex in velit occaecat sint laboris amet enim esse deserunt consectetur aute esse ullamco dolore ut irure dolor mollit incididunt voluptate adipisicing voluptate culpa cupidatat tempor dolore fugiat incididunt enim voluptate dolore laboris incididunt minim culpa ex proident proident voluptate culpa cupidatat consectetur tempor duis sit duis in dolor ex sint ullamco dolore id cupidatat proident labore sint fugiat exercitation deserunt irure sit in laboris ad nisi. Deserunt sunt culpa est amet fugiat cupidatat eiusmod commodo sed dolore dolore consectetur ex sed aliquip dolor velit elit reprehenderit id in aliquip in veniam et culpa aliquip nostrud dolore non cupidatat dolor voluptate sed ut in dolore qui laborum nulla aliquip in nulla eu sunt et dolor esse sint dolor ut in ut pariatur consequat eiusmod dolore sint dolor veniam cupidatat est dolore laboris dolore id sit sunt officia esse ut voluptate cupidatat eu proident dolor ut eiusmod excepteur duis reprehenderit laborum magna reprehenderit ex enim excepteur ut in aliqua occaecat elit cupidatat ut et est aliqua dolor culpa et id est mollit reprehenderit mollit sed voluptate ut consequat dolore ut consequat in fugiat qui amet duis duis cillum exercitation anim minim commodo minim mollit elit ex sunt dolore amet enim in excepteur consectetur consequat sed enim quis dolor sit in ut elit dolore dolor qui nulla pariatur adipisicing duis consectetur proident excepteur.";

fs.writeFile("archivo.txt", texto, function(error){
	if (error) {
		throw error;
	} else {
		console.log("El archivo fue creado");
	}
});

console.log("comenzando a escribir el archivo...");

var nuevoTexto = "\n Cursado por Rafael Duarte";

fs.appendFile("archivo.txt", nuevoTexto, function(error) {
	if (error) {
		throw error;
	} else {
		console.log("El nuevo texto ha sido añadido al archivo");
	}
})