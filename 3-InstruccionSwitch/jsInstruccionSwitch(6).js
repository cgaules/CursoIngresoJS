function Mostrar()
{
//tomo la edad  
var laHora = document.getElementById('hora').value;

/*switch(laHora){
    case "7":
    case "8":
    case "9":
    case "10":
    case "11":
    alert("es de mañana");
    break;

    case "12":
    case "13":
    case "14":
    case "15":
    case "16":
    case "17":
    case "18":
    case "19":
    alert("es de tarde");
    break;

    case "20":
    case "21":
    case "22":
    case "23":
    case "24":
    alert("es de noche");
    default:
    alert("no existe")
}
*/

if(laHora=="7" || laHora=="8" || laHora=="9" || laHora=="10" || laHora=="11"){
    alert("es de mañana")
}
   else if(laHora=="12" || laHora=="13" || laHora=="14" || laHora=="15" || laHora=="16" || laHora=="17" || laHora=="18" || laHora=="19"){
       alert("es de tarde")
   }

else if(laHora=="20" || laHora=="21" || laHora=="22" || laHora=="23" || laHora=="24" || laHora=="0" || laHora=="1" || laHora=="2" || laHora=="3" || laHora=="4" || laHora=="5" || laHora=="6"){
    alert("es de noche")
}
else{
    alert("la hora no existe")
}















}//FIN DE LA FUNCIÓN