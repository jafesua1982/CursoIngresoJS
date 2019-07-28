function mostrar() {
	//Genero el número RANDOM entre 1 y 10 
	var nota = Math.floor(Math.random() * 10);

	if (nota >= 9) {
		alert(nota + " " + "Exelente");
	} else if (nota < 4) {
		alert(nota + " " + "Vamos la proxima se puede");

	} else {
		alert(nota + " " + "Aprobo");
	}

}//FIN DE LA FUNCIÓN