// Listas o arreglos en JavaScript
const mediosDeTransporte = ["Carro", "Moto", "Avión", "Cicla", "Bus", "Barco"];

console.log(mediosDeTransporte)

// Acceder a un elemento
console.log(mediosDeTransporte[2])

// Cambiar un elemento
mediosDeTransporte[1] = "Motocicleta";
console.log(mediosDeTransporte)

// Añadir un elemento al final
mediosDeTransporte.push("Tren");
console.log(mediosDeTransporte)

// Añadir un elmento al inicio
mediosDeTransporte.unshift("Patineta");
console.log(mediosDeTransporte)

// Eliminar del final
let eliminado = mediosDeTransporte.pop()
console.log(eliminado)
console.log(mediosDeTransporte)

// Eliminar el inicio
mediosDeTransporte.shift()
console.log(mediosDeTransporte)

// Obtener el tamaño de un arreglo
console.log(mediosDeTransporte.length);

// Obtener la posicion de un valor
console.log(mediosDeTransporte.indexOf("Cicla2"))

// Eliminar y manipular por posicion
console.log(mediosDeTransporte) // ["Carro", "Motocicleta", "Avión", "Cicla", "Bus", "Barco"]

// Eliminar el elemento de la posición 2
mediosDeTransporte.splice(2, 1);
console.log(mediosDeTransporte);

// Añadir despues de Motocicleta tren y avión
mediosDeTransporte.splice(2, 0, "Tren", "Avión");
console.log(mediosDeTransporte);

// Eliminar de atrás hacia adelante
mediosDeTransporte.splice(-2, 1, "Patineta");
console.log(mediosDeTransporte);

// PAsar arreglo a cadena
console.log(mediosDeTransporte.toString());

// Pasar el arreglo a cadena separando los elementos con un *
let nuevaCadena = mediosDeTransporte.join(" * ");
console.log(nuevaCadena);

// Ordenar un arreglo
console.log(mediosDeTransporte)
mediosDeTransporte.sort((ele1, ele2) => ele1.length - ele2.length) // si la respuesta es negativa ele1 va antes que ele 2
console.log(mediosDeTransporte)