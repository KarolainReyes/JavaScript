function saludo(nombre) {
    return new Promise(function (resolve, reject) {
      if (nombre === "Chat GPT") {
        reject("Eso no un estudiante!!");
      } else {
        setTimeout(function () {
          console.log("Bienvenido " + nombre + " a su dispositivo!");
          resolve(nombre);
        }, 5000);
      }
    });
  }
  
  function mostraraplicacion(nombre) {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        console.log("Mostrar icono de aplicación!!");
        resolve(nombre);
      }, 2000);
    });
  }
  
  console.log("Encender dispositivo!");
  saludo("Edgar")
    .then(mostraraplicacion)
    .then(mostraraplicacion)
    .then(mostraraplicacion)
    .then(mostraraplicacion)
    .then(mostraraplicacion)
    .then(mostraraplicacion)
    .then(mostraraplicacion)
    .then(mostraraplicacion)
    .then(mostraraplicacion)
    .then(mostraraplicacion)
    .then(mostraraplicacion)
    .then((respuesta) => {
      console.log("Dispositivo listo para usarse! " + respuesta);
    })
    .catch((error)=>{
      console.error(error)
    })
    .finally(()=>{
      console.log("Bye!!")
    })
  
  // saludo("Daniel", function (a) {
  //   mostraraplicacion(function () {
  //     mostraraplicacion(function () {
  //       mostraraplicacion(function () {
  //         console.log("Dispositivo listo para usarse! " + a);
  //       });
  //     });
  //   });
  // });
  // console.log("conectar el cargador!!")