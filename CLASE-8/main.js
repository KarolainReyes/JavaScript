function obtenerPersonaje(nombre) {
    return new Promise((resolve, reject) => {
      if (nombre === "Veigar") {
        setTimeout(function () {
          console.log("Petición exitosa!!");
          resolve({
            name: "Veigar",
            dificultad: 0,
            tipo: "Mago",
          });
        }, 2000);
      } else {
        reject(
          "Error el resto de personajes si necesitan habilidad en las manos!!!"
        );
      }
    });
  }
  
  // Ejemplo promesas tradicional
  // obtenerPersonaje("Veigar").then((respuesta)=>{
  //     console.log(respuesta)
  // })
  // .then(()=>{
  //     console.log("Fin");
  // })
  // .catch((er)=>{
  //     console.error(er)
  // })
  
  // Ejemplo promesas con Async/Await
  async function peticionPersonaje() {
    try {
      var personaje = await obtenerPersonaje("Veigar");
      console.log(personaje);
      var personaje = await obtenerPersonaje("Veigar");
      console.log(personaje);
      var personaje = await obtenerPersonaje("Veigar");
      console.log(personaje);
      var personaje = await obtenerPersonaje("Veigar");
      console.log(personaje);
      var personaje = await obtenerPersonaje("Akali");
      console.log(personaje);
    } catch (error) {
      console.error(error);
    }
  
    console.log("Fin");
  }
  
  peticionPersonaje();
  
  // Ejemplo Async/await con then()
  
  // async function peticionPersonaje() {
  //   await obtenerPersonaje("Veigar")
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((er) => {
  //       console.error(er);
  //     });
  //   console.log("Fin");
  // }
  
  // peticionPersonaje();