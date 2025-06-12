function cambiarClases() {
    const contenedor = document.getElementById("contenedor");
    const clases = contenedor.classList;
    if (clases.length == 0) {
      clases.add("contenedor");
    } else if (clases.contains("contenedor")) {
      clases.replace("contenedor", "contenedor2");
    } else if (clases.contains("contenedor2")) {
      clases.replace("contenedor2", "contenedor");
    }
  }
  
  // const contenedor = document.getElementById("contenedor");
  // const clases = contenedor.classList;
  
  // //obtener el tamaño de las clases
  // console.log(clases.length);
  
  // //obtener una clase por posición
  // console.log(clases[0]);
  // console.log(clases.item(0));
  
  // //Verificar si un elemento contiene una clase
  // console.log(clases.contains("contenedor"));
  // console.log(clases.contains("contenedor2"));
  
  // //Agregar clases
  // clases.add("contenedor");
  
  // //Eliminar clases
  // clases.remove("contenedor");
  
  // // toggle con clases - Si está lo elimina y si no está lo agrega
  // clases.toggle("contenedor");
  
  // //reemplazar clases
  // console.log(clases);
  // clases.replace("contenedor", "contenedor2");
  // console.log(clases);
  
  // Obtener contenido
  function obtenerContenido() {
    const texto = document.getElementById("contenedor");
    const impresion = document.getElementById("impresion");
    //contenido en texto
      impresion.textContent = texto.textContent;
  
    // contenido de texto interno con las etiquetas existentes
    impresion.textContent = texto.innerHTML;
  
    // contenido de texto interno con las etiquetas existentes más sus propias etiquetas
    impresion.textContent = texto.outerHTML;
  }
  
  //Ejemplo de list dinámica a partir de una fuente de datos (lista)
  const campers = ["Daniel", "Camila", "Sergio", "Valentina", "Santiago"]
  const lista = document.getElementById("mi-lista");
  let contenido = "";
  for (const element of campers) {
      contenido += "<li>"+element+"</li>";
  }
  lista.innerHTML = contenido;