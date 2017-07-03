function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
var num =parseInt (Math.random()*(10-1))+1;

if(num>=9){
	alert(num+" excelente")
}
else if(num>=4){
	alert(num+" aprobo")
}
else{
	alert(num+" vamos la proxima se puede")
}

}//FIN DE LA FUNCIÓN