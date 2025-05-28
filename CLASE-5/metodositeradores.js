// Métodos iteradores en JavaScript
const mediosDeTransporte = ["Carro", "Moto", "Avión", "Cicla", "Bus", "Barco"];

// foreach
mediosDeTransporte.forEach(function(elemento){
    console.log(elemento, "-", ":)");
})

// map
let mediosDeTransporteConCaritaFeliz = mediosDeTransporte.map((elemento)=>{
    return elemento+ " :)";
})

console.log(mediosDeTransporteConCaritaFeliz)

// filter
let mediosDeTransporteQueComiencenConA = mediosDeTransporte.filter(function(elemento){
    return elemento.startsWith("A");
})

console.log(mediosDeTransporteQueComiencenConA)


// devolver los elementos de más de 4 letras con una carita feliz
mediosDeTransporte.filter(function(elemento){
    return elemento.length > 4;
}).map(function(elemento){
    return elemento + " :)";
}).forEach((e)=> console.log(e));