var edadActual = 25;
var edadMaxima = 90;
var snackFavorito = "papas fritas";
var snacksPorDia = 2;

var anosRestantes = edadMaxima - edadActual;
var cantidadFinal = anosRestantes * 365 * snacksPorDia;

alert("Necesitarás " + cantidadFinal + " de " + snackFavorito +
      " para que te alcancen hasta los " + edadMaxima + " años.");

var precioPorUnidad = 500;
var gastoTotal = cantidadFinal * precioPorUnidad;

alert("Vas a gastar $" + gastoTotal + " en " + snackFavorito + " a lo largo de tu vida.");
console.log("Gasto total en " + snackFavorito + ": $" + gastoTotal);

var diasDeViaje = 10;
var presupuestoMaximo = 1500;
var comidasTotales = diasDeViaje * 3;

var dineroPorComida = presupuestoMaximo / comidasTotales;

alert("Podés gastar $" + dineroPorComida + " en cada comida para que te alcance la plata durante los " +
      diasDeViaje + " días de viaje.");