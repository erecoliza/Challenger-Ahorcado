function funcionIniciar(){
  /*swal("Iniciar Juego", "Se Iniciara el juego", "info");*/
  window.location.href = "./juego.html"; 
}

function funcionAgregar(){ 
  var palabra = document.createElement("input");
  palabra.maxLength = 8 ; 
  palabra.placeholder = "Ingrese palabra";

  swal("Agregar Palabra  (Máx. de 8 letras)", {
  content:{
      element: palabra,
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
      swal("Agregar", `"${palabra.value}"  se agregara a la lista`, "success");
      break;
 
    default:
      swal("operación cancelada", {
        icon: "warning",
      });
  }
});         
}

function funcionDesistir(){ 
  console.log("llegue");
  window.location.href = "/"; 
}






