/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
var nombre;
var edad;
nombre = document.getElementById("el nombre").value;
edad = document.getElementById("laEdad").value;

alert(" Ud se llama " + nombre + " y tiene " + edad + " años ");
}

