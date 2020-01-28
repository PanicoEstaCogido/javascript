/* 
	Tarefa
	Nome do ficheiro: script.js
	Usado:
*/

/*Variable*/
	var primerProducto = prompt("Cual es el precio del primer producto?");
	var segundoProducto = prompt("Cual es el precio del segundo producto?");
	var tercerProducto = prompt("Cual es el precio del tercer producto?");
/*Varable con if*/
	var bolsa = confirm("Bolsa?");
	if (bolsa == true){bolsa = (.5)} 
	else {bolsa = (0)}
/*Pasar a cifras*/
	primerProducto = parseFloat(primerProducto);
	segundoProducto = parseFloat(segundoProducto);
	tercerProducto = parseFloat(tercerProducto);
	bolsa = parseFloat(bolsa);
/*Suma*/
	var total = (primerProducto + segundoProducto + tercerProducto + bolsa);
/*Mostrar en pantalla*/
	document.write("Producto uno: " + primerProducto + "€" + "</br>");
	document.write("Producto dos: " + segundoProducto + "€" + "</br>");
	document.write("Producto tres: " + tercerProducto + "€" + "</p>");
	document.write("Importe final: " + total + "€");

