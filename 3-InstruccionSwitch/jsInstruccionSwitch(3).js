function Mostrar()
{
//tomo la edad  
/*var mesDelAño = document.getElementById('mes').value;

switch(mesDelAño){
    case "Febrero":{
        alert("este mes no tiene mas de 29 dias")
        break
    }
    default:{
        alert("este mes tiene 30 o mas")
        
    }
}
*/	
var mesDelAño = document.getElementById('mes').value;	

if(mesDelAño=="Febrero"){
    alert("este mes no tiene 29 dias")
}
else{
    alert("este mes tiene 30 o mas dias")
}

}//FIN DE LA FUNCIÓN
