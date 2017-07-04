function Mostrar()
{
//tomo la edad  


/*switch(mesDelAño){
    case "Febrero":
        alert("este mes tiene 28 dias")
        break
    

	case "Abril":
    case "Junio":
    case "Septiembre":
    case "Noviembre":
        alert("este mes tiene 30 dias")
        break
    	
default:
    alert("este mes tiene 31 dias");
}
*/
var mesDelAño = document.getElementById('mes').value;
if(mesDelAño=="Febrero"){
    alert("este mes tiene 28 dias")
}
else if(mesDelAño=="Abril" || mesDelAño=="Junio" || mesDelAño=="Septiembre" || mesDelAño=="Noviembre"){
    alert("este mes tiene 30 dias")
}
else{
    alert("este mes tiene 31 dias")
}
}//FIN DE LA FUNCIÓN