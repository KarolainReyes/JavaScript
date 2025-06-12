const titulo = document.createElement("h1");
titulo.textContent = "Agregando un hijo en el Body 👻";
//Agregar un hijo en un elemento
document.body.appendChild(titulo);

//Como agregar un hijo después de otro
const parrafo = document.createElement("p");
parrafo.textContent = "Esto es un párrafo";
const contenedor = document.createElement("div");
contenedor.appendChild(parrafo)
document.body.appendChild(contenedor)

const parrafo2 = document.createElement("p");
parrafo2.textContent = "Este es un segundo párrafo";
contenedor.appendChild(parrafo2)

// Agregar un elemento antes de otro
const titulo2 = document.createElement("h2");
titulo2.textContent = "Titulo antes de otro elemento"
contenedor.insertBefore(titulo2, parrafo2);

// Eliminar un hijo
// contenedor.removeChild(parrafo);
// contenedor.removeChild(contenedor.firstElementChild)

//Reemplazar un hijo con otro
const parrafoIntermedio = document.createElement("p");
parrafoIntermedio.textContent = "Soy el nuevo hijo";
contenedor.replaceChild(parrafoIntermedio, titulo2) //reemplazo un hijo
//contenedor.replaceChildren(parrafoIntermedio) //reemplazo todos los hijos


// método before
const elemento = document.createElement("p");
elemento.textContent = "👀👄👀";
//contenedor.before(elemento) //Antes del contenedor
//contenedor.after(elemento) //Después del contenedor
//contenedor.prepend(elemento) //Al inicio de los hijos del contenedor

//Reemplaza todo el elemento con su contenido
// contenedor.replaceWith(elemento);


//Eliminando todo el nodo (elemento)
// contenedor.remove()

console.log(parrafoIntermedio.parentElement)
console.log(parrafoIntermedio.firstElementChild)
console.log(parrafoIntermedio.previousElementSibling)