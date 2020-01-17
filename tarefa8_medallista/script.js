/* 
	Tarefa
	Nome do ficheiro: script.js
	Usado:
*/

/*Función*/
function tipoDeMedalla(posicion){
	if(posicion == 1) 
	{medalla = "Medalla de ouro";} 
	else if (posicion == 2)
	{medalla = "Medalla de prata";} 
	else if (posicion == 3)
	{medalla = "Medalla de bronce";} 
	else{medalla = "Mala sorte";}}
/*Preguntita*/
var posicion = prompt("¿En qué posición quedaches?");
posicion = parseFloat(posicion);

var funcioncita = tipoDeMedalla(posicion);
document.write(medalla);