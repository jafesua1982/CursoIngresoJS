function mostrar()
//Al ingresar una edad solo
// debemos informar si la persona NO es adolescente.
{
//tomo la edad  
var edad;
edad = document.getElementById("edad").value;

if (12>edad || edad>18)
{
    alert("Usted no es adolecente");
}

}//FIN DE LA FUNCIÓN