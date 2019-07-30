function mostrar()
//al presionar el botón pedir un número entre 0 y 9 inclusive.
{

	var numero = parseInt(prompt("ingrese un número entre 0 y 10."));

	while(numero<0 || numero>10 || isNaN(numero)){
//while(!(numero >=0 && numero <= 10))   otra forma de escribirla aca pregunto si esta dentro del rango, en el anterior me da NaN
		
		numero = parseInt(prompt("Error. Reingrese un número entre 0 y 10."));

		
	}
document.getElementById("Numero").value = numero;

}//FIN DE LA FUNCIÓN