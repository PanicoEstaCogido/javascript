/* 
	Tarefa 12
	Nome do ficheiro: script.js
	Usado: Todo
*/

function enviar() {
	var numUno = document.getElementById("numUno").value;
	var numUno = parseInt(numUno);
	var numDos = document.getElementById("numDos").value;
	var numDos = parseInt(numDos);
	var signo = document.getElementById("signo").value;
	
	/*Operación*/
	if(signo == "+"){
		var resultado = numUno + numDos;
	}
	else if (signo == "-"){
		var resultado = numUno - numDos;
	}
	else{
		var resultado = "un error";
	}
	document.getElementById("parrafada").innerHTML = "El resultado da "+ resultado ;
}