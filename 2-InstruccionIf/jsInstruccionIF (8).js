function Mostrar()
{
//tomo la edad  
var edad=document.getElementById("edad").value;
var casado=document.getElementById("Casado");
var soltero=document.getElementById("Soltero");
var divorciado=document.getElementById("Divorciado");
var estadocivil=document.getElementById("estadoCivil");


if(estadocivil==soltero && edad>18){
    alert("es soltero y no es menor");
}


}//FIN DE LA FUNCIÓN