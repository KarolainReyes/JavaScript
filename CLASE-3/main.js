//Funciones
//declarativa
function primo(num) {
  let esprimo = true;
  if (num <= 1) {
    esprimo = false;
  } else {
    for (let i = 2; i < num / 2; i++) {
      if (num % i == 0) {
        esprimo = false;
        break;
      }
    }
  }
  return esprimo;
}

// console.log(primo(5))
// console.log(primo(10))
// console.log(primo(19))
// console.log(primo(33))

//Funcion de expresión
var areaTriangulo = function (base, altura) {
  return (base * altura) / 2;
};

// console.log(areaTriangulo(2,5)) //5
// console.log(areaTriangulo(5,6)) //15

//declarativa
function areaCuadrado(lado) {
  return lado * lado;
}

//Funcion de expresión de tipo flecha
var volumenCubo = (lado) => {
  return areaCuadrado(lado) * lado;
};

// console.log(volumenCubo(3));//27
// console.log(volumenCubo(4));//64

//Funciones Autoejecutables

var valor = 4;

// (function (dia) {
//   switch (dia) {
//     case 1:
//       console.log("Lunes");
//       break;
//     case 2:
//       console.log("Martes");
//       break;
//     case 3:
//       console.log("Miércoles");
//       break;
//     case 4:
//       console.log("Jueves");
//       break;
//     case 5:
//       console.log("Viernes");
//       break;
//     case 6:
//       console.log("Sábado");
//       break;
//     case 7:
//       console.log("Domingo");
//       break;
//     default:
//       console.log("Ubicate!!!");
//       break;
//   }
// })(valor);

console.log(6/0)


console.log(isNaN("Hola"))
console.log(isNaN(6/0))
console.log(isNaN("Hola"*7))