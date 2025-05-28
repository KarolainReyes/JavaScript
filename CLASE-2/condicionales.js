// var edad = Number(prompt("Ingrese su edad!!"));

var edad = 5;

//Condicionales

if (edad < 12){
    alert("Usted es ninx!!");
}else if (edad < 18){
    alert("Usted es adolescente!!");
}else if (edad < 50){
    alert("Usted es adulto!!");
}else {
    alert("Usted es adulto mayor!!");
}

//Operador ternario
console.log((edad < 18) ? "No puede entrar": "Puede entrar")

//Estructura múltiple
var mes = "3";

switch (mes) {
    case 1:
        console.log("Enero")
        break;
    case 2:
        console.log("Febrero")
        break;
    case 3:
        console.log("Marzo")
        break;
    default:
        console.log("El mes no existe!!")
        break;
}