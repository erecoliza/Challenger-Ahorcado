function funcionLeerDiccionario(){
  const requestURL = './diccionario.json';
  const request = new XMLHttpRequest();
  request.open('GET', requestURL);
  request.responseType = 'json';
  request.send();
  request.onload = function() {
    const diccionario = request.response;
    const myString = JSON.stringify(diccionario);
    swal("Logrado", myString, "success"); 
  }
}

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
  window.location.href = "/"; 
}






