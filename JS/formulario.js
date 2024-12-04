const validarFormulario =()=>{
    let esValido=true

const nombre= document.querySelector("#nombre").value.trim()
const correo= document.querySelector("#email").value.trim()
const comentario= document.querySelector("#dudas").value.trim()

if (nombre === ""){
    mostrarError('nombre', "El nombre es obligatorio")
    esValido= false
} else {
    limpiarError('nombre')
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailRegex.test(email)) {
  mostrarError('email', 'El email no es válido');
  esValido = false;
} else {
  limpiarError('email');
}

if (dudas === "") {
    mostrarError('dudas', 'Por favor escribe tus dudas.');
    esValido = false;
  } else {
    limpiarError('dudas');
  }

  return esValido

}

const mostrarError=(campoID, mensaje)=>{
    const errorContainer= document.querySelector(#Error-${campoID})
    
    if (errorContainer){
        errorContainer.innerHTML= mensaje
        errorContainer.style.display='block'
    }

}

const limpiarError=(campoID)=>{
    const errorContainer= document.querySelector(#Error-${campoID})
    if(errorContainer){
        errorContainer.innerHTML=''
        errorContainer.style.display='none'
    }
}