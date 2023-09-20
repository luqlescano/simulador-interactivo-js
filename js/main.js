let nombre = prompt("Ingresar nombre:");

function saludarUsuario() {
    alert("Hola " + nombre + ", bienvenid@ a este simulador de prestamos.");
} 

saludarUsuario();

let prestamoSolicitado = parseInt(prompt("¿Cuánto dinero necesitas?"));

let cuotasPrestamo = parseInt(prompt("¿En cuántas cuotas lo vas a devolver?"));

while (cuotasPrestamo <= 11) {
    alert("El número de cuotas debe ser igual o mayor a 12");
    cuotasPrestamo = prompt("¿En cuántas cuotas lo vas a devolver?");
}

let interes = 0;

if (cuotasPrestamo >= 12 && cuotasPrestamo <= 23) {
    interes = 1.5;
} else if (cuotasPrestamo >= 24 && cuotasPrestamo <= 35) {
    interes = 1.6;
} else if (cuotasPrestamo >= 36 && cuotasPrestamo <= 47) {
    interes = 1.7;
} else if (cuotasPrestamo >= 48 && cuotasPrestamo <= 59) {
    interes = 1.8;
} else {
    interes = 1.9;
}

let totalDevolucion = prestamoSolicitado * interes;

if (interes == 1.5) {
    porcentajeInteres = 50;
} else if (interes == 1.6) {
    porcentajeInteres = 60;
} else if (interes == 1.7) {
    porcentajeInteres = 70;
} else if (interes == 1.8) {
    porcentajeInteres = 80;
} else {
    porcentajeInteres = 90;
}

let valorCuotas = totalDevolucion / cuotasPrestamo;

let respuestaUsuario = window.confirm("Solicitaste $" + prestamoSolicitado + ", a devolver en " + cuotasPrestamo + " cuotas de $" + valorCuotas + " c/u.\nEl interes aplicado según la cantidad de cuotas es de un " + porcentajeInteres + "%.\nEl importe total a devolver es de $" + totalDevolucion + ".\n\n¿Estás de acuerdo?");

if (respuestaUsuario) {
  alert(nombre + ", tu prestamo fue generado exitosamente.\n¡Gracias por elegirnos!");
} else {
  alert(nombre + ", lamentamos no poder ayudarte.\nEsperamos verte pronto nuevamente...");
}