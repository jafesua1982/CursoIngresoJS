function mostrar()
//Al ingresar una edad debemos informar si la persona 
//es adolescente, edad entre 13 y 17 años (inclusive)

{
//tomo la edad  
var edad;

edad = document.getElementById("edad").value;

if (12<edad && edad<18)
{
    alert("Usted es adolecente");
}


}//FIN DE LA FUNCIÓN