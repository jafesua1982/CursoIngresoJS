function mostrar()
/*al seleccionar un mes informar. 
si tiene 28 días. 
si tiene 30 días. 
si tiene 31 días.*/ {
    //tomo la edad  
    var mesDelAño = document.getElementById('mes').value;

    switch (mesDelAño) {
        case "Febrero":
            alert("Este mes tiene 28 dias");
            break;
        case "Abril":
            alert("Este mes tiene 30 dias");
            break;
        case "Junio":
            alert("Este mes tiene 30 dias");
            break;
        case "Septiembre":
            alert("Este mes tiene 30 dias");
            break;
        case "Noviembre":
            alert("Este mes tiene 30 dias");
            break;
        default:
            alert("Este mes tiene 31 dias");
    



    }





}//FIN DE LA FUNCIÓN