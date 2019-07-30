function mostrar()
{

var sexo = prompt("ingrese f ó m .");

sexo = sexo.toLowerCase();//pasa la mayuscula a minuscula

while(sexo!= "f" && sexo !="m")
//while(!(sexo == "m" || sexo == "f"))
{

    sexo = prompt("Error. Reingrese f ó m .");
}



document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN