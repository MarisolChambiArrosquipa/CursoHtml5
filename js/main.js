var bottonJugar=document.getElementById("botonJugar");
document.addEventListener("click",iniciarJuego);
var frase="Tres tristes trigres titaban trigo en un trigal";

function iniciarJuego (event) {
	// body...
	var palabrasJuegos=document.querySelector(".palabraJuego");
 	palabrasJuegos.innerText = frase;//poniendo la frase

	document.addEventListener("keydown",showText);
	moverEnemigo();
}
/*mostrar el texto que el usuario escribira en la pagina*/
function showText(event)
{

	var palabraJugador=document.querySelector(".palabraJugador");
	var cantidadLetras=palabraJugador.children.length;
	var letra;
	var codigoLetra=event.keyCode;

	if(event.keyCode==16) //shift
		return false;
	if(event.keyCode==8)//ir atras es nos servidar para el espacio entre letras//backspace
	{
		e.preventDefault();//por defecto ira atras esto es para quetar el comportamiento
		if(cantidadLetras<1)
			return false;
		palabraJugador.children[cantidadLetras-1].remove();//remover
		return false;
	}
	letra=String.fromCharCode(codigoLetra);//devuelve una cadena creada
	if(!event.shiftKey && event.keyCode>=65 && event.keyCode<=90){
		//65 a 90 son el abecederadio del a hasta la z
		letra=String.fromCharCode(codigoLetra+32);//minuscula 32
	}
	if(letra==frase[cantidadLetras])
		palabraJugador.innerHTML+="<div class='good'>" +letra+"</div>";
	else
		palabraJugador.innerHTML+="<div class='fail'>"+letra+"</div>";
}
var velocidad=5;
var posicionenemigo=0;
function moverEnemigo(e)
{
	var enemigo=document.querySelector("span[data-nombre='enemigo']");
	var meta=enemigo.parentElement.offsetWidth;//ancho del padre
	posicionenemigo+=velocidad;
	enemigo.style.left=posicionenemigo+"px";
	if(posicionenemigo>=meta)
	{
		var mensaje=document.querySelector("#mensajeFinal");
		mensaje.style.height="100%";
		var header=mensaje.querySelector("header");
		header.innerText="Perdiste";
	}
	else
	{
		setTimeout(moverEnemigo,100);//mover el enemigo cada 100 ms
	}
}