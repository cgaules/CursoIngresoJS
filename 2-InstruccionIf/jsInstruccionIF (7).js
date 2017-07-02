function Mostrar()
{
//tomo la edad  
var edad=document.getElementById("edad").value;
var casado=document.getElementById("Casado");
var soltero=document.getElementById("Soltero");
var divorciado=document.getElementById("Divorciado");
var estadocivil=document.getElementById("estadoCivil");



	if(edad<18 &&  estadocivil !=soltero){
        alert("Es muy pequeño para NO ser soltero")
    }


}//FIN DE LA FUNCIÓN