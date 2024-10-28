let calificacion1 = parseFloat(prompt("escribe la primera nota:"));
let calificacion2 = parseFloat(prompt("escribe la segunda nota:"));
let calificacion3 = parseFloat(prompt("escribe la tercera nota:"));

let promedio = (calificacion1 + calificacion2 + calificacion3) / 3;

console.log("El promedio de las calificaciones es: " + promedio.toFixed(2));
