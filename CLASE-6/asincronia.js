// Asincronía en JavaScript
// proceso asíncrono con setTimeout

// let edad = prompt("Ingrese su edad!!");

// setTimeout(function(){
//     if (edad < 18){
//         console.log("Es menor de edad!")
//     }else{
//         console.log("Es mayor de edad!")
//     }
//     fin()
// }, 3000)

// function fin(){
//     console.log("Fin del programa")
// }

// Callbacks

// function pedirPublicaciones(callback){
//     console.log("Envío de petición de publicaciones")
//     setTimeout(function(){
//         console.log("Llegan las publicaciones")
//         callback();
//     }, 3000)
// }

// console.log("Abre la aplicacion");
// pedirPublicaciones(function(){
//     console.log("Mostras publicaciones web");
// });

// pedirPublicaciones(function(){
//     console.log("Mostras publicaciones movil");
// });

// Ejemplo callbackcompleto
function saludo(nombre, callback) {
  setTimeout(function () {
    console.log("Bienvenido " + nombre + " a su dispositivo!");
    callback(nombre);
  }, 5000);
}

function mostraraplicacion(callback) {
  setTimeout(function () {
    console.log("Mostrar icono de aplicación!!");
    callback();
  }, 2000);
}

console.log("Encender dispositivo!");
saludo("Daniel", function (a) {
  mostraraplicacion(function () {
    mostraraplicacion(function () {
      mostraraplicacion(function () {
        console.log("Dispositivo listo para usarse! " + a);
      });
    });
  });
});

console.log("conectar el cargador!!")