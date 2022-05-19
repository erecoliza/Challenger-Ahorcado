function funcionIniciar(){
    swal("Iniciar Juego", "Se Iniciara el juego", "info");   
}

function funcionAgregar(){
    swal("Agregar", {
        content:{
            element: "input",
            attributes: {
              placeholder: "Ingrese palabra",
            },
          },                 
          buttons: true,               
      },)
      .then((value) => {
          if (value == null) {
            swal("operación cancelada", {
                icon: "warning",
              });
          } else {
        swal(`se agrego la palabra =>  ${value}`, {
            icon: "success",
          });
          }
      });

    }
/*
    swal("Ingrese una palabra", {
        content: "input",        
        button: {
            text: "Agregar",
            closeModal: false,
          },
        }
      )
      .then((value) => {
        swal(`Esta palabra se agregara a la lista: ${value}`);        
      });  
    }

/*
swal("", {
    content:{
        element: "input",
        attributes: {
          placeholder: "Ingrese palabra",
        },
      },    
    buttons: {
      cancel: "Cancelar",
      catch: {
        text: "Agregar",
        value: "Agregar"
      }
    },
  })
  .then((value) => {
    switch (value) {      
      case "Agregar":
        swal("Agregar", `Esta palabra se agregara a la lista: ${value}`, "success");
        break;
   
      default:
        swal("NO se agrego la palabra ingresada");
    }
  });         
}
*/

iniciarJuego.onclick = funcionIniciar;
agregarPalabra.onclick = funcionAgregar;