let campers = new Map();

//Agregar elementos
campers.set("Daniel", "🔫");
campers.set("Alexis", "👻");
campers.set("Camila", "🤧");
campers.set("Daniel", "🐟");
console.log(campers)


//Obtener elementos
console.log(campers.get("Alexis"))

// Saber si un elemento está
console.log(campers.has("Alexis"))

// Tamaño de un Mapa
console.log(campers.size)

// Eliminar
campers.delete("Daniel");
console.log(campers)