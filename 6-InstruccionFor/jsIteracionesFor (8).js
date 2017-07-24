function Mostrar()
{

var num = prompt("ingrese el numero");
var cont=0

for(i=1;i<=num;i++){
    if(num%i==0){
        cont++
        break;
    }

    
}
if(cont>2){
    alert("no es primo")
}
else{
    alert("es primo")
}



}//FIN DE LA FUNCIÓN