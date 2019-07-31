function mostrar()
{
/*
	var contador=0;
	var acumulador=0;
	var numero;
	var promedio;

	while(contador<5)
	{
		numero = parseInt(prompt("Ingrese un numero: "));

		acumulador = acumulador + numero;

		contador = contador +1;
	}

		promedio = acumulador / 5;




document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=promedio;
*/
var numero;
var suma =0;
var promedio;
var it =5
for(var numero=0; it <5; numero ++){

	do{
		numero = prompt("ingrese numero");
		numero =parseInt(nuemero);
	}while(isNaN(numero));
	sum += numero;
}
promedio = suma/it;



document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=promedio;
}//FIN DE LA FUNCIÓN