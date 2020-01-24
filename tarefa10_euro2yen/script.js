/* 
	Tarefa 10 euro2yen
	Nome do ficheiro: script.js
	Usado:
*/

/*Funciónes*/
function e2y(cantidad){
	return cantidad*120;
}
function y2e(cantidad){
	return cantidad/120;
}
function sinPluralEur(){
	if(cantidad == 1)
		return "";
	else
		return "s";
}
function sinPluralYen(){
	if(cantidad == 1)
		return "";
	else
		return "es";
}

/*Valores predeterminados*/
var totalYenes = 0;
var totalEuros = 0;
var cantidad = 0;
var nuevoProducto = "sí"

/*Texto presentación*/
document.write("<h1>FACTURA</h1>");

/*Bucle*/
while (nuevoProducto == "sí"){

	var nombreProducto = prompt("¿Qué producto acabas de comprar?");
	var cantidad = prompt("¿Cuánto has gastado?");
	cantidad = parseFloat(cantidad);
	cantidad = cantidad.toFixed(2);
	var divisa = prompt("¿Qué divisa has utilizado? (responde euro o yen)");

	if(divisa == "euro") {
		var resultado = e2y(cantidad);
		var totalYenes = totalYenes + resultado;
		document.write("<p>" + nombreProducto + ": " + cantidad + " euro" + sinPluralEur(cantidad) + " => " + resultado + " yen" + sinPluralYen(resultado));
	}
	if(divisa == "yen") {
		var resultado = y2e(cantidad);
		
		var totalEuros = totalEuros + resultado;
		document.write("<p>" + nombreProducto + ": " + resultado + " euro" + sinPluralEur(resultado) + " => " + cantidad + " yen" + sinPluralYen(cantidad));
	}
	nuevoProducto = prompt("¿Desea añadir un nuevo producto? (Responda sí o no)")

}

/*Mostrar los totales*/
document.write("<p>" + "Total pagado con euros: " + totalEuros + " €");
document.write("<p>" + "Total pagado con yenes: " + totalYenes + " ¥");