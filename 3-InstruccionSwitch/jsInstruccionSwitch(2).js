function Mostrar()
{
//tomo la edad  
/*var mesDelAño = document.getElementById('mes').value;
switch(mesDelAño){
case "Julio":
case "Agosto":{
    alert("Invierno")
    break
}
case "Enero":
case "Febrero":
case "Marzo":
case "Abril":
case "Mayo":
case "Junio":{
    alert("falta para el invierno")
    break
}
default:{
    alert("ya paso el invierno")
}
*/

    

var mesDelAño = document.getElementById('mes').value;

if(mesDelAño=="Julio" || mesDelAño=="Agosto"){
    alert("abrigate que hace frio")
}
else if(mesDelAño=="Enero" || mesDelAño=="Febrero" || mesDelAño=="Marzo" || mesDelAño=="Abril" || mesDelAño=="Mayo" || mesDelAño=="Junio"){
    alert("falta para el invierno")
}
else if(mesDelAño=="Agosto" || mesDelAño=="Septiembre" || mesDelAño=="Octubre" || mesDelAño=="Noviembre" || mesDelAño=="Diciembre"){
    alert("ya pasamos el frio")
}












}//FIN DE LA FUNCIÓN