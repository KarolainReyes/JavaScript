// Recorrer colecciones en JavaScript
const mediosDeTransporte = ["Carro", "Moto", "Avión", "Cicla", "Bus", "Barco"];

let cedulasCampers = new Set();
cedulasCampers.add("6666666666"); //Karolain
cedulasCampers.add("1234567890"); //Dylan
cedulasCampers.add("0987654321"); //Nicolas

let celular = {
    marca: "Samsung",
    color: "Blanco",
    almacenamiento: "256 GB"
}

// Recorrer usando un for estándar

for (let i = 0; i < mediosDeTransporte.length; i++) {
    const element = mediosDeTransporte[i];
    console.log(i, " - ", element)
}

for (let medio of mediosDeTransporte){
    console.log(medio)
}

for (let cedula of cedulasCampers){
    console.log(cedula)
}

// REcorrer un objeto
for (let propiedad in celular){
    console.log(propiedad, "-", celular[propiedad])
}