/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
var largo;
var ancho;
var radio;
var resultado;

largo = document.getElementById("Largo").value;
ancho = document.getElementById("Ancho").value;
radio = document.getElementById("Radio").value;

largo = parseInt(largo)
ancho = parseInt(ancho)
radio = parseInt(radio)

resultado = (largo*2 + ancho*2)*3

alert("comprar: " + resultado);

}
function Circulo () 
{
    var largo;
    var ancho;
    var radio;
    var resultado;
    
    largo = document.getElementById("Largo").value;
    ancho = document.getElementById("Ancho").value;
    radio = document.getElementById("Radio").value;
    
    largo = parseInt(largo)
    ancho = parseInt(ancho)
    radio = parseInt(radio)	

    resultado = radio*3

    alert("comprar: " + resultado);
}
function Materiales () 
{
var largo;
var ancho;
var radio;
var area;


largo = document.getElementById("Largo").value;
ancho = document.getElementById("Ancho").value;
radio = document.getElementById("Radio").value;

largo = parseInt(largo)
ancho = parseInt(ancho)
radio = parseInt(radio)

area = largo*ancho

alert(" cemento a comprar: " + area*2 +" " + "cal a comprar: " + area*3);


}