function mostrar()
{
var precio;
var descuento;
var precioFinal

precio = prompt("Ingrese el precio:")
descuento = prompt("ingrese el porcentaje de descuento")

precioFinal = precio - (descuento*precio)/precio 

document.getElementById("elPrecioFinal").value = precioFinal

}
