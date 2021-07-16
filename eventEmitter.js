var events = require("events");
var EventEmitter = events.EventEmitter;

var eE = new EventEmitter();

eE.once("cansado", function(data){
	console.log("El jugador cansado. el jugador número " + data + " por primera vez");
});

eE.on("cansado", function(data){
	console.log("El jugador cansado. el jugador número " + data);
});



eE.on("herido", function(data){
	console.log("El jugador herido. el jugador número " + data);
});

eE.emit("cansado", "10");
eE.emit("cansado", "11");

eE.removeAllListeners();

eE.emit("cansado", "09");
eE.emit("herido", "08");
