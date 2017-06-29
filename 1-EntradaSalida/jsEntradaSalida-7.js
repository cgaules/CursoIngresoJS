/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
var sum1=document.getElementById("numeroUno").value;
var sum2=document.getElementById("numeroDos").value;
resultado=parseInt(sum1) + parseInt(sum2);
alert(resultado)
}

function restar()
{
var res1=document.getElementById("numeroUno").value;
var res2=document.getElementById("numeroDos").value;
resultado=parseInt(res1) - parseInt(res2);
alert(resultado)	
}

function multiplicar()
{ 
var mul1=document.getElementById("numeroUno").value;
var mul2=document.getElementById("numeroDos").value;
resultado=parseInt(mul1) * parseInt(mul2);
alert(resultado)	
}

function dividir()
{
var div1=document.getElementById("numeroUno").value;
var div2=document.getElementById("numeroDos").value;
resultado=parseInt(div1) / parseInt(div2);
alert(resultado)	
}

