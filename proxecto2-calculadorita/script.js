/* 
	Tarefa
	Nome do ficheiro: script.js
	Usado:
*/

function suma(a,b)
{
	document.write(a+b);
}

function resta(a,b)
{
	document.write(a-b);
}

function multiplicacacion(a,b)
{
	document.write(a*b);
}


var cuenta = prompt("¿Qué cuenta desea realizar? "+"Escriba + ou -");

var numeroUno = prompt("Introduzca la primera cifra");
numeroUno = parseInt(numeroUno);

var numeroDos = prompt("Introduzca la segunda cifra");
numeroDos = parseInt(numeroDos);

if(cuenta == "+") 
	{
	suma(numeroUno,numeroDos);
	} 

if(cuenta == "-") 
	{
	resta(numeroUno,numeroDos);
	} 

else (cuenta == "*")
	{
	multiplicacacion(numeroUno,numeroDos);
	}
