function mostrar()
/*Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", 
mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.'*/
{
//tomo la edad  

var edad = parseInt(document.getElementById("edad").value);
var estadoCivil;

if(edad<=18 && estadoCivil != "Soltero"){
    alert("Es muy pequeño para NO ser soltero.");
}

	


}//FIN DE LA FUNCIÓN