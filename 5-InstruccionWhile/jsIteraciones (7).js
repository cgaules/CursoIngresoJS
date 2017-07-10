function Mostrar()
{
    var num;
	var contador=0;
	var acumulador=0;
	var respuesta=true;

	while(respuesta){
		contador++;
		num=prompt("ingrese el numero");
		num=parseInt(num);
	

	while(isNaN(contador)){
		contador=prompt("numero incorrecto, ingrese un numero");
		num=parseInt(num);
	}
	acumulador=acumulador+num;
	respuesta=confirm("desea ingresar otro numero?");
    }
    

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN