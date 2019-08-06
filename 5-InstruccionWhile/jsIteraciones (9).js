function mostrar() {
	/*
		var contador=0;
		var numero;
		var max;
		var min;
		var flag =true
		// declarar variables
		
		var respuesta='si';
	
		while(respuesta!='no')
		{
			do{
				numero = prompt();
				numero =parseInt(numero);
	
			}while(isNam)
		
		}
	
	*/
	var numero;
	var mayor;
	var menor;
	var flag = 0;
	var seguir = "S";

	do {
		numero = parseInt(prompt("ingrese numero"));
		while (isNaN(numero)) {
			numero = parseInt(prompt("Eso no es un numero.Ingrese un numero valido"));
		}
		if (flag = 0) {
			mayor = numero;
			menor = numero;
			flag = 1;
		}
		if (numero > mayor) {
			mayor = numero;
		}
		if (numero < menor) {
			menor = numero;
		}
		seguir = prompt("quiere continuar");

	} while (seguir == "s");

	document.getElementById("maximo").value = mayor;
	document.getElementById("minimo").value = menor;

}//FIN DE LA FUNCIÓN