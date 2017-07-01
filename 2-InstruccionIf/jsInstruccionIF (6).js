function Mostrar()
{
//tomo la edad  
var edad
edad=document.getElementById("edad").value;
if (edad < 13) 
alert("Eres menor");
else if (edad >= 13 && edad < 18)
 alert("Eres adolescente");
else if (edad >=18)
 alert("Eres mayor");



}//FIN DE LA FUNCIÓN