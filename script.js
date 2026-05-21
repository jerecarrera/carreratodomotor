function consultar() {
    alert("Gracias por tu interés, un vendedor se comunicará pronto.");
}
 
 
// Funcion 2: se activa cuando el usuario hace clic en "Enviar" en nosotros.html
// Valida que el campo Nombre no este vacio antes de enviar
function validarFormulario() {
 
    // Buscamos el campo de texto con id="nombre" y guardamos lo que escribio el usuario
    var nombre = document.getElementById("nombre").value;
 
    // Comprobamos si el campo esta vacio
    if (nombre == "") {
        // Si esta vacio, mostramos un aviso
        alert("Por favor, completá el campo Nombre antes de enviar el mensaje.");
 
    } else {
        // Si tiene algo escrito, el formulario se puede enviar
        alert("¡Mensaje enviado! Gracias, " + nombre + ". Te vamos a responder pronto.");
    }
 
}