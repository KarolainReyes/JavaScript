// Manipulación de objetos

const videojuego = {
    nombre: "Tetris",
    genero: "Puzzle",
    plataforma: ["Pc", "Android", "iOS", "Nintendo Switch", "Play"],
    creadores: [
        {nombre: "Daniel Vinasco", telefono: "4324342352"},
        {nombre: "Sergio", telefono: "8775695695"}
    ],
    cargarPartida: function(){
        console.log("Cargando partida....")
    },
    verNombre: function(){
        console.log(this.nombre)
    },
    verGenero: () => {
        console.log(this.genero)
    }
}

console.log(videojuego.plataforma);
videojuego.cargarPartida();

console.log(videojuego.creadores[0])

videojuego.verNombre()
videojuego.verGenero()

//stringify y parse
const pelota = {
    color: "azul",
    diametro: 30,
    unidad: "cm"
}

pelota.material = "caucho";

console.log(pelota)

const objetoEnCadena= JSON.stringify(pelota, function(clave, valor){
    if (clave === "color"){
        return undefined
    }else{
        return valor
    }
})

console.log(objetoEnCadena)

const pelota2 = JSON.parse(objetoEnCadena);

console.log(pelota2)

//Desestructuración

const computador = {
    marca: "Lenovo",
    tipo: "Portatil",
    procesador: "Intel Atom",
    ram: "4 GB",
    color: "Blanco",
    vendedor: {
        direccion: "Gratamira local 105"
    }
}

// descomponer el objetos en variables

const {marca, tipo, ram: memoria, color: estilo = "Negro", vendedor: {direccion: ubicacion}} = computador;

console.log(marca)
console.log(memoria)
console.log(estilo)
// console.log(vendedor)
console.log(ubicacion)

function esLenovo({marca}){
    if(marca == "Lenovo"){
        console.log("Si es lenovo")
    }else{
        console.log("No es lenovo")
    }
}

esLenovo(computador)

// Operador Rest
const {marca: fabricante, ...resto} = computador

console.log(marca)
console.log(resto)

const usuario1 = {
    nombre: "Dylan",
    documento: 1332457568676
}

const usuario2 = {
    nombre: "Jefferson",
    direccion: "calle 1 #1-1"
}

// creación de un objeto uniendo otros dos y agregando una nueva propiedad
const usuario3 = {
    ...usuario1,
    ...usuario2,
    telefono: 36362625473424
}

console.log(usuario3)

const planta = {
    nombre: "Palmera de Girón",
    clima: "Calor"
}

const planta2 = {...planta};

planta2.clima = "frio";

console.log(planta)
console.log(planta2)