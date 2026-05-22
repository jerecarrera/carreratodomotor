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
// Funcion 3: Simulador de Financiacion
// Se activa cuando el usuario hace clic en "Calcular Cuota"
function calcularCuota() {

    // PASO 1: Capturamos los datos que eligio el usuario
    var precio  = parseFloat(document.getElementById("autoElegido").value);
    var entrega = parseFloat(document.getElementById("entrega").value);
    var cuotas  = parseInt(document.getElementById("cuotas").value);

    // PASO 2: Validamos que la entrega no este vacia ni sea negativa
    if (isNaN(entrega) || entrega < 0) {
        alert("Por favor ingresá un monto de entrega válido.");
        return;
    }

    
    if (entrega >= precio) {
        alert("La entrega no puede ser mayor o igual al precio del auto.");
        return;
    }


    var saldo         = precio - entrega;                  // Lo que queda por financiar
    var interes       = saldo * 0.03 * cuotas;             // Interes total (3% por mes)
    var totalAPagar   = saldo + interes;                   // Saldo mas el interes
    var cuotaMensual  = totalAPagar / cuotas;              // Dividimos en cuotas iguales

    var resultado = document.getElementById("resultadoSimulador");

    resultado.innerHTML =
        "<strong>Resultado del Simulador:</strong><br>" +
        "Precio del auto: U$D " + precio.toFixed(2) + "<br>" +
        "Entrega inicial: U$D " + entrega.toFixed(2) + "<br>" +
        "Saldo a financiar: U$D " + saldo.toFixed(2) + "<br>" +
        "Interés total (3% x mes): U$D " + interes.toFixed(2) + "<br>" +
        "Total a pagar en cuotas: U$D " + totalAPagar.toFixed(2) + "<br>" +
        "<strong style='color:#ff4444; font-size:17px;'>&#10132; Cuota mensual: U$D " + cuotaMensual.toFixed(2) + "</strong>";
}