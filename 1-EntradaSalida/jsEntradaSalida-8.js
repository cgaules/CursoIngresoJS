/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
var dato1=document.getElementById("numeroDividendo").value;
var dato2=document.getElementById("numeroDivisor").value;
dato1=parseInt(dato1);
dato2=parseInt(dato2);
resultado=(dato1 % dato2)
alert("el resto es "+ resultado)
}
