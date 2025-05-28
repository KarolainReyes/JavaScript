let cedulasCampers = new Set();

// Agregar elementos
cedulasCampers.add("6666666666"); //Karolain
cedulasCampers.add("1234567890"); //Dylan
cedulasCampers.add("0987654321"); //Nicolas
cedulasCampers.add("6666666666"); // Karolain
console.log(cedulasCampers);

// eliminar elementos
cedulasCampers.delete("1234567890");
console.log(cedulasCampers)

// Saber si un elemento está
console.log(cedulasCampers.has("6666666666"));

// Tamaño 
console.log(cedulasCampers.size)

// Transformar lista en conjuntos
let dulces = ["Chocolatina", "Barrilete", "Chao", "Chao"];

let conjuntoDulces = new Set(dulces);

console.log(conjuntoDulces);

// Tansfomar cojunto a lista
dulces = Array.from(conjuntoDulces);
