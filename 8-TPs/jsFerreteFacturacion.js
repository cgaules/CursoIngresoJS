/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/

var preciouno;
var preciodos;
var preciotres;



function Sumar () 
{
preciouno=document.getElementById("PrecioUno").value;	
preciodos=document.getElementById("PrecioDos").value;
preciotres=document.getElementById("PrecioTres").value;
var suma= parseInt(preciouno) + parseInt(preciodos) + parseInt(preciotres);
alert("la suma es " + suma)


}
function Promedio () 
{
preciouno=document.getElementById("PrecioUno").value;	
preciodos=document.getElementById("PrecioDos").value;
preciotres=document.getElementById("PrecioTres").value;
var promedio=(parseInt(preciouno) + parseInt(preciodos) + parseInt(preciotres)) / 3 ;  
alert("el promedio es " + promedio) ;
	
}
function PrecioFinal () 
{
preciouno=document.getElementById("PrecioUno").value;	
preciodos=document.getElementById("PrecioDos").value;
preciotres=document.getElementById("PrecioTres").value;
var preciofinal=(parseInt(preciouno) + parseInt(preciodos) + parseInt(preciotres)) * 1.21 ;
alert("el precio final es " + preciofinal)	
}