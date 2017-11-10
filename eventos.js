var teclas = {
	UP : 38,
	DOWN : 40,
	LEFT : 37,
	RIGTH : 39
};

console.log(teclas);

document.addEventListener("keydown", dibujarTeclado);

function dibujarTeclado (evento) {
	var colorcito = "blue";
	switch (evento.keyCode) {
		case teclas.DOWN:
			dibujarLinea(colorcito, x,y,x,y+movimiento,papel);
			y = y+movimiento;
			break;
		case teclas.UP:
			dibujarLinea(colorcito, x,y,x,y-movimiento,papel);
			y = y-movimiento;
			break;
		case teclas.LEFT:
			dibujarLinea(colorcito, x,y,x-movimiento,y,papel);
			x = x-movimiento;
			break;
		case teclas.RIGTH:
			dibujarLinea(colorcito, x,y,x+movimiento,y,papel);
			x = x+movimiento;
			break;
		default:
			console.log('Otra tecla')
		break;
	}
}

var cuadrito = document.getElementById("areaDibujo");
var papel = cuadrito.getContext("2d");
var x = 150;
var y = 150;
var movimiento = 10;

dibujarLinea("red", 149, 149, 151, 151, papel);

function dibujarLinea(color, xInicial,yInicial,xfinal,yFinal, lienzo){

lienzo.beginPath();
lienzo.strokeStyle = color;
lienzo.lineWidth = 3;
lienzo.moveTo(xInicial, yInicial);
lienzo.lineTo(xfinal, yFinal);
lienzo.stroke();
lienzo.closePath();

}